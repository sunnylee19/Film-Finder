package com.filmfinder.controller;

import com.filmfinder.model.Admin;
import com.filmfinder.model.Comment;
import com.filmfinder.model.User;
import com.filmfinder.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(allowCredentials = "true", origins = {"http://localhost:3000", "https://cs5610-film-finder.herokuapp.com"})
public class CommentController {
    private static final String USER_KEY = "user";

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/api/movies/{movieId}/comments")
    public List<Comment> getCommentsForMovie(@PathVariable String movieId) {
        return this.commentRepository.findCommentsForMovie(movieId);
    }

    @PostMapping("/api/movies/{movieId}/comments")
    public Comment postComment(@PathVariable String movieId,
                               @RequestBody Comment comment,
                               HttpSession session) {
        Object obj = session.getAttribute(USER_KEY);
        if (obj == null) {
            throw new RuntimeException("Not logged in");
        }
        User user = (User) obj;
        comment.setUser(user);
        comment.setMovieId(movieId);
        comment.setFlagged(false);
        comment.setEndorsed(null);
        return this.commentRepository.save(comment);
    }

    @PutMapping("/api/comments/{commentId}")
    public Comment updateComment(@PathVariable int commentId,
                                 @RequestBody Comment comment,
                                 HttpSession session) {
        Object obj = session.getAttribute(USER_KEY);
        if (obj == null) {
            throw new RuntimeException("Not logged in");
        }
        User user = (User)obj;

        Comment toUpdate = this.commentRepository.findById(commentId).get();
        if (comment.getFlagged() != null) toUpdate.setFlagged(comment.getFlagged());
        if ((user instanceof Admin) && comment.getEndorsed() != null) toUpdate.setEndorsed((Admin)user);

        return this.commentRepository.save(toUpdate);
    }

    @DeleteMapping("/api/comments/{commentId}")
    public int deleteComment(@PathVariable int commentId,
                             HttpSession session) {
        Object obj = session.getAttribute(USER_KEY);
        if (obj == null) {
            throw new RuntimeException("Not logged in");
        }
        User user = (User)obj;
        Optional<Comment> comment = this.commentRepository.findById(commentId);
        if (!comment.isPresent()) return 0;
        Comment c = comment.get();
        if (user.getId() == c.getUser().getId() || user instanceof Admin) {
            this.commentRepository.deleteById(commentId);
        } else {
            throw new RuntimeException("You may only delete your own comments unless you are an admin");
        }

        return 1;
    }
}

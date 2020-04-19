package com.filmfinder.controller;

import com.filmfinder.model.Comment;
import com.filmfinder.model.User;
import com.filmfinder.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(allowCredentials = "true", origins = {"http://localhost:3000", "https://cs5610-film-finder.herokuapp.com"})
public class CommentController {
    private static final String USER_KEY = "user";
    private boolean flagged;
    private boolean endorsed;

    public boolean isEndorsed() {
        return endorsed;
    }

    public void setEndorsed(boolean endorsed) {
        this.endorsed = endorsed;
    }

    public boolean isFlagged() {
        return flagged;
    }

    public void setFlagged(boolean flagged) {
        this.flagged = flagged;
    }

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
        return this.commentRepository.save(comment);
    }

    @PutMapping("api/comments/{commentId}")
    public Comment updateComment(@PathVariable String movieId,
                                 @RequestBody Comment comment,
                                 HttpSession session) {
        Object obj = session.getAttribute(USER_KEY);
        if (obj == null) {
            throw new RuntimeException("Not logged in, cannot update.")
        }
        User user = (User) obj;
        // To Do: add to the comment model to update.
        comment.setUser(user);
        comment.setMovie(movieId);

        if (comment.isFlagged && comment.length != 0) {
            console.log("Inappropriate comment.");
            comment.updateComment();
        }

        if (comment.isEndorse && comment.length != 0) {
            console.log("Endorsed comment: " + comment.toString);
            comment.endorseComment();
        }
    }
}

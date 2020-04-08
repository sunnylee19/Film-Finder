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
}

package com.filmfinder.controller;

import com.filmfinder.model.Recommendation;
import com.filmfinder.model.User;
import com.filmfinder.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
@CrossOrigin(allowCredentials = "true", origins = {"http://localhost:3000", "https://cs5610-film-finder.herokuapp.com"})
public class RecommendationController {
    private static final String USER_KEY = "user";

    @Autowired
    private RecommendationRepository recommendationRepository;

    @GetMapping("/api/users/user/recommendations")
    public List<Recommendation> getRecommendations(HttpSession session) {
        if (session.getAttribute(USER_KEY) == null) {
            throw new RuntimeException("Must be logged in");
        }
        User u = (User)session.getAttribute(USER_KEY);
        return this.recommendationRepository.getRecommendedMoviesForUser(u);
    }
}

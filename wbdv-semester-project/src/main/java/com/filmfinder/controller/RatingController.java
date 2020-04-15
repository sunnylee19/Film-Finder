package com.filmfinder.controller;

import com.filmfinder.model.MovieRecommendation;
import com.filmfinder.model.Rating;
import com.filmfinder.model.Recommendation;
import com.filmfinder.model.User;
import com.filmfinder.repository.RatingRepository;
import com.filmfinder.repository.RecommendationRepository;
import com.filmfinder.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(allowCredentials = "true", origins = {"http://localhost:3000", "https://cs5610-film-finder.herokuapp.com"})
public class RatingController {
    private static final String USER_KEY = "user";
    @Autowired
    private RatingRepository ratingRepository;
    @Autowired
    private RecommendationRepository recommendationRepository;
    @Autowired
    private MovieService movieService;

    @GetMapping("/api/movies/{movieId}/rating")
    public double getRatingForMovie(@PathVariable String movieId) {
        return this.ratingRepository.getMovieAverageRating(movieId);
    }

    @GetMapping("/api/movies/{movieId}/myRating")
    public Optional<Rating> getMyRatingForMovie(@PathVariable String movieId,
                                                HttpSession session) {
        if (session.getAttribute(USER_KEY) == null) {
            throw new RuntimeException("Must be logged in");
        }
        User u = (User)session.getAttribute(USER_KEY);
        Rating.RatingId id = new Rating.RatingId();
        id.setMovieId(movieId);
        id.setUser(u);
        return this.ratingRepository.findById(id);
    }

    @PostMapping("/api/movies/{movieId}/rating")
    public int rateMovie(@PathVariable String movieId,
                         @RequestBody int val,
                         HttpSession session) {
        if (session.getAttribute(USER_KEY) == null) {
            throw new RuntimeException("Must be logged in");
        }
        User u = (User)session.getAttribute(USER_KEY);
        Rating.RatingId id = new Rating.RatingId();
        id.setUser(u);
        id.setMovieId(movieId);
        Rating rating = this.ratingRepository.findById(id).orElseGet(() -> {
            Rating r = new Rating();
            r.setValue(3);
            return r;
        });

        int diff = val - rating.getValue();

        rating.setId(id);
        rating.setValue(val);

        List<MovieRecommendation> recommendations = this.movieService.getRecommendationsForMovie(movieId);
        List<Recommendation.RecommendationId> recIds = recommendations
                .stream()
                .map((MovieRecommendation recommendation) -> {
                    Recommendation.RecommendationId newId = new Recommendation.RecommendationId();
                    newId.setMovieId(Integer.toString(recommendation.getId()));
                    newId.setUser(u);
                    return newId;
                }).collect(Collectors.toList());
        List<Recommendation> recs = this.recommendationRepository.findAllById(recIds);
        Set<Recommendation.RecommendationId> idSet = recs.stream().map(item -> item.getId()).collect(Collectors.toSet());
        Map<String, MovieRecommendation> idToRec = new HashMap<>();
        recommendations.forEach(rec -> idToRec.put(Integer.toString(rec.getId()), rec));
        recs.forEach(item -> item.setValue(item.getValue() + diff));

        this.recommendationRepository.saveAll(recIds.stream().filter(item -> !idSet.contains(item)).map(item -> {
            Recommendation rec = new Recommendation();
            rec.setId(item);
            rec.setValue(diff);
            rec.setMovie(idToRec.get(item.getMovieId()));
            return rec;
        }).collect(Collectors.toList()));
        this.recommendationRepository.saveAll(recs);

        this.ratingRepository.save(rating);
        return 1;
    }
}

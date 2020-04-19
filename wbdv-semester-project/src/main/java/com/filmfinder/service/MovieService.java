package com.filmfinder.service;

import com.filmfinder.model.MovieRecommendation;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class MovieService {

    static class Recommendations {
        public List<MovieRecommendation> results;
    }

    public List<MovieRecommendation> getRecommendationsForMovie(String movieId) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<Recommendations> rec = template.getForEntity(String.format("https://api.themoviedb.org/3/movie/%s/recommendations?api_key=4ca6c6bbbaf60e7c9e7d62b0ca7fe3cb", movieId), Recommendations.class);

        return rec.getBody().results;
    }
}

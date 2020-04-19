package com.filmfinder.repository;

import com.filmfinder.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RatingRepository extends JpaRepository<Rating, Rating.RatingId> {

    @Query("select avg(rating.value) from Rating rating where rating.id.movieId=?1")
    double getMovieAverageRating(String movieId);

}

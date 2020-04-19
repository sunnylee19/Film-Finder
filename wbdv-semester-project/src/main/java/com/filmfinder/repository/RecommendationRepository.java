package com.filmfinder.repository;

import com.filmfinder.model.Recommendation;
import com.filmfinder.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RecommendationRepository extends JpaRepository<Recommendation, Recommendation.RecommendationId> {

    @Query("select distinct rec from Recommendation rec left join fetch rec.movie.genre_ids where rec.value > 0 and rec.id.user = ?1 order by rec.value desc")
    public List<Recommendation> getRecommendedMoviesForUser(User u);
}

package com.filmfinder.model;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class Recommendation {
    @EmbeddedId
    private Recommendation.RecommendationId id;
    private int value;

    public RecommendationId getId() {
        return id;
    }

    public void setId(RecommendationId id) {
        this.id = id;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Embeddable
    public static class RecommendationId implements Serializable {
        private String movieId;
        @ManyToOne
        private User user;

        public String getMovieId() {
            return movieId;
        }

        public void setMovieId(String movieId) {
            this.movieId = movieId;
        }

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }

        public boolean equals(Object o) {
            if (!(o instanceof RecommendationId)) return false;
            RecommendationId other = (RecommendationId)o;

            return movieId.equals(other.movieId) && user.getId() == other.user.getId();
        }

        public int hashCode() {
            return Objects.hash(movieId, user.getId());
        }
    }
}

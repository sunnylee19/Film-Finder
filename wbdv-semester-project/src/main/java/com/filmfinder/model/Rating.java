package com.filmfinder.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class Rating {
    @EmbeddedId
    private RatingId id;
    private int value;

    public RatingId getId() {
        return id;
    }

    public void setId(RatingId id) {
        this.id = id;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    @Embeddable
    public static class RatingId implements Serializable {
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
            if (!(o instanceof RatingId)) return false;
            RatingId other = (RatingId)o;

            return movieId.equals(other.movieId) && user.getId() == other.user.getId();
        }

        public int hashCode() {
            return Objects.hash(movieId, user.getId());
        }
    }
}

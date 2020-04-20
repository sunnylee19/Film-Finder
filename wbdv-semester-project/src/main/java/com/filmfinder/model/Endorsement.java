package com.filmfinder.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Endorsement {
    @Embedded
    @Id
    private EndorsementId id;

    public EndorsementId getId() {
        return id;
    }

    public void setId(EndorsementId id) {
        this.id = id;
    }

    @Embeddable
    public static class EndorsementId implements Serializable {
        @ManyToOne
        private User user1;
        @ManyToOne
        private User user2;

        public User getUser1() {
            return user1;
        }

        public void setUser1(User user1) {
            this.user1 = user1;
        }

        public User getUser2() {
            return user2;
        }

        public void setUser2(User user2) {
            this.user2 = user2;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EndorsementId that = (EndorsementId) o;

            if (user1 != null ? !user1.equals(that.user1) : that.user1 != null) return false;
            return user2 != null ? user2.equals(that.user2) : that.user2 == null;
        }

        @Override
        public int hashCode() {
            int result = user1 != null ? user1.hashCode() : 0;
            result = 31 * result + (user2 != null ? user2.hashCode() : 0);
            return result;
        }
    }
}

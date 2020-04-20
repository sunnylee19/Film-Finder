package com.filmfinder.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Admin extends User {
    final private String type = "ADMIN";
    @OneToMany(mappedBy="endorsed")
    @JsonIgnore
    private List<Comment> endorsedComments;


    public List<Comment> getEndorsedComments() {
        return endorsedComments;
    }

    public void setEndorsedComments(List<Comment> endorsedComments) {
        this.endorsedComments = endorsedComments;
    }

    public String getType() {
        return type;
    }
}

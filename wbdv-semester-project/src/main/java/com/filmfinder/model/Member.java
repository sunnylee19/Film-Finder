package com.filmfinder.model;

import javax.persistence.Entity;

@Entity
public class Member extends User {
    final private String type = "MEMBER";

    public String getType() {
        return type;
    }
}

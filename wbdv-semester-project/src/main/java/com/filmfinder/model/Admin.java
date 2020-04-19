package com.filmfinder.model;

import javax.persistence.Entity;

@Entity
public class Admin extends User {
    final private String type = "ADMIN";

    public String getType() {
        return type;
    }
}

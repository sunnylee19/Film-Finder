package com.filmfinder.repository;

import com.filmfinder.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select user from User user where user.email=?1 and user.password=?2")
    Optional<User> findUserByEmailAndPassword(String email, String encryptedPassword);
}

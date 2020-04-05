package com.filmfinder.controller;

import com.filmfinder.model.User;
import com.filmfinder.util.Cryptography;
import com.filmfinder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {
    private static final String USER_KEY = "user";

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/api/login")
    public User login(@RequestBody User user,
                      HttpSession session) {
        String encryptedPassword = Cryptography.sha256(user.getPassword());
        Optional<User> maybeUser = this.userRepository.findUserByEmailAndPassword(user.getEmail(), encryptedPassword);
        if (maybeUser.isPresent()) {
            session.setAttribute(USER_KEY, maybeUser.get());
            return maybeUser.get();
        } else {
            throw new RuntimeException("Incorrect email or password");
        }
    }

    @PostMapping("/api/logout")
    public int logout(HttpSession session) {
        session.removeAttribute(USER_KEY);
        return 1;
    }

    @GetMapping("/api/users/user")
    public User profile(HttpSession session) {
        Object attr = session.getAttribute(USER_KEY);
        if (attr == null) throw new RuntimeException("Not logged in");
        User user = (User)attr;
        return this.userRepository.findById(user.getId()).get();
    }

    @GetMapping("/api/users/{userId}")
    public Optional<User> externalProfile(HttpSession session, @PathVariable int userId) {
        return this.userRepository.findById(userId);
    }

    @PutMapping("/api/users/user")
    public User updateProfile(HttpSession session, @RequestBody User updatedUser) {
        Object attr = session.getAttribute(USER_KEY);
        if (attr == null) throw new RuntimeException("Not logged in");
        User user = (User)attr;

        user.setBio(updatedUser.getBio());
        user.setDOB(updatedUser.getDOB());
        user.setPhone(updatedUser.getPhone());
        user.setProfilePicture(updatedUser.getProfilePicture());
        session.setAttribute(USER_KEY, user);
        this.userRepository.save(user);
        return user;
    }


}

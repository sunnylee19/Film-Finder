package com.filmfinder.controller;

import com.filmfinder.model.Admin;
import com.filmfinder.model.Member;
import com.filmfinder.model.User;
import com.filmfinder.util.Cryptography;
import com.filmfinder.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.util.Optional;

@RestController
@CrossOrigin(allowCredentials = "true", origins = {"http://localhost:3000", "https://cs5610-film-finder.herokuapp.com"})
public class UserController {
    private static final String USER_KEY = "user";
    private static final String MEMBER = "MEMBER";
    private static final String ADMIN = "ADMIN";

    @Autowired
    private UserRepository userRepository;

    private static class Login {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    private static class Registration extends Login {
        @DateTimeFormat(pattern="yyyy-MM-dd")
        private LocalDate DOB;
        private String type;
        private String firstName;
        private String lastName;

        public String getFirstName() {
            return firstName;
        }

        public void setFirstName(String firstName) {
            this.firstName = firstName;
        }

        public String getLastName() {
            return lastName;
        }

        public void setLastName(String lastName) {
            this.lastName = lastName;
        }

        @DateTimeFormat(pattern="yyyy-MM-dd")
        public LocalDate getDOB() {
            return DOB;
        }

        public void setDOB(@DateTimeFormat(pattern="yyyy-MM-dd") LocalDate DOB) {
            this.DOB = DOB;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            if (!MEMBER.equals(type) && !ADMIN.equals(type)) {
                throw new RuntimeException("Invalid Registration Type");
            }
            this.type = type;
        }
    }

    @PostMapping("/api/login")
    public User login(@RequestBody Login user,
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

    @PostMapping("/api/users")
    public User register(@RequestBody Registration user,
                         HttpSession session) {
        String encryptedPassword = Cryptography.sha256(user.getPassword());

        User newUser = null;
        switch (user.getType()) {
            case MEMBER:
                newUser = new Member();
                break;
            case ADMIN:
                newUser = new Admin();
                break;
            default:
                throw new RuntimeException("Invalid user type provided in registration");
        }
        newUser.setEmail(user.getEmail());
        newUser.setPassword(encryptedPassword);
        newUser.setDOB(user.getDOB());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());

        newUser = this.userRepository.save(newUser);
        session.setAttribute(USER_KEY, newUser);
        return newUser;
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

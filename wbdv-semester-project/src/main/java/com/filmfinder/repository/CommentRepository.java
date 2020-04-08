package com.filmfinder.repository;

import com.filmfinder.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Integer> {

    @Query("select comment from Comment comment where comment.movieId=?1")
    List<Comment> findCommentsForMovie(String movieId);
}
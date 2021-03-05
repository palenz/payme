package com.codeclan.example.PayMe.repositories;

import com.codeclan.example.PayMe.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}

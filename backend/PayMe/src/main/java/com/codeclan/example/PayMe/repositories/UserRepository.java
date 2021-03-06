package com.codeclan.example.PayMe.repositories;

import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Boolean existsByEmail(String email);
    User findByEmail(String email);
}

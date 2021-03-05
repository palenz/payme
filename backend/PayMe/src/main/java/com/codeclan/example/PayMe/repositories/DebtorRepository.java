package com.codeclan.example.PayMe.repositories;

import com.codeclan.example.PayMe.models.Debtor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DebtorRepository extends JpaRepository<Debtor, Long> {
}

package com.codeclan.example.PayMe.repositories;

import com.codeclan.example.PayMe.models.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, UUID> {
    List<Invoice> findByDebtorUserId(UUID id);
}

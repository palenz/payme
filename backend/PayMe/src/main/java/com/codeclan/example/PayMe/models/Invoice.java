package com.codeclan.example.PayMe.models;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.id.UUIDGenerator;

import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.UUID;


@Entity
@Table(name="invoices")
public class Invoice {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column
    private int amount;

    @Column
    private String reason;

    @Column(name = "settlement_date")
    private LocalDate settlementDate;

    @JsonIgnoreProperties({"debtors", "debtor", "invoices"})
    @ManyToOne
    @JoinColumn(name = "debtor_id", nullable = false)
    private Debtor debtor;

    public Invoice(int amount, String reason, Debtor debtor) {
        this.amount = amount;
        this.reason = reason;
        this.debtor = debtor;
        this.settlementDate = null;
    }

    public Invoice() {
    }

    public Debtor getDebtor() {
        return debtor;
    }

    public void setDebtor(Debtor debtor) {
        this.debtor = debtor;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public LocalDate getSettlementDate() {
        return settlementDate;
    }

    public void setSettlementDate(LocalDate settlementDate) {
        this.settlementDate = LocalDate.now();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }
}

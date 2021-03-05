package com.codeclan.example.PayMe.models;
import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalDate;


@Entity
@Table(name="invoices")
public class Invoice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int amount;

    @Column
    private String reason;

    @Column(name = "settlement_date")
    private LocalDate settlementDate;

    @ManyToOne
    private Debtor debtor;


    public Invoice(int amount, String reason) {
        this.amount = amount;
        this.reason = reason;
        this.settlementDate = null;
    }

    public Invoice() {
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

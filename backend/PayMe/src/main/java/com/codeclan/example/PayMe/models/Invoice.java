package com.codeclan.example.PayMe.models;

import java.time.LocalDate;

public class Invoice {

    private int amount;
    private String reason;
    private LocalDate settlementDate;

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
}

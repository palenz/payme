package com.codeclan.example.PayMe.models;

import java.util.ArrayList;
import java.util.List;

public class Debtor {

    private String name;
    private String email;
    private List<Invoice>invoices;

    public Debtor(String name, String email) {
        this.name = name;
        this.email = email;
        this.invoices = new ArrayList<Invoice>();
    }

    public Debtor() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Invoice> getInvoices() {
        return invoices;
    }

    public void addInvoices(Invoice invoice) {
        this.invoices.add(invoice);
    }
}

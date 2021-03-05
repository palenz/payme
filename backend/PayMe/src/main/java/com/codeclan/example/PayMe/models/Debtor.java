package com.codeclan.example.PayMe.models;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;



@Entity
@Table(name = "debtors")
public class Debtor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

//One to many goes here
    @JsonIgnoreProperties({debtors})
    @OneToMany(mappedBy = "debtor", fetch = FetchType.LAZY)
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

    public void setInvoices(List<Invoice> invoices) {this.invoices = invoices;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    }
package com.codeclan.example.PayMe.models;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;

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

    @JsonIgnoreProperties({"debtors"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

//One to many goes here
    @JsonIgnoreProperties({"debtors", "debtor"})
    @OneToMany(mappedBy = "debtor", fetch = FetchType.EAGER) // LAZY OR EAGER?!
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    private List<Invoice>invoices;


    public Debtor(String name, String email, User user) {
        this.name = name;
        this.email = email;
        this.user = user;
        this.invoices = new ArrayList<Invoice>();
    }

    public Debtor() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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


    public void addInvoice(Invoice invoice) {
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

package com.codeclan.example.PayMe.models;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "debtors")
public class Debtor {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "mobile")
    private String mobile;

    @JsonIgnoreProperties({"debtors"})
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonIgnoreProperties({"debtors", "debtor", "user", "invoices", "id"})
    @OneToMany(mappedBy = "debtor", fetch = FetchType.LAZY) // LAZY OR EAGER?!
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    private List<Invoice>invoices;


    public Debtor(String name, String mobile, User user) {
        this.name = name;
        this.mobile = mobile;
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

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public List<Invoice> getInvoices() {
        return invoices;
    }

    public void addInvoice(Invoice invoice) {
        this.invoices.add(invoice);
    }

    public void setInvoices(List<Invoice> invoices) {this.invoices = invoices;}

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    @JsonIgnore
    public int getMoneyOwed(){
        int moneyOwed = 0;
        for (Invoice invoice : this.invoices){
            moneyOwed += invoice.getAmount();
        }
        return moneyOwed;
    }

    
    }

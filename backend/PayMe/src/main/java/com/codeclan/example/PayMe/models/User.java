package com.codeclan.example.PayMe.models;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@javax.persistence.Entity
public class User {

    private String name;
    private String email;
    private List<Debtor>debtors;
    private Long id;

    public User (String name, String email){
        this.name = name;
        this.email = email;
        this.debtors = new ArrayList<Debtor>();
    }

    public User() {
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

    public List<Debtor> getDebtors() {
        return debtors;
    }

    public void addDebtors(Debtor debtor) {
        this.debtors.add(debtor);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}

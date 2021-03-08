package com.codeclan.example.PayMe.models;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @Column
    private String name;

    @Column
    private String email;

//    Just keep user below to show all nested tables
    @JsonIgnoreProperties({"debtors", "debtor", "user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    private List<Debtor>debtors;



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

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

}

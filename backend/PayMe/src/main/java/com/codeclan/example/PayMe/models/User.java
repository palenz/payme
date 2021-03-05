package com.codeclan.example.PayMe.models;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @JsonIgnoreProperties({"user"})
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}

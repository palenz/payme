package com.codeclan.example.PayMe.controllers;
import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.models.User;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import com.codeclan.example.PayMe.repositories.InvoiceRepository;
import com.codeclan.example.PayMe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DebtorRepository debtorRepository;

    @Autowired
    InvoiceRepository invoiceRepository;

    public static class SignIn{
        public String email;
        public String password;
    }

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    };

    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUser(@PathVariable UUID id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/signup")
    public ResponseEntity<User> postUser(@RequestBody User user){
        userRepository.save(user);
        UUID db_user_id = user.getId();
        return new ResponseEntity(db_user_id, HttpStatus.CREATED);
    }

    @PostMapping(value = "/signin")
    public ResponseEntity<User> signIn(@RequestBody SignIn signIn){
        User db_user = userRepository.findByEmail(signIn.email);
        if (signIn.password.equals(db_user.getPassword())){
            return new ResponseEntity(db_user.getId(), HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity deleteUser(@PathVariable UUID id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (!userToDelete.isPresent()) {
            return new ResponseEntity(id, HttpStatus.NOT_FOUND);
        } else {
            userRepository.delete(userToDelete.get());
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }

    @GetMapping(value = "/users/{id}/debtors")
    public ResponseEntity<List<Debtor>> findDebtorsByUserId(@PathVariable UUID id){
        return new ResponseEntity<>(debtorRepository.findByUserId(id), HttpStatus.OK);
    }

    @GetMapping(value = "/users/{id}/invoices")
    public ResponseEntity<List<Invoice>> findInvoicesByUserId(@PathVariable UUID id){
        return new ResponseEntity<>(invoiceRepository.findByDebtorUserId(id), HttpStatus.OK);
    }


}

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
import java.util.List;
import java.util.Optional;
import java.util.UUID;


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

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser (@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PostMapping(value = "/signin")
    public ResponseEntity signIn(@RequestBody SignIn signIn){
        User db_user = userRepository.findByEmail(signIn.email);
        if (db_user.getPassword() == signIn.password) {
            userRepository.save(db_user);
            return new ResponseEntity<>(userRepository.findByEmail(signIn.email).getId(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity deleteUser(@PathVariable UUID id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (!userToDelete.isPresent()) {
            return new ResponseEntity(id, HttpStatus.NOT_FOUND);
        } else {
            userRepository.delete(userToDelete.get());
//          Create get invoices and debtors by user id. This will be done in the invoice and debtors repo
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

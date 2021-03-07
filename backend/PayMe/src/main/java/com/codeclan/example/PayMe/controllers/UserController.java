package com.codeclan.example.PayMe.controllers;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.models.User;
import com.codeclan.example.PayMe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;


@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    };


    @GetMapping(value = "/users/{id}")
    public ResponseEntity getUser(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/users")
    public ResponseEntity<User> postUser (@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/users/{id}")
    public ResponseEntity deleteUser(@PathVariable Long id) {
        Optional<User> userToDelete = userRepository.findById(id);
        if (!userToDelete.isPresent()) {
            return new ResponseEntity(id, HttpStatus.NOT_FOUND);
        } else {
            userRepository.delete(userToDelete.get());
//            Create get invoices and debtors by user id. This will be done in the invoice and debtors repo
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }


}

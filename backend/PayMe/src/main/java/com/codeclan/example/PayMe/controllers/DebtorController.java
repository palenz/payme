package com.codeclan.example.PayMe.controllers;
import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class DebtorController {
    @Autowired
    DebtorRepository debtorRepository;

    @GetMapping(value = "/debtors")
    public ResponseEntity<List<Debtor>> getAllDebtors(){
        return new ResponseEntity<>(debtorRepository.findAll(), HttpStatus.OK);
    };

    @GetMapping(value = "/debtors/{id}")
    public ResponseEntity getDebtor(@PathVariable UUID id){
        return new ResponseEntity<>(debtorRepository.findById(id), HttpStatus.OK);
    }

    @DeleteMapping(value = "/debtors/{id}")
    public ResponseEntity deleteDebtor(@PathVariable UUID id) {
        Optional<Debtor> debtorToDelete = debtorRepository.findById(id);
        if (!debtorToDelete.isPresent()) {
            return new ResponseEntity(id, HttpStatus.NOT_FOUND);
        } else {
            debtorRepository.delete(debtorToDelete.get());
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }

    @PostMapping(value = "/debtors")
    public ResponseEntity<Debtor> postDebtor(@RequestBody Debtor debtor) {
        debtorRepository.save(debtor);
        return new ResponseEntity<>(debtor, HttpStatus.CREATED);
    }
}

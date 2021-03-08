package com.codeclan.example.PayMe.controllers;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.repositories.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
public class InvoiceController {
    @Autowired
    InvoiceRepository invoiceRepository;

    @GetMapping(value = "/invoices")
    public ResponseEntity<List<Invoice>> getAllInvoices(){
        return new ResponseEntity<>(invoiceRepository.findAll(), HttpStatus.OK);
    };


    @GetMapping(value = "/invoices/{id}")
    public ResponseEntity getInvoice(@PathVariable UUID id){
        return new ResponseEntity<>(invoiceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/invoices")
        public ResponseEntity<Invoice> postInvoice(@RequestBody Invoice invoice){
        invoiceRepository.save(invoice);
        return new ResponseEntity<>(invoice, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/invoices/{id}")
    public ResponseEntity deleteInvoice(@PathVariable UUID id) {
        Optional<Invoice> invoiceToDelete = invoiceRepository.findById(id);
        if (!invoiceToDelete.isPresent()) {
            return new ResponseEntity(id, HttpStatus.NOT_FOUND);
        } else {
            invoiceRepository.delete(invoiceToDelete.get());
            return new ResponseEntity(id, HttpStatus.OK);
        }
    }

}

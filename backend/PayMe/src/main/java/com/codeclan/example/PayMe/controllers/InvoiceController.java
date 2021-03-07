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

@RestController
public class InvoiceController {
    @Autowired
    InvoiceRepository invoiceRepository;

    @GetMapping(value = "/invoices")
    public ResponseEntity<List<Invoice>> getAllInvoices(){
        return new ResponseEntity<>(invoiceRepository.findAll(), HttpStatus.OK);
    };

//    @GetMapping(value = "/invoices/{id}")
//    public Optional<Invoice> getInvoice(@PathVariable Long id) {
//        return invoiceRepository.findById(id);
//    };

    @GetMapping(value = "/invoices/{id}")
    public ResponseEntity getInvoice(@PathVariable Long id){
        return new ResponseEntity<>(invoiceRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/invoices")
        public ResponseEntity<Invoice> postInvoice(@RequestBody Invoice invoice){
        invoiceRepository.save(invoice);
        return new ResponseEntity<>(invoice, HttpStatus.CREATED);
    }

}

package com.codeclan.example.PayMe.Auto;

import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import org.springframework.beans.factory.annotation.Autowired;


import java.util.List;

public class AutoSms {

    @Autowired
    DebtorRepository debtorRepository;






    for (Debtor debtor : debtorRepository.findAll()) {

    }

}

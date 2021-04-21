package com.codeclan.example.PayMe.components;
import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.models.User;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import com.codeclan.example.PayMe.repositories.InvoiceRepository;
import com.codeclan.example.PayMe.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    InvoiceRepository invoiceRepository;

    @Autowired
    DebtorRepository debtorRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {


        User user1 = new User("James Brown", "mike","123");
        userRepository.save(user1);

        Debtor debtor1 = new Debtor("Juan", "+44741323111", user1);
        debtorRepository.save(debtor1);

        Invoice invoice1 = new Invoice(3, "bought you dinner", debtor1);
        invoiceRepository.save(invoice1);

        Invoice invoice2 = new Invoice(2, "improved your code", debtor1);
        invoiceRepository.save(invoice2);

    }


}

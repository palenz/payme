package com.codeclan.example.PayMe;

import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.models.User;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import com.codeclan.example.PayMe.repositories.InvoiceRepository;
import com.codeclan.example.PayMe.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class PayMeApplicationTests {

	@Autowired
	InvoiceRepository invoiceRepository;

	@Autowired
	DebtorRepository debtorRepository;

	@Autowired
	UserRepository userRepository;

	@Test
	void contextLoads() {
	}

//	@Test
//	public void canFindDebtorsForUserId(){
//		List<Debtor> debtors = debtorRepository.findByUserId(1L);
//		assertEquals(2, debtors.size());
//	}
//
//	@Test
//	public void canFindInvoicesForUserId(){
//		List<Invoice> invoices = invoiceRepository.findByDebtorUserId(1L);
//		assertEquals(2, invoices.size());
	}



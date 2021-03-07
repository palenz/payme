package com.codeclan.example.PayMe;

import com.codeclan.example.PayMe.models.Invoice;
import com.codeclan.example.PayMe.repositories.InvoiceRepository;
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

	@Test
	void contextLoads() {
	}

//	@Test
//	public void canFindInvoicesByUserId(){
//		List<Invoice> found = invoiceRepository.findInvoicesByUserId(1L);
//		assertEquals(1, found.size());
//	}

}

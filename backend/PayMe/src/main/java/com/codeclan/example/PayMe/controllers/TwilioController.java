package com.codeclan.example.PayMe.controllers;
import com.codeclan.example.PayMe.models.Debtor;
import com.codeclan.example.PayMe.models.User;
import com.codeclan.example.PayMe.repositories.DebtorRepository;
import com.codeclan.example.PayMe.repositories.UserRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Call;
import com.twilio.rest.api.v2010.account.Message;

import com.twilio.twiml.voice.Say;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@EnableScheduling
@Controller
public class TwilioController {


    @Autowired
    DebtorRepository debtorRepository;

    @Autowired
    @Value("${twilioAccountSid}")
    private String twilioAccountSid;

    @Autowired
    @Value("${twilioAuthToken}")
    private String twilioAuthToken;

    @Autowired
    @Value("${phoneNumber}")
    private String myTwilioPhoneNumber;

    @Scheduled(cron = "0 15 12 * * MON-FRI", zone = "Europe/London")
    void callTrigger(){
        Twilio.init(twilioAccountSid, twilioAuthToken);
        for (Debtor debtor : debtorRepository.findAll()){

            Call call = Call.creator(
                    new com.twilio.type.PhoneNumber(debtor.getMobile()),
                    new com.twilio.type.PhoneNumber(myTwilioPhoneNumber),
                    new com.twilio.type.Twiml(String.format("<Response><Say>Hello, %s... this is %s. Pay me. You owe %x pounds. Bye.</Say></Response>", debtor.getName(), debtor.getUser().getName(), debtor.getMoneyOwed() )))
                    .create();
            System.out.println("Calling: "+ debtor.getName() + " from user: " + debtor.getUser().getName());
        }
    }
}

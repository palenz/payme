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
public class SMSController {

    public static class MessageDetails {
        public String mobile;
        public String message;
    }



    @Scheduled(cron = "0 45 0 * * *")
    void callTrigger(){

        for (Debtor debtor : debtorRepository.findAll()){

            Call call = Call.creator(
                    new com.twilio.type.PhoneNumber(debtor.getMobile()),
                    new com.twilio.type.PhoneNumber(myTwilioPhoneNumber),
                    new com.twilio.type.Twiml("<Response><Say>hello! this worked</Say></Response>"))
                    .create();
            System.out.println("Call works");
        }
    }

    @Autowired
    UserRepository userRepository;

    @Autowired
    DebtorRepository debtorRepository;

    @Value("${phoneNumber}")
    private String myTwilioPhoneNumber;

    @Autowired
    public SMSController(
            @Value("${twilioAccountSid}") String twilioAccountSid,
            @Value("${twilioAuthToken}") String twilioAuthToken) {
        Twilio.init(twilioAccountSid, twilioAuthToken);
        }

        @PostMapping("/send-message")
        @ResponseStatus(HttpStatus.ACCEPTED)

        public void sendMessages(@RequestBody MessageDetails messageDetails) {
            Call call = Call.creator(
                    new com.twilio.type.PhoneNumber(messageDetails.mobile),
                    new com.twilio.type.PhoneNumber(myTwilioPhoneNumber),
                    new com.twilio.type.Twiml(String.format("<Response><Say>%s</Say></Response>", messageDetails.message)))
                    .create();
//            Message message = Message.creator(
//                    new PhoneNumber(messageDetails.mobile),
//                    new PhoneNumber(myTwilioPhoneNumber),
//                    messageDetails.message).create();
            System.out.println("First debtor call, user: ");
//            ADD USER NAME ABOVE
        };
}

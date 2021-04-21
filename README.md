# Pay Me

Pay Me is an application to help you keep track of the money you are owed, while helping debtors remember to pay you back with automated phone calls. We made this app with React on the front end and Spring Boot, Hibernate & JPA on the back end. Twilio powers the calling functionality.

To run Pay Me, you need to run the back and front end respectively:
1. From the main directory, `cd backend/PayMe` and then run the Spring Boot application (PayMeApplication).
2. From the main directory, `cd frontend/pay_me` and then run the react app with `npm start`.

### Login / Registration feature
We made a simple login/registration feature using API calls to the back end to verify user credentials. These calls or the credentials in the database are not encrypted.

### Phone calls with Twilio
We have removed our Twilio token and account SID from the application.properties file in the Spring Boot application. To allow the app to make phone calls, feel free to create a free twilio account (http://twilio.com/) and use your own credentials.
import Menu from './Menu.js';

const About = (props) => {

    return(
        <>
        <Menu></Menu>

        <div className="contentWrapper" >
        <div className="content">
        
        <b><h1>About</h1></b>
        <p id="text">We'll be calling debtors every day @12:15 GMT until we run out of Twilio credit.</p>
            
            
        <p>Pay me was made by <a href="https://www.linkedin.com/in/palenzuelaj/">Juan Palenzuela</a> and <a href="https://www.linkedin.com/in/mackenzie-millar-0131/">
        Mack Millar</a> as part of our capstone CodeClan project in March 2021.</p>
        <p>We made this app with React for the front end and Spring Boot, 
        Hibernate & JPA for the back end. <a href="https://www.twilio.com/voice">Twilio</a> powers the calling functionality.</p>
        <p>Feel free to have a look at the <a href="https://github.com/palenz/payme">GitHub project here</a>.</p>

        
        </div>
        </div>
        </>
    )
}

export default About;
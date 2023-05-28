import React from "react";
import mail from "../images/mail.png";
import phone from '../images/call.png';
import location from "../images/location.png";
import '../CompCSS/HomePageContact.css';
import ContactImage from "../images/ContactImage.png";
import SendImage from "../images/SendImage.png";
import { sendForm } from "emailjs-com";

function HomePageContact(){


    const handleFormSubmit = (e) => {
        e.preventDefault();

        sendForm('ContactGmail', 'template_l88cmmd', e.target, 'tdKGTe7Wk84gyr5R6')
          .then((result) => {
              console.log(result.text);
              alert("Feedback is Successfully Submitted!!");
              document.getElementById("ContectUsForm").reset();
          }, (error) => {
              console.log(error.text);
          });

    }

    return(
        <div className="CusMain" id="contactUs">
            <div className="CusContainerMain">
                <div className="ContactInfo">
                    <div className="ContactInfoHeading">
                        <h1> Contact Us </h1>
                        <img src={ContactImage} ></img>
                    </div>
                    <div className="ContactInfoContent">
                        <ul>
                            <li> <img src={location} /> <h2> Bhimtal, Uttarakhand India (263136) </h2> </li>
                            <li> <img src={mail} /> <h2> codehustlerch@gmail.com </h2>  </li>
                            <li> <img src={phone} /> <h2> +91 9068883437</h2> </li>
                        </ul>
                    </div>
                </div>
                <div className="CusForm">
                    <div className="CusFormHeader">
                        <h1> Send Us A Message... </h1>
                    </div>
                    <form id="ContectUsForm" className="CusFormContent" onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="FName">
                                <h3> First Name </h3>
                                <input type="text" name="Fname" />
                            </div>
                            <div className="LName">
                                <h3> Last Name </h3>
                                <input type="text" name="Lname"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="EMail">
                                <h3> Email Address </h3>
                                <input type="text" name="Email"/>
                            </div>
                            <div className="MobileNo">
                                <h3> Mobile Number </h3>
                                <input type="text" name="Mobile"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="FormText">
                                <h3> Write Your Message Here... </h3>
                                <input type="textarea" name="Message"/>
                            </div>
                        </div>
                        <div className="row">
                            <button type="submit" value="Submit">Send<img src={SendImage}></img></button>
                        </div>
                </form>
            </div>
        </div>
    </div>
    );
}

export default HomePageContact;
import React from "react";
import './Contact.css';
import {GrLinkedin} from 'react-icons/gr'
import {GrGithub} from 'react-icons/gr'
function Contact() {
    return(
         <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me.</h1>
                            
                            <p className="hire__text white">
                                <strong>7618703688</strong> or email : <strong>akshayudupa8@gmail.com</strong>
                                <br/> <a className="social" href="https://www.linkedin.com/in/akshay-udupa-13728a1b2">
                                Linkedin : <span><GrLinkedin/></span></a>  &nbsp; &nbsp;
                                <a className="social" href="https://github.com/akshayudupa7"> Github : <span><GrGithub/></span></a>
                            </p>
                        </div>
                        <div className="input__box">
                            <input type='text' className="contact name" placeholder="Your name *" />
                            <input type='text' className="contact email" placeholder="Your Email *" />
                            <input type='text' className="contact subject" placeholder="Write a Subject *" />
                            <textarea name='message' id="message" placeholder="Write Your message" ></textarea>
                            <button className="view__more contact pointer btn">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="col__2">
               
                </div>
            </div>
         </div>
    )
}

export default Contact;
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './contactus.css';

const ContactUs = () => {
  return (
    <>
    <Navbar />
        <section className="contact">
    <div className="content">
        <h2>Contact Us</h2>
    </div>
    <div className="container2">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="text">
                    <h3>Address</h3>
                    <p>4671 Sugar Camp Road, <br />Owatonna, Minnesota, <br />55060</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="box">
                <div className="icon"><i className="fa-solid fa-phone"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>9530024136</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="box">
                <div className="icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>test@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputbox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputbox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputbox">
                    <input type="inputBox" name="" required="required"/>
                    <span>Type your Message...</span>
                </div>
                <div className="inputbox">
                    <a href="index.html"><input type="submit" name="" href="index.html" value="Send Message"/></a>
                </div>
            </form>
        </div>
    </div>
    </section>

    <Footer />
    </>
  )
}

export default ContactUs
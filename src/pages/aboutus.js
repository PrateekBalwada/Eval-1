import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './about.css';


function AboutUs() {
  return (
    <>
    <Navbar />
      <div className="about-section">
  <div className="inner-container">
    <h1>About Us</h1>
    <p className="text">
      Welcome to TradeX!, We are passionate about revolutionizing the trading experience. Our mission is to simplify and enhance your trading journey with cutting-edge tools and insights. By combining our expertise and innovative technology, we aim to provide solutions that meet the diverse needs of traders. We’re excited to share our resources with you and support your success in the market. Let’s achieve great things together!
    </p>
    <h1 className="vertical-text">Our Team Members</h1>
    <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card p-4">
            <div className="icon rounded-circle bg-dark mx-auto">
              <i className="fa-solid fa-user" style={{ fontSize: '60px' }}></i>
            </div>
            <h4 className="text-center mt-3">KESHAV</h4>
            <p className="text-center">2310992119</p>
            <div className="text-center mt-3">
              <a href="mailto:info@example.com" className="btn btn-primary">Contact Now</a>
            </div>
          </div>
        </div>
      

        <div className="col-md-4 mb-4">
          <div className="card p-4">
            <div className="icon rounded-circle bg-dark mx-auto">
              <i className="fa-solid fa-user" style={{ fontSize: '60px' }}></i>
            </div>
            <h4 className="text-center mt-3">PRATEEK</h4>
            <p className="text-center">2310992127</p>
            <div className="text-center mt-3">
              <a href="mailto:info@example.com" className="btn btn-primary">Contact Now</a>
            </div>
          </div>
        </div>


      <div className="col-md-4 mb-4">
        <div className="card p-4">
          <div className="icon rounded-circle bg-dark mx-auto">
            <i className="fa-solid fa-user" style={{ fontSize: '60px' }}></i>
          </div>
          <h4 className="text-center mt-3">KRISHNA</h4>
          <p className="text-center">2310992128</p>
          <div className="text-center mt-3">
            <a href="mailto:info@example.com" className="btn btn-primary">Contact Now</a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<Footer />
    </>
  );
}

export default AboutUs;

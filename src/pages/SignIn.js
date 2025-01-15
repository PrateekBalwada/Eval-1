import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './reg_style.css';
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const SignIn = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      
    } catch (error) {
      console.log(error.message);

    }
  };

  return (
    <>
    <Navbar />
     <div className="container1">
    <div className="sign">
        <div className="main1">
            <div className="colored-part">
                <form action="#">
                    <h1>Sign In</h1>
                    

                    <span>Use your email for Signing In</span>
                    <div className="input">
                        <div className="posts">
                            <i className="fa fa-envelope" style={{ paddingRight: '5px' }}></i>
                            <input type="email" placeholder="Email" className="post" required="required"value={email}
          onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="posts">
                            <i className="fa fa-lock" style={{ paddingRight: '5px' }}></i>
                            <input type="password" placeholder="Password" className="post" required="required" value={password}
          onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <Link className="nav-link" to="/"><button  className="Sbtn">SIGN IN</button></Link>
                </form>
            </div>
            <div className="welcome1">
              <h2>New to TradeX?</h2>
              <p>Make an account now!</p>
              <Link className="nav-link" to="/signup"><button  className="Sbtn">SIGN UP</button></Link>
          </div>
        </div>
    </div>
</div>

<Footer />
    </>
  )
}

export default SignIn
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './reg_style.css';
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      
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
                <div className="welcome">
                    <h2>Welcome Back!</h2>
                    <p>To keep connected with us please login with your personal info</p>
                    <Link className="nav-link" to="/signin"><button  className="Sbtn sbtn1">SIGN IN</button></Link>
                </div>

                <div className="colored-part">
                    <form action="#">
                        <h1>Create Account</h1>
                        

                        <span>Use your email for registration</span>
                        <div className="input">
                        <div className="posts">
                                <i className="fa fa-user" style={{ paddingRight: '5px' }}></i>
                                <input type="text"
          
          placeholder="Enter Your Name"
          onChange={(e) => setFname(e.target.value)}
          required
                             className="post" />
                            {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p> */}
                            </div>
                            <div className="posts">
                                <i className="fa fa-user" style={{ paddingRight: '5px' }}></i>
                                <input type="email"
          
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          required
                             className="post" />
                            {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p> */}
                            </div>
                            <div className="posts">
                                <i className="fa fa-envelope" style={{ paddingRight: '5px' }}></i>
                                <input type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
          required placeholder="Password" className="post"/>
                            {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}
                            </div>
                            {/* <div className="posts">
                                <i className="fa fa-lock" style={{ paddingRight: '5px' }}></i>
                                <input type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}placeholder="Confirm Password" className="post" />
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                            </div> */}
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <Footer />
    </>
  )
}

export default SignUp
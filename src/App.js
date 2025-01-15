import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/ContactUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/news" Component={News} />
        <Route path="/aboutus" Component={AboutUs} />
        <Route path="/contactus" Component={ContactUs} />
        <Route path="/signin" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Router>


    </>
  );
}

export default App;
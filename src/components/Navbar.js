import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <i style={{ color: '#3874FF' }} className="fas fa-cubes-stacked"></i>Trade<i>X</i>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto d-none d-lg-flex">
                <li className="nav-item">
                    <Link className="btn btn-outline-light rounded-pill" to="/signin" style={{ padding: '0.15rem 0.75rem' }}>Sign In</Link>
                </li>
            </ul>
            <ul className="navbar-nav ms-auto d-lg-none dropdown-menu-animated">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-outline-light no-radius w-100" to="/signin">Sign In</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  );
}

export default Navbar;

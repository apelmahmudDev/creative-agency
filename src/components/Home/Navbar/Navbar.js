import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-default">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="" width="145"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    <NavLink className="nav-link" to="/">Our Portfolio</NavLink>
                    <NavLink className="nav-link" to="/">Our Team</NavLink>
                    <NavLink className="nav-link" to="/">Contact Us</NavLink>
                    <NavLink className="nav-link btn-brand text-white" to="/">Login</NavLink>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React, { useContext } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../UserContext/UserContext';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
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
                    <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                    <NavLink className="nav-link" to="/">Our Team</NavLink>
                    <NavLink className="nav-link" to="/">Contact Us</NavLink>
                    {user.isSigned ? <h5 className="text-brand mt-2">{user.name}</h5> :
                    <NavLink className="nav-link btn-brand text-white" to="/login">Login</NavLink>}
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="container">
            <div className="text-center mt-5">
               <Link to="/">
                    <img src={logo} alt="" width="140"/>
               </Link>
            </div>
            <div className="col-md-6 login-area border">
                <div>
                    <h3 className="text-center text-brand mb-4">Login with</h3>
                    <button className=" btn sign-btn text-brand">
                        <img className="mr-2" src={google} alt=""/>
                        Continue with Google Login
                    </button>
                    <p className="mt-2">Don't have an account? <span className="text-primary">Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
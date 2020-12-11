import React, { useContext } from 'react';
import './Login.css';
import logo from '../../images/logos/logo.png';
import google from '../../images/icons/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../UserContext/UserContext';

if (!app.apps.length) {
    app.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user, setUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new app.auth.GoogleAuthProvider();
    const handleSignWithGoogle = () => {
        app.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
                isSigned: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser)
            history.replace(from);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

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
                    <button onClick={handleSignWithGoogle} className=" btn sign-btn text-brand">
                        <img className="mr-2" src={google} alt=""/>
                        Continue with Google Login
                    </button>
                    <p className="mt-2">Don't have an account? <span className="text-primary" role="button" onClick={handleSignWithGoogle}>Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
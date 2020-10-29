import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import sadIcon from '../../images/icons/sadicon.png';

const NotFound = () => {
    const findStyles = {
        margin: '15% auto'
    }
    return (
        <div className="container">
            <div className="col-md-5 text-center" style={findStyles}>
                <img src={sadIcon} alt="" className="img-fluid w-25 mb-3"/>
                <h1 className="text-brand font-weight-bold">404!</h1>
                <h5 className="text-brand">The page you are looking for is not found</h5>
                <Link to="/">
                    <button className="btn btn-dark mt-3">
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <span> Back to home</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
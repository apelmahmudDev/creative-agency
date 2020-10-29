import React from 'react';
import { Link } from 'react-router-dom';

const Client = ({client}) => {
    return (
        <Link to="/">
            <div className="col mb-3">
                <div className="card" style={{border:'none'}}>
                    <img src={client.img} alt="" className="img-fluid" />
                </div>
            </div>
        </Link>
    );
};

export default Client;
import React from 'react';
import { Link } from 'react-router-dom';

const Client = ({client}) => {
    return (
        <div className="col-md-2">
            <Link to="/">
                <div><img src={client.img} alt="" style={{height:'60px'}} /></div>
            </Link>
        </div>
    );
};

export default Client;
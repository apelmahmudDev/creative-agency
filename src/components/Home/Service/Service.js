import React from 'react';
import { Link } from 'react-router-dom';
import serviceIcon from '../../../images/icons/service5.png';

const Service = ({service}) => {
    
    return (
        <Link to={`/dashboard/order/${service._id}`}>
            <div className="card">
                <div className="text-center">
                    <img className="card-img-top w-25" src={service.img || serviceIcon} alt=""/>
                </div>
                <div className="card-body">
                <h5 className="card-title text-brand">{service.title}</h5>
                <h5 className="card-text text-success">${service.price}</h5>
                <p className="card-text text-brand">{service.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default Service;
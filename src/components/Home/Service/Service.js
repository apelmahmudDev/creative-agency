import React from 'react';
import serviceIcon from '../../../images/icons/service5.png';

const Service = ({service}) => {
    return (
        <div className="card">
            <div className="text-center">
                <img className="card-img-top w-25" src={service.img || serviceIcon} alt=""/>
            </div>
            <div className="card-body">
            <h5 className="card-title text-brand">{service.title}</h5>
            <p className="card-text">{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
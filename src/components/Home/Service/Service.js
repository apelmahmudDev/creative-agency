import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card">
            <div className="text-center">
                <img className="card-img-top w-25" src={service.img} alt=""/>
            </div>
            <div className="card-body">
            <h5 className="card-title text-brand">{service.title}</h5>
            <p className="card-text">{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
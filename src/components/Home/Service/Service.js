import React from 'react';

const Service = ({service}) => {
    return (
        <div class="card">
            <div class="text-center">
                <img class="card-img-top w-25" src={service.img} alt=""/>
            </div>
            <div class="card-body">
            <h5 class="card-title text-brand">{service.title}</h5>
            <p class="card-text">{service.description}</p>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Feedback = ({client}) => {
    return (
        <div className="card border">
            <div className="d-flex align-items-center">
                <img className="card-img-top w-25" src={client.img} alt=""/>
                <div className="ml-3">
                    <h5>{client.name}</h5>
                    <strong>{client.title}</strong>
                </div>
            </div>
            <div className="card-body">
            <p className="card-text">{client.description}</p>
            </div>
        </div>
    );
};

export default Feedback;
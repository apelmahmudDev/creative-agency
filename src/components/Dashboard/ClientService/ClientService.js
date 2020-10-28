import React from 'react';

const ClientService = ({orderlist}) => {
    return (
        <div className="col mb-4">
            <div className="card h-100 client-card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <img src={orderlist.img} className="card-img-top" alt=""/>
                        <p className="actionChanger">Pending</p>
                    </div>
                    <h5 className="card-title text-brand">{orderlist.title}</h5>
                    <p className="card-text">{orderlist.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientService;
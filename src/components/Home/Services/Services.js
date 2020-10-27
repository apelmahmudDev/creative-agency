import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    // READ ALL SERVICES FROM THE DATABASE
    useEffect(() => {
        fetch('http://localhost:4200/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])

    // INSERT SERVICES AT THE DATABASE
    // const handleService = () => {
    //     fetch('http://localhost:4200/addServices', {
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(services)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log('Succuessfully added service')
    //     })
    // }

    return (
        <section className="my-5 py-5">
            <div className="container">
                <h2 className="text-brand text-center mb-5">Provide awesome
                <span className="text-success"> services</span></h2>
                <div className="card-columns text-center">
                    {
                        services.map((service, index) => <Service 
                        service={service} 
                        key={index}
                        ></Service>) 
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
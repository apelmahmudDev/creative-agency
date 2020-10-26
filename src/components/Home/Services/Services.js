import React from 'react';
import './Services.css';
import sevice1 from '../../../images/icons/service1.png';
import sevice2 from '../../../images/icons/service2.png';
import sevice3 from '../../../images/icons/service3.png';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            img: sevice1,
            title: 'Web & Mobile design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {
            img: sevice2,
            title: 'Graphic design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
        },
        {
            img: sevice3,
            title: 'Web Development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        },
    ];
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
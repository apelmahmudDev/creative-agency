import React from 'react';
import './Clients.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import Client from '../Client/Client';

const Clients = () => {
    const clients = [
        {
            key: 1,
            img: slack
        },
        {
            key: 2,
            img: google
        },
        {
            key: 3,
            img: uber
        },
        {
            key: 4,
            img: netflix
        },
        {
            key: 5,
            img: airbnb
        }
    ];
    return (
        <section className="mt-5 pt-5">
            <div className="container clients-wrapper">
                <div className="row row-cols-2 row-cols-md-5 text-center">
                   {
                       clients.map(client => <Client client={client} key={client.key}></Client>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Clients;
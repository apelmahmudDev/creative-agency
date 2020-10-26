import React from 'react';
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
        <section className="my-5 py-5">
            <div className="container">
                <div className="row d-flex justify-content-around">
                   {
                       clients.map(client => <Client client={client} key={client.key}></Client>)
                   }
                </div>
            </div>
        </section>
    );
};

export default Clients;
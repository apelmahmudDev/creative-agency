import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import Feedback from '../Feedback/Feedback';


const ClientFeedback = () => {
    const clientsFeedback = [
        {
            img: customer1,
            name: 'Bria Malone',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
        },
        {
            img: customer2,
            name: 'Nash Patrik',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
        },
        {
            img: customer3,
            name: 'Miriam Baron',
            title: 'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.',
        }

    ]
    return (
        <section className="my-5 py-5">
            <div className="container">
                <h2 className="text-brand text-center mb-5">Clients 
                <span className="text-success"> Feedback</span></h2>
                <div className="card-columns">
                    {
                        clientsFeedback.map((client, index) => <Feedback 
                        client={client} 
                        key={index}
                        ></Feedback>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientFeedback;
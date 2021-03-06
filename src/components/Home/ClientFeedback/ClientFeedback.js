import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Feedback from '../Feedback/Feedback';


const ClientFeedback = () => {
    const [clientsFeedback, setClientsFeedback] = useState([]);

    // READ ALL FEEDBACK FROM THE DATABASE
    useEffect(() => {
        fetch('https://peaceful-cove-72693.herokuapp.com/feedback')
        .then(res => res.json())
        .then(data => {
            setClientsFeedback(data)
        })
    },[])

    return (
        <section className="my-5 py-5">
            <div className="container">
                <h2 className="text-brand text-center mb-5">Clients 
                <span className="text-success"> Feedback</span></h2>
                {clientsFeedback.length > 0 ? <div className="row row-cols-1 row-cols-md-3">
                    {
                        clientsFeedback.map((client, index) => <Feedback 
                        client={client} 
                        key={index}
                        ></Feedback>)
                    }
                </div> : <Spinner></Spinner>}
            </div>
        </section>
    );
};

export default ClientFeedback;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import ClientService from '../ClientService/ClientService';
import './ClientServiceList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ClientServiceList = () => {
    const [user, setUser] = useContext(UserContext)
    const [orderedLists, setOrderedLists] = useState([]);

    // READ ORDERED SERVICE FOR SPECIFIC CLIENT
    useEffect(() => {
        fetch(`https://peaceful-cove-72693.herokuapp.com/clientOrder?email=${user.email}`)
        .then(res => res.json())
        .then(orders => {
            setOrderedLists(orders)
        })
    },[user])
    return (
        <>
            {orderedLists.length > 0 ? 
            <div className="row row-cols-1 row-cols-md-3">
                {
                    orderedLists.map(orderlist => <ClientService
                    orderlist={orderlist}
                    key={orderlist._id}
                    ></ClientService>)
                }
            </div> :
            <div>
                <h3 className="text-brand my-3">Your Service list is empty</h3>
                <Link to="/">
                    <button className="btn btn-dark">
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <span> Order service</span>
                    </button>
                </Link>
            </div>
            }
        </>
    );
};

export default ClientServiceList;
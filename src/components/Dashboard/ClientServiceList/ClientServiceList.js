import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import ClientService from '../ClientService/ClientService';
import './ClientServiceList.css';

const ClientServiceList = () => {
    const [user, setUser] = useContext(UserContext)
    const [orderedLists, setOrderedLists] = useState([]);

    // READ ORDERED SERVICE FOR SPECIFIC CLIENT
    useEffect(() => {
        fetch(`http://localhost:4200/clientOrder?email=${user.email}`)
        .then(res => res.json())
        .then(orders => {
            setOrderedLists(orders)
        })
    },[user])
    return (
        <div className="row row-cols-1 row-cols-md-3">
        {
            orderedLists.map(orderlist => <ClientService
            orderlist={orderlist}
            key={orderlist._id}
            ></ClientService>)
        }
        </div>
    );
};

export default ClientServiceList;
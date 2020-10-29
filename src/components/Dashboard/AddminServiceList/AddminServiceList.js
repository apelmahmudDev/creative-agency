import React, { useEffect, useState } from 'react';
import TableData from '../TableData/TableData';

const AddminServiceList = () => {
    const [orderedLists, setOrderedLists] = useState([]);

    // READ ALL ORDERED SERVICES FOR ADMIN
    useEffect(() => {
        fetch('https://peaceful-cove-72693.herokuapp.com/orderdServices')
        .then(res => res.json())
        .then(data => {
            setOrderedLists(data)
        })
    }, [])

    const tableStyles = {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '20px'  
    }

    return (
        <div className="table-responsive-md" style={tableStyles}>
            <table className="table table-borderless">
                <thead className="bg-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orderedLists.map(service => <TableData 
                        service={service}
                        key={service._id}
                        ></TableData>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default AddminServiceList;
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const AddminServiceList = () => {
    const [orderedLists, setOrderedLists] = useState([]);

    // READ ALL ORDERED SERVICES FOR ADMIN
    useEffect(() => {
        fetch('http://localhost:4200/orderdServices')
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
                    orderedLists.map((service) => 
                            
                        <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.title}</td>
                            <td>${service.price}</td>
                            <td>
                                <span>Pending </span>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AddminServiceList;
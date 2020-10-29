import React from 'react';

const TableData = ({service}) => {

    // ORDER STATUS CHNANGER
    const handleChange = (event) => {
        fetch(`https://peaceful-cove-72693.herokuapp.com/changer/${service._id}`, {
            method: 'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({value: event.target.value})
        })
        .then((response) => response.json())
        .then(data => {
           console.log(data)
        })
    }    

    return (
        <tr>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.title}</td>
            <td>${service.price}</td>
            <td>
                <select onChange={handleChange} style={{border:'0'}}>
                    <option selected>{service.status}</option>
                    <option value="Pending">Pending</option>
                    <option value="On going">On going</option>
                    <option value="Done">Done</option>
                </select>
            </td>
        </tr>
    );
};

export default TableData;
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {
    const [isAdminAdd, setIsAdminAdd] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = email => {
        // INSERT A ADMIN AT THE DATABASE
        fetch('http://localhost:4200/admin', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(email),
        })
        .then((res) => res.json())
        .then(result => {
            if(result){
                setIsAdminAdd(true);
            }
        })
    };

    return (
        <div className="container mt-5">
            <dir className="row form-area">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="email"><strong className="text-brand">Email:</strong></label>
                            <input name="email" id="email" ref={register({ required: true })} placeholder="daniel@gmail.com" className="form-control"/>
                            {errors.email && <span className="text-danger">Email is required</span>}
                        </div>
                        <button type="submit" className="btn btn-brand d-block">Submit</button>
                    </form>
                    {isAdminAdd && <p className="text-success mt-2"><FontAwesomeIcon icon={faCheck} /><span> Admin added Succuessfully</span></p>}
                </div>
            </dir>
        </div>
    );
};

export default Admin;
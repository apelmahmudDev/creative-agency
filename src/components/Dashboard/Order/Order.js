import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';

const Order = () => {
    const [user, setUser] = useContext(UserContext);
    const [service, setService] = useState({});

    let {serviceId} = useParams();

    //READ A SPEACIFIC SERVICE USING PARAMS
    useEffect(() => {
        fetch(`http://localhost:4200/order/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
        
    },[serviceId])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div className="container mt-5">
            <div className="row form-area">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" defaultValue={user.name} ref={register({ required: true })} placeholder="Your name / company's name" className="form-control"/>
                            {errors.name && <span className="text-danger">Your name / company's name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="email" defaultValue={user.email} ref={register({ required: true })} placeholder="Your email address" className="form-control" />
                            {errors.email && <span className="text-danger">Email addressis required</span>}
                        </div>
                        <div className="form-group">
                            <input name="title" defaultValue={service.title} ref={register({ required: true })} placeholder="Web development" className="form-control" />
                            {errors.title && <span className="text-danger">Service is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="price" defaultValue={service.price} ref={register({ required: true })} placeholder="Price" className="form-control" />
                            {errors.price && <span className="text-danger">Price is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea rows="3" defaultValue={service.description} name="description" ref={register({ required: true })} placeholder="Project description" className="form-control" />
                            {errors.description && <span className="text-danger">Project description is required</span>}
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
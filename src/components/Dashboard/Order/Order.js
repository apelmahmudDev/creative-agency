import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Order = () => {
    const [user, setUser] = useContext(UserContext);
    const [isPlaced, setIsPlaced] = useState(false);
    const [service, setService] = useState({});
    let {serviceId} = useParams();

    let isServiceId = false;
    if(serviceId){
        isServiceId = true;
    }

    //READ A SPEACIFIC SERVICE USING PARAMS
    useEffect(() => {
        fetch(`https://peaceful-cove-72693.herokuapp.com/order/${serviceId}`)
        .then(res => res.json())
        .then(data => {
            setService(data)
        })
    },[serviceId])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = order => {
        order.img = service.img;
        order.status = 'Pending';
        // INSERT ORDER AT THE DATABASE
        fetch('https://peaceful-cove-72693.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setIsPlaced(true);
            }
        })
    };

    return (
        <div className="container mt-5">
           {isServiceId ? <div className="row form-area">
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
                        <div className="d-flex align-items-center">
                            <button type="submit" className="btn btn-brand">Submit</button>
                            {isPlaced && 
                            <p className="text-success pt-2 ml-3"><FontAwesomeIcon icon={faCheck} />
                            <span> Your order is placed, Keep connected with us. Thank You!</span></p>}
                        </div>
                    </form>
                    
                </div>
            </div>
            :
            <div>
                <h3 className="text-brand my-3">You have to select the service item first to <span className="text-success">order.</span></h3>
                <Link to="/">
                    <button className="btn btn-dark">
                        <FontAwesomeIcon icon={faAngleLeft} />
                        <span> Select Item</span>
                    </button>
                </Link>
            </div>}
        </div>
    );
};

export default Order;
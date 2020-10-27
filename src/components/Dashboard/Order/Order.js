import React from 'react';
import { useForm } from "react-hook-form";

const Order = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <div className="container mt-5">
            <div className="row form-area">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" ref={register({ required: true })} placeholder="Your name / company's name" className="form-control"/>
                            {errors.name && <span className="text-danger">Your name / company's name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="email" ref={register({ required: true })} placeholder="Your email address" className="form-control" />
                            {errors.email && <span className="text-danger">Email addressis required</span>}
                        </div>
                        <div className="form-group">
                            <input name="service" ref={register({ required: true })} placeholder="Web development" className="form-control" />
                            {errors.service && <span className="text-danger">Service is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="price" ref={register({ required: true })} placeholder="Price" className="form-control" />
                            {errors.price && <span className="text-danger">Price is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea rows="3" name="details" ref={register({ required: true })} placeholder="Project details" className="form-control" />
                            {errors.details && <span className="text-danger">Project details is required</span>}
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;
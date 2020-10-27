import React from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = service => {
        // INSERT SERVICES AT THE DATABASE
        fetch('http://localhost:4200/addService', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(service),
        })
        .then((res) => res.json())
        .then(data => {
            if(data){
                alert('Your Service added successfully!')
            }
        })
    };

    return (
        <div className="container mt-5">
            <div className="row form-area">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="title"><strong className="text-brand">Service Title</strong></label>
                            <input name="title" id="title" ref={register({ required: true })} placeholder="Enter title" className="form-control"/>
                            {errors.title && <span className="text-danger">Title is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="price"><strong className="text-brand">Service Price</strong></label>
                            <input name="price" id="price" ref={register({ required: true })} placeholder="Enter price" className="form-control"/>
                            {errors.price && <span className="text-danger">Price is required</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><strong className="text-brand">Description</strong></label>
                            <textarea rows="3" id="description" name="description" ref={register({ required: true })} placeholder="Enter Description" className="form-control" />
                            {errors.description && <span className="text-danger">Description is required</span>}
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;
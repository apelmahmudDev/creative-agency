import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="container mt-5">
            <div className="row form-area">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input name="name" ref={register({ required: true })} placeholder="Your Name" className="form-control"/>
                            {errors.name && <span className="text-danger">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input name="companyName" ref={register({ required: true })} placeholder="Your company's name, Designation" className="form-control" />
                            {errors.companyName && <span className="text-danger">Company name is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea rows="3" name="description" ref={register({ required: true })} placeholder="Description" className="form-control" />
                            {errors.description && <span className="text-danger">Description is required</span>}
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;
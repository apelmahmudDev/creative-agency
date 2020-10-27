import React from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

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
                </div>
            </dir>
        </div>
    );
};

export default Admin;
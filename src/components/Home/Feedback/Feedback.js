import React from 'react';
import fakeIcon from '../../../images/fake-customer.png';

const Feedback = ({ client }) => {
	return (
		<div className="col mb-4">
			<div className="card h-100 border">
				<div className="d-flex align-items-center">
					<img className="card-img-top w-25"
						src={client.img || fakeIcon}alt=""/>
					<div className="ml-3">
						<h5>{client.name}</h5>
						<strong>{client.title}</strong>
					</div>
				</div>
				<div className="card-body">
				<p className="card-text">{client.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Feedback;

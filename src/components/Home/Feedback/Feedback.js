import React from 'react';

const Feedback = ({ client }) => {
	return (
		<div className="card border">
			<div className="d-flex align-items-center">
				<img className="card-img-top w-25"
					src={
						client.img ||
						'https://lh3.googleusercontent.com/proxy/avYwyTWxUV2MsmZYrYZZ4TnY3WUT3dnWrZ1qujMq4ng6RH6U_qwYU9meFHUs3sZWTpVFwS6_IIIcqyQWeRhpLKQpncCjF9GfgdFh0D-pG0-R5iFpLWq8'
					}
					alt=""
				/>
                <div className="ml-3">
                    <h5>{client.name}</h5>
                    <strong>{client.title}</strong>
                </div>
            </div>
            <div className="card-body">
            <p className="card-text">{client.description}</p>
			</div>
		</div>
	);
};

export default Feedback;

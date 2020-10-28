import React from 'react';
import ClientServiceList from '../ClientServiceList/ClientServiceList';

const ServiceList = () => {
	// const containerStyle = {
	// 	backgroundColor: '#ffffff',
	// 	padding: '3em',
	// 	borderRadius: '20px'
	// }
	return (
		<div className="container mt-5">
			<ClientServiceList></ClientServiceList>
		</div>
	);
};

export default ServiceList;

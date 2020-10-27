import React from 'react';

const ServiceList = () => {
	const containerStyle = {
		backgroundColor: '#ffffff',
		padding: '3em',
		borderRadius: '20px'
	}
	return (
		<div className="container mt-5" style={containerStyle}>
			<div className="table-responsive-md">
				<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Email ID</th>
						<th scope="col">Service</th>
						<th scope="col">Project Details</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Mark</td>
						<td>mark@gmail.com</td>
						<td>Web Development</td>
						<td>Lorem ipsum dolor sit amet.</td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>Mark</td>
						<td>mark@gmail.com</td>
						<td>Web Development</td>
						<td>Lorem ipsum dolor sit amet.</td>
						<td>Pending</td>
					</tr>
					<tr>
						<td>Mark</td>
						<td>mark@gmail.com</td>
						<td>Web Development</td>
						<td>Lorem ipsum dolor sit amet.</td>
						<td>Pending</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ServiceList;

import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-heading mb-3"><img src={logo} alt="" width="150" /></div>
			<div className="list-group list-group-flush">
				<Link to="/dashboard/order" className="list-group-item list-group-item-action">Order</Link>
				<Link to="/dashboard/service" className="list-group-item list-group-item-action">Service list</Link>
				<Link to="/dashboard/review" className="list-group-item list-group-item-action">Review</Link>
				<Link to="/dashboard/add-service" className="list-group-item list-group-item-action">Add Service</Link>
				<Link to="/dashboard/admin" className="list-group-item list-group-item-action">Make Admin</Link>
			</div>
		</div>
	);
};

export default Sidebar;

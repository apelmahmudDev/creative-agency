import React from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardRoutes from '../DashboardRoutes/DashboardRoutes';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {

	const handleToggle = () => {
		const menuToggle = document.getElementById('menu-toggle');
		menuToggle.addEventListener('click', () => {
			const wrapper = document.getElementById('wrapper');
			wrapper.classList.toggle('toggled');
		});
	};

	return (
		<div className="d-flex" id="wrapper" style={{backgroundColor:'#F4F7FC'}}>
			{/* SIDEBAR */}
			<div className="bg-light border-right" id="sidebar-wrapper">
				<Sidebar></Sidebar>
			</div>

            <div id="page-content-wrapper">
			{/* DASHBOARD NAV */}
			<DashboardNav handleToggle={handleToggle}></DashboardNav>
			
			{/* DASHBOARD PAGES */}
			<div className="container-fluid">
				<DashboardRoutes></DashboardRoutes>
			</div>
            </div>
		</div>
	);
};

export default Dashboard;

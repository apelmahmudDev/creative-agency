import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import DashboardNav from '../DashboardNav/DashboardNav';
import DashboardRoutes from '../DashboardRoutes/DashboardRoutes';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
	const [user, setUser] = useContext(UserContext);
	const [isAdmin, setIsAdmin] = useState(false);
	console.log(isAdmin)
	
    // FIND ADMIN
    useEffect(() => {
        fetch(`http://localhost:4200/findAdmin?email=${user.email}`)
        .then(res => res.json())
        .then(result => {
            setIsAdmin(true);
        })
    },[user.email])

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
				<Sidebar isAdmin={isAdmin}></Sidebar>
			</div>

            <div id="page-content-wrapper">
			{/* DASHBOARD NAV */}
			<DashboardNav handleToggle={handleToggle}></DashboardNav>
			
			{/* DASHBOARD PAGES */}
			<div className="container-fluid">
				<DashboardRoutes isAdmin={isAdmin}></DashboardRoutes>
			</div>
            </div>
		</div>
	);
};

export default Dashboard;

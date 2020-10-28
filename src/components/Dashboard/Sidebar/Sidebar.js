import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faListUl, faCommentDots, faPlus, faUserFriends } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({isAdmin}) => {
	return (
		<div className="sidebar-container">
			<div className="sidebar-heading mb-3">
				<Link to="/"><img src={logo} alt="" width="150" /></Link>
			</div>
			<div className="list-group list-group-flush">
				<Link to="/dashboard/order" className="list-group-item list-group-item-action">
					 <FontAwesomeIcon icon={faShoppingCart} /><span> Order</span>
				</Link>

				<Link to="/dashboard/service" className="list-group-item list-group-item-action">
					<FontAwesomeIcon icon={faListUl} /><span> Service list</span>
				</Link>

				<Link to="/dashboard/review" className="list-group-item list-group-item-action">
					<FontAwesomeIcon icon={faCommentDots} /><span> Review</span>
				</Link>
				
				{isAdmin && 
					<div>
						<Link to="/dashboard/add-service" className="list-group-item list-group-item-action">
							<FontAwesomeIcon icon={faPlus} /><span> Add Service</span>
						</Link>
							
						<Link to="/dashboard/admin" className="list-group-item list-group-item-action">
							<FontAwesomeIcon icon={faUserFriends} /> <span>Make Admin</span>
						</Link>
					</div>
				}
			</div>
		</div>
	);
};

export default Sidebar;

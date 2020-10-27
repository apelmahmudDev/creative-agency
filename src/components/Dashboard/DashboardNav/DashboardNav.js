import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DashboardNav = ({handleToggle}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="btn btn-defaultx" onClick={handleToggle} id="menu-toggle">
            <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link " to="/">Person</Link>
            </div>
        </nav>
    );
};

export default DashboardNav;
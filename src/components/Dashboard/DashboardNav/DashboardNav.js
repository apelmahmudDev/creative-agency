import React, { useContext } from 'react';
import { UserContext } from '../../UserContext/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const DashboardNav = ({handleToggle}) => {
    const [user] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="btn btn-defaultx" onClick={handleToggle} id="menu-toggle">
            <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="navbar-nav ml-auto mr-3 text-brand">
                <h5>{user.name}</h5>
            </div>
        </nav>
    );
};

export default DashboardNav;
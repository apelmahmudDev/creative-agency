import React from 'react';
import AddminServiceList from '../AddminServiceList/AddminServiceList';
import ClientServiceList from '../ClientServiceList/ClientServiceList';

const ServiceList = ({isAdmin}) => {
	return (
		<div className="container mt-5">
			{
				isAdmin ? <AddminServiceList></AddminServiceList> :
				<ClientServiceList></ClientServiceList>
			}
		</div>
	);
};

export default ServiceList;

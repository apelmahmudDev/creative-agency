import React from 'react';
import { Route } from 'react-router-dom';
import AddServices from '../AddServices/AddServices';
import Admin from '../Admin/Admin';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';

const DashboardRoutes = ({isAdmin}) => {

    return (
        <>
            <Route exact path="/dashboard" component={Order} />
            <Route exact path="/dashboard/order" component={Order} />
            <Route path="/dashboard/service">
                <ServiceList isAdmin={isAdmin}></ServiceList>
            </Route>
            <Route path="/dashboard/order/:serviceId" component={Order} />
            <Route path="/dashboard/review" component={Review} />
            {isAdmin && <div>
                <Route path="/dashboard/add-service" component={AddServices} />
                <Route path="/dashboard/admin" component={Admin} />
            </div>}
        </>
    );
};

export default DashboardRoutes;
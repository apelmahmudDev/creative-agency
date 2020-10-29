import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    );
};

export default Routes;
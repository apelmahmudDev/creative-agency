import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Dashboard from '../Dashboard/Dashboard/Dashboard';
import Home from '../Home/Home/Home';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Routes;
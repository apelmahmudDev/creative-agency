import React from 'react';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
        </div>
    );
};

export default Home;
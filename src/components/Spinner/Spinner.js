import React from 'react';
import spiner from '../../images/spinner.gif';

const Spinner = () => {
    return (
        <div className="container text-center">
            <img src={spiner} alt="" className="img-fluid"/>
        </div>
    );
};

export default Spinner;
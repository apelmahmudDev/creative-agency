import React from 'react';
import frame from '../../../images/logos/frame.png';

const HeaderMain = () => {
    return (
        <main>
           <div className="container">
            <div className="row d-flex align-items-center" style={{height:'500px'}}>
                <div className="col-md-5 pt-0">
                    <h1 className="text-brand font-weight-bold">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p className="text-brand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores, consequatur harum debitis libero sint ut natus autem saepe nisi. Nulla et, doloribus blanditiis nemo quaerat placeat officia. Commodi, reprehenderit!</p>
                    <button className="btn btn-brand">Hire us</button>
                </div>
                <div className="col-md-6">
                    <img src={frame} alt="" className="img-fluid" />
                </div>
            </div>
           </div>
        </main>
    );
};

export default HeaderMain;
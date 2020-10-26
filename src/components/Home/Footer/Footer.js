import React from 'react';

const Footer = () => {
    const styles = {
        footerArea: {
            backgroundColor: '#FBD062',
        }
    }
    return (
        <Footer style={styles.footerArea}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="text-brand">Let us handle your <br/> project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <textarea class="form-control"/>
                        </div>
                        <button type="submit" class="btn btn-brand">Submit</button>
                    </form>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Footer;
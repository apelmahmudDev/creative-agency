import React from 'react';

const Footer = () => {
    const styles = {
        footerArea: {
            backgroundColor: '#FBD062',
            padding: '5% 5% 2% 5%'
        }
    }
    return (
        <footer style={styles.footerArea}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2 className="text-brand mb-5">Let us handle your <br/> project, professionally.</h2>
                        <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your email address" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name / company's name" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="8" placeholder="Your message"/>
                        </div>
                        <button type="submit" className="btn btn-brand">Submit</button>
                    </form>
                    </div>
                </div>
                <p className="text-center mt-5 pt-5">&copy;-copyright mahmud {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
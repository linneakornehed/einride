import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router'
import Newsletter from '../components/Newsletter.jsx';

class Contact extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="page-section">
                    <div className="header-section">
                        <div className="image-container--contact">
                        <div className="conatiner">
                            <h1 className="main-title">
                               Contact us
                            </h1>
                            <div className="header-section__text">
                                Our vision is to enhance the lives of a billion people through the delivery of a global, impact-positive supply chain infrastructure.
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="grey-section">
                    <div className="container">
                        <div className="col-md-12">
                            <h3 className="main-title contact-title">
                               We are looking forward to hearing from you
                            </h3>
                        </div>
                        <div className="col-md-12">
                        <div className="col-md-4">
                            <div className="small-box no-bg">
                            <h1 className="side-title">Sales</h1>
                        <ul className="side-info">
                                <li>Email: <a>sales@einride.eu</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="small-box no-bg">
                            <h1 className="side-title">Jobs</h1>
                        <ul className="side-info">
                                <li>Visit our <Link to="jobs">job page</Link> for open positions.</li>
                                <li>Email: <a>jobs@einride.eu</a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="small-box no-bg">
                            <h1 className="side-title">Investor</h1>
                        <ul className="side-info">
                                <li>Email: <a>invest@einride.eu</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <Newsletter />
                    </div>
                </div>
            <Footer />
        </div>
    );
  }
}

export default Contact;

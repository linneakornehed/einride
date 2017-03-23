import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import {Link} from 'react-router'

class Contact extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="container page-section">
                        <div className="col-md-12">
                            <h3 className="main-title">
                                Contact us
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <h1 className="article-title">We are looking forward to hearing from you</h1>
                        </div>
                        <div className="col-md-4">
                            <h1 className="side-title">Sales</h1>
                        <ul className="side-info">
                                <li>Email: <a>sales@einride.eu</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h1 className="side-title">Jobs</h1>
                        <ul className="side-info">
                                <li>Visit our <Link to="jobs">job page</Link> for open positions.</li>
                                <li>Email: <a>jobs@einride.eu</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h1 className="side-title">Investor</h1>
                        <ul className="side-info">
                                <li>Email: <a>invest@einride.eu</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
  }
}

export default Contact;

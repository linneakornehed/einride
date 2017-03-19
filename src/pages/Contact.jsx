import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

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
                        <div className="col-md-4">
                            <h1 className="side-title">Sales</h1>
                        <ul className="side-info">
                                <li>Phone: <a>+46 738 232</a></li>
                                <li>Email: <a>info@einride.eu</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h1 className="side-title">Jobs</h1>
                        <ul className="side-info">
                                <li>Visit our <Link to="jobs">job page</Link> to see which positions that are open</li>
                                <li className="side-info__email">Phone: <a>+46 738 232</a></li>
                                <li>Email: <a>info@einride.eu</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h1 className="side-title">Investor</h1>
                        <ul className="side-info">
                                <li>Phone: <a>+46 738 232</a></li>
                                <li>Email: <a>info@einride.eu</a></li>
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

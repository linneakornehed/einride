import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Jobs extends React.Component {

  render() {

    return (
        <div>
            <div className="second-header wrapper">
                <Header />
                <div className="container page-section">
                    <div className="col-md-12">
                        <h3 className="main-title">
                            Join the team
                        </h3>
                    </div>
                    <div className="col-md-7">
                        <div className="">
                            <h1 className="article-title">We are looking for people that like to make a difference</h1>
                            <div className="main-text">
                            <h4>CFO</h4>
                            <p>We are looking for a CFO to join the founding team. You will be responsible together with the CEO secure long time financing and build the company´s success.</p>
                            </div>
                            <div className="main-text">
                            <h4>CIO</h4>
                            <p>We are looking for a CIO to join the founding team. You will to build and design our operating systems and integrate the solution towards our customers.</p>
                            </div>
                            <div className="main-text">
                            <h4>Creative minds</h4>
                            <p>Einride is build on the believes that we can build a better tomorrow. If you are person that would like to help us do that, we are waiting for your application. 
                                No matter you talent, if you have the passion, you probably can contribute. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-md-offset-1">
                        <h4 className="side-title">For more info contact:</h4>
                        <ul className="side-info">
                                <li>Phone: <a></a></li>
                                <li>Email: <a>job@einride.eu</a></li>
                            </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Jobs;

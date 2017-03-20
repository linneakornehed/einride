import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class About extends React.Component {

  render() {

    return (
        <div>
        <div className="wrapper">
        <div className="second-header">
            <Header />
            <div className="container page-section">
                <div className="col-md-12">
                    <h3 className="main-title">
                        About Einride
                    </h3>
                </div>
                <div className="col-md-7">
                    <div className="">
                        <h1 className="article-title">Making the change</h1>
                        <div className="main-text">
                            Here at Einride, our goal is to renew the way we think about the environment for a more sustainable world. We see the problems of the transport industry today and we know that there is a better solution.    
                            <br />
                            <br />
                            We believe that humans have the choice to make the world a better place and we will provide the technology and services to do that. For too many years, the transport industry has failed to tackle their major problems, especially when it comes to pollution and the quality of life for their drivers.  Einride is solving that.
                            <br /> 
                            <br />   
                            Einride is a constantly growing team that has the knowledge and determination to fix the problems of the transport industry. We are located conveniently both in Stockholm and Gothenburg so if you are in the neighborhood, stop by and see what we are all about!  
                            <br />
                            <br />
                            Feel free to contact us at any time if you have any questions or want to learn more about our team.
                            <br />
                            <br />
                            / Einride  
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-1">
                    <div>
                    <h4 className="side-title">Press</h4>
                    <ul className="side-info">
                        <li>Email: <a>info@einride.eu</a></li>
                    </ul>
                    <h4 className="side-title">Contact</h4>
                    <ul className="side-info">
                        <li>Email: <a>info@einride.eu</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default About;

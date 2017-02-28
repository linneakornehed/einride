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
            <div className="container">
                <div className="col-md-12">
                    <h3 className="main-title">
                        Join the team
                    </h3>
                </div>
                <div className="col-md-12">
                    <div className="">
                        <h1 className="article-title">Do you have what it takes? Do do do do dodo </h1>
                        <div className="main-text">
                            Do you have what it takes? Do do do do dodo 
                        </div>
                        <div className="main-text">
                           <h4>Data Engineer <div className="sm-btn">New</div></h4>
                           <p>We are looking for a highly motivated data engineer to join the IT,MES team to develop a highly distributed and scalable pipeline with varying demands of throughput and latency. Our team is  building the Manufacturing Execution Software from ground up using open source technologies. The ideal candidate is result oriented, excited to learn new technologies and interested in solving extremely challenging problems at aggressive timelines. The candidate will work with our manufacturing data and design pipelines for both real time transactional and analytical needs.</p>
                           <h4 className="more-info">For more info contact:</h4>

                           <ul className="side-info">
                                <li>Phone: <a>+46 738 232</a></li>
                                <li>Email: <a>job@einride.eu</a></li>
                            </ul>
                        </div>
                        <div className="main-text">
                           <h4>Associate Production Designer</h4>
                           <p>As an Associate Production Designer at Tesla, you will be responsible for the development and execution for wide-ranging design requests, including internal and customer-facing projects exclusively for the Marketing Design Department. You will be part of the team that creates and delivers world-class products with the responsibility to support the marketing team’s creative endeavors. This position resides in the headquartered office located in Fremont, California. </p>
                        </div>
                        <div className="main-text">
                           <h4>Mobile Engineer <div className="sm-btn">New</div></h4>
                           <p>The Digital Products team is transforming how people purchase automotive and energy products. Our team is composed of product managers, business analysts, UX designers, and full stack software engineers, working together to create elegant solutions to complex problems. Tesla’s digital portfolio is more than a channel, combining websites, mobile apps, field technology and retail store experiences into seamless customer experiences. We run lean, move quickly and pride ourselves on accelerating Tesla from start-up to scaled enterprise without losing our scrappy spirit.</p>
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

export default Jobs;

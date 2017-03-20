import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer-container">
            <div className="main">
                <div className="container col-md-10 col-md-offset-1">
                    <div className="col-md-12">
                        <div className="socials">
                            <a href="https://twitter.com/TeamEinride">
                                <div className="social-item">
                                    <img src="./images/twitter.svg" className="social-twitter" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company-beta/13250093/?pathWildcard=13250093">
                                <div className="social-item">
                                    <img src="./images/linkedin.svg" className="social-linkedin"/>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/TeamEinride/">
                                <div className="social-item">
                                    <img src="./images/facebook.svg" className="social-facebook"/>
                                </div>
                            </a>
                            <a href="http://instagram.com/teameinride">
                                <div className="social-item">
                                    <img src="./images/instagram.svg" className="social-instagram"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer-class">
                            <div className="footer-heading">Einride AB </div>
                            <div className="info">Holtermansgatan 1D </div>
                            <div className="info">411 29 Göteborg </div>
                            <div className="info">Sweden </div>
                            <div className="info-link"><Link to="/">www.einride.eu </Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
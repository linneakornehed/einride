import React from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer-container">
            <div className="main content-wrapper">
                <div className="container col-md-12">
                    <div className="col-md-12">
                        <div className="socials">
                            <a href="https://twitter.com/TeamEinride">
                                <div className="social-item">
                                    <img src="./images/twitter.svg" className="social-twitter" alt="twitter" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company-beta/13250093/?pathWildcard=13250093">
                                <div className="social-item">
                                    <img src="./images/linkedin.svg" className="social-linkedin" alt="linkedin"/>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/TeamEinride/">
                                <div className="social-item">
                                    <img src="./images/facebook.svg" className="social-facebook" alt="facebook"/>
                                </div>
                            </a>
                            <a href="http://instagram.com/teameinride">
                                <div className="social-item">
                                    <img src="./images/instagram.svg" className="social-instagram" alt="instagram"/>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="footer-class">
                            <div className="info info-link">
                                <Link to="/contact">Contact us</Link>
                            </div>
                            <div className="info info-link">
                                <Link to="/jobs">Join our team</Link>
                            </div>
                            <div className="info info-link">
                                <Link to="/investor">Investor relations</Link>
                            </div>
                            <div className="info info-link">
                                <Link to="/press">Press</Link>
                            </div>
                            <div className="info info-link">
                                <Link to="/">Einride News</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
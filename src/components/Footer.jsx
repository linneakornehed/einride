import React from 'react'
import {Link} from 'react-router'
import FontAwesome from 'react-fontawesome';

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
                                    <FontAwesome name='twitter' className="social-twitter" alt="twitter" />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/company-beta/13250093/?pathWildcard=13250093">
                                <div className="social-item">
                                    <FontAwesome name='linkedin' className="social-linkedin" alt="linkedin"/>
                                </div>
                            </a>
                            <a href="https://www.facebook.com/TeamEinride/">
                                <div className="social-item">
                                  <FontAwesome name='facebook' className="social-facebook" alt="facebook"/>
                                </div>
                            </a>
                            <a href="http://instagram.com/teameinride">
                                <div className="social-item">
                                    <FontAwesome name='instagram' className="social-instagram" alt="instagram"/>
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
                                <a href="http://news.einride.eu/">Einride blog</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                         <div className="footer-class-2">
                             <div className="info info-link">© 2017 Einride. All rights reserved.</div>
                        </div>
                    </div>
                    <div className="col-md-12 logo-footer__container">
                        <div className="logo-footer">
                            <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.24 43.58"><title>white-svg</title><path className="cls-1" d="M51.9,237.1H97v5.08H60.14V255.9H96.91V261H60.14v14.13h37.1v5.08H51.9Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M204.45,237.1v43.09h-6.57L167,245.63h-.15v34.57h-6.8V237.1h7.4l30,33.63h.15V237.1Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M253.87,263.18h-15.7v16.91h-7v-43h23.4c10.72,0,18.72,4.61,18.72,12.83,0,6.36-5,10.73-12.38,12.24l13.58,18h-7.85Zm-17.51-5h16.48c7.53,0,12.92-2.88,12.92-8.39s-5.31-8.39-12.84-8.39H236.36Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M300.85,237.1h6.84v43.09h-6.84Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M124.62,237.1h6.84v43.09h-6.84Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M353.18,237.1c18.17,0,27.15,9.81,27.15,21.49,0,12.38-9.78,21.6-26.63,21.6H335V237.1Zm20.23,21.11c0-10.68-8.24-16.52-20.75-16.52H341.85v32.93h11.4C365.76,274.62,373.41,268.55,373.41,258.21Z" transform="translate(-51.9 -236.61)"/><path className="cls-1" d="M404.8,236.61h45.08v5.08H413v13.72h36.77v5.08H413v14.13h37.1v5.08H404.8Z" transform="translate(-51.9 -236.61)"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
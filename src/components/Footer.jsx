import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router'

class Footer extends React.Component {

  render() {
    return (
        <footer className="footer-container">
            <div className="main">
                <div className="container">
                    <div className="col-md-12">
                        <div className="col-md-4 col-sm-6 footer-class">
                            <h4>Einride AB</h4>
                            <div className="info">Här kan en adress vara snygg</div>
                            <div className="info">112 23 Somewhere</div>
                            <div className="info">Sweden</div>
                            <Link to="/">www.einride.eu</Link>
                        </div>
                        <div className="col-md-8 col-sm-6">
                        <div className="socials">
                            <a><div className="social-facebook">FB</div></a>
                            <a><div className="social-twitter">TW</div></a>
                            <a><div className="social-linkedin">LI</div></a>
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
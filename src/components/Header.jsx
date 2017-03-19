import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

class Header extends React.Component {

  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
            <div className="col-md-12">
              <Navbar collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Brand>
                       <Link to="/">
                        <div className="navbar-header">
                          <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.59 45.11"><title>logo-laying-down</title><path d="M311.9,213.6h46.61v5.25H320.42V233h38v5.25h-38V252.9h38.36v5.25H311.9Z" transform="translate(-226.1 -213.09)"/><path d="M469.64,213.6v44.56h-6.8l-31.9-35.74h-.15v35.74h-7V213.6h7.65l31.05,34.78h.15V213.6Z" transform="translate(-226.1 -213.09)"/><path d="M520.74,240.56H504.51V258h-7.26V213.55h24.19c11.08,0,19.35,4.76,19.35,13.26,0,6.57-5.15,11.09-12.8,12.66L542,258h-8.12Zm-18.1-5.19h17c7.78,0,13.35-3,13.35-8.67S527.54,218,519.76,218H502.64Z" transform="translate(-226.1 -213.09)"/><path d="M569.32,213.6h7.07v44.56h-7.07Z" transform="translate(-226.1 -213.09)"/><path d="M387.09,213.6h7.07v44.56h-7.07Z" transform="translate(-226.1 -213.09)"/><path d="M623.43,213.6c18.79,0,28.07,10.14,28.07,22.22,0,12.8-10.12,22.34-27.54,22.34H604.64V213.6Zm20.92,21.83c0-11-8.52-17.09-21.45-17.09H611.71v34.05h11.79C636.44,252.39,644.35,246.12,644.35,235.43Z" transform="translate(-226.1 -213.09)"/><path d="M676.8,213.09h46.61v5.25H685.33v14.19h38v5.25h-38v14.61h38.36v5.25H676.8Z" transform="translate(-226.1 -213.09)"/></svg>
                      </div>
                    </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav className="nav navbar-nav">
                      <Link to="/about">About</Link>
                      <Link to="/jobs">Join the team</Link>
                      <Link to="/investor">Investor relations</Link>
                      <Link to="/contact">Contact us</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
  }
}

export default Header;

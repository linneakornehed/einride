import React from 'react';
import {Link} from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';


class Header extends React.Component {

  render() {
    return (
      <div className="navbar navbar-default navbar-default-bg navbar-static-top">
            <div className="col-md-12">
              <Navbar collapseOnSelect>
                  <Navbar.Header>
                    <Navbar.Toggle />
                    <Navbar.Brand>
                        <Link to="/">
                        <div className="navbar-header__logo">
                          <svg id="Lager_1" data-name="Lager 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 398.24 175.83"><title>logo-standing</title><path className="cls-1" d="M543.41,232.67c-.36-2.82-2.34-17.31-2.38-17.83-.35-1.39-.7-2.72-1-4-3.15-17.79-16.12-32.14-34.39-33.43-5.67-.4-21.19.56-23.08,13.48a.21.21,0,0,0,.36.18c1.18-1.23,4.91-4.83,13.66-5.29,5.89-.31,21.68.35,27.91,24,.95,3.16-10.24.2-11.79-.14-3.57-.8-10.64-4.39-11.7-2.65s3.94,4.57,4.71,7.8c0,0,0,0,0,.05,0,1.09-5.63,1-7.46,1.17-14.3,1-27.1,19.05-27.1,19.05s-13.79,14.57-22.22,16.48c-11,4-19.29,0-19.38,1.91-.12,2.53,8.73,14.57,21.94,14.26,9.61-.22,23.79-3.15,28.1-4.13,3.57-.82,9.62-1.37,13.34-.28a15.65,15.65,0,0,1,6.18,3.51c6.17,5.1,6.63,17.4,10.39-1.4,1.06-6.52,3-17.14,5.34-18.12,6.77-2.8,18.94,9.84,22.41,10.32a21.51,21.51,0,0,1,6.38,1.87c4.25,1.86,7.56-2,8.57-4.35C552.83,253.49,543.77,235.5,543.41,232.67Z" transform="translate(-305.9 -177.36)"/><path d="M305.9,310.1H351v5.08H314.14V328.9h36.77V334H314.14v14.13h37.1v5.08H305.9Z" transform="translate(-305.9 -177.36)"/><path d="M458.45,310.1v43.09h-6.57L421,318.63h-.15v34.57h-6.8V310.1h7.4l30,33.63h.15V310.1Z" transform="translate(-305.9 -177.36)"/><path d="M507.87,336.18h-15.7v16.91h-7v-43h23.4c10.72,0,18.72,4.61,18.72,12.83,0,6.36-5,10.73-12.38,12.24l13.58,18h-7.85Zm-17.51-5h16.48c7.53,0,12.92-2.88,12.92-8.39s-5.31-8.39-12.84-8.39H490.36Z" transform="translate(-305.9 -177.36)"/><path d="M554.85,310.1h6.84v43.09h-6.84Z" transform="translate(-305.9 -177.36)"/><path d="M378.62,310.1h6.84v43.09h-6.84Z" transform="translate(-305.9 -177.36)"/><path d="M607.18,310.1c18.17,0,27.15,9.81,27.15,21.49,0,12.38-9.78,21.6-26.63,21.6H589V310.1Zm20.23,21.11c0-10.68-8.24-16.52-20.75-16.52H595.85v32.93h11.4C619.76,347.62,627.41,341.55,627.41,331.21Z" transform="translate(-305.9 -177.36)"/><path d="M658.8,309.61h45.08v5.08H667v13.72h36.77v5.08H667v14.13h37.1v5.08H658.8Z" transform="translate(-305.9 -177.36)"/></svg>
                      </div>
                    </Link>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <Navbar.Collapse>
                    <Nav className="nav navbar-nav">
                      <Link activeClassName='is-active' to="/product">About</Link>
                      <Link activeClassName='is-active' to="/jobs">Join our team</Link>
                      <Link activeClassName='is-active' to="/investor">Investor relations</Link>
                      <Link activeClassName='is-active' to="/press">Press</Link>
                      <a href="http://news.einride.eu/">Blog</a>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
  }
}

export default Header;

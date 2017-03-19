import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class Investor extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="container page-section">
                        <div className="col-md-12">
                            <h3 className="main-title">
                                Investor relations
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <div className="">
                                <h1 className="article-title">Future of transport</h1>
                                <div className="main-text">
                                Einride is creating the sustainable transport solution for transport by creating rethinking and creating the transport service of tomorrow. 
                                <br />
                                We are looking for investors that togheter with us would like to create and build the transport service for a sustainable future. 
                                <div className="article-end">
                                Please contact, 
                                <a> invest@einride.eu</a>
                                </div>
                                 </div>
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

export default Investor;

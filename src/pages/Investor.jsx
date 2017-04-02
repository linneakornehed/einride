import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class Investor extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="page-section">
                    <div className="header-section">
                        <div className="image-container--invest">
                        <div className="conatiner">
                            <h3 className="main-title">
                                 Future of transport
                            </h3>
                            <div className="header-section__text">
                                Einride is creating the sustainable solution for transport by creating and rethinking the transport service of tomorrow.
                                We are looking for investors that, together with us, would like to create and build the transport service for a sustainable future. 
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="grey-section">
                    <div className="container">
                        <div className="col-md-12">
                            <h3 className="main-title">
                               Infrastructure
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <div className="">
                                <div className="main-text content-wrapper">
                                We are building a new transportation infrastructure that doesn’t just improve the status quo, but replaces it. 
                                <br />
                                <br />
                                Our charging technology, our remote driving centres and our T-Pods are all ingredients in an Einride experience. Infrastructure is not about introducing these innovations in isolation, but in their synthesis as one smooth-running entity.
                                <br />
                                <br />
                                Transforming infrastructure is a difficult task, but once complete, far more impactful than the introduction of one innovation into the old system.
                                <div className="article-end">
                                For more information, please contact us at  
                                <a> invest@einride.eu</a>
                                </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Investor;

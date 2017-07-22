import React from 'react';
import Header from '../components/Header.jsx';
import SecondHeader from '../components/SecondHeader'
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class Jobs extends React.Component {

  render() {

    return (
        <div>
            <div className="second-header wrapper">
                <Header />
                <SecondHeader />
                <div className="page-section">
                    <div className="white-section">
                        <div className="container ">
                            <div className="main-title-wh">
                               The T-pod
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="start-page__image-box margin-bottom-2"></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="margin-bottom-2">
                                        <h1 className="article-title">Electric, self-driving vehicle</h1>
                                        <div className="section__main-text">
                                            The ‘T-pod’ is an electric, self-driving vehicle that can be remotely controlled by drivers, set for prototype testing in 2017 followed by international distribution. In addition to the T-pod, we are developing a remote driving system, charging stations and an infrastructure that will make the system the most pioneering of its kind.
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div>
                                        <h1 className="article-title">T-pod details</h1>
                                        <div className="section__main-text">
                                            <div className="main-text">
                                                <div className="main-text-item">
                                                <b>Cargo capacity:</b> 15 standard pallets
                                                </div>
                                                <div className="main-text-item">
                                                <b>Weight with full cargo:</b> 20 tons
                                                </div>
                                                <div className="main-text-item">
                                                <b>Length:</b> approximately 7 meters (23 feet)
                                                </div>
                                                <div className="main-text-item">
                                                    <b> Battery capacity:</b> 200 kWh energy
                                                </div>
                                                <div className="main-text-item">
                                                <b> Distance on one charge:</b> 200km (124 miles)
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="start-page__image-box-2 margin-bottom-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Newsletter />
            </div>
        <Footer />
    </div>
    );
  }
}

export default Jobs;

import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class Jobs extends React.Component {

  render() {

    return (
        <div>
            <div className="second-header wrapper">
                <Header />
                <div className="page-section">
                    <div className="header-section">
                        <div className="image-container--product ">
                        <div className="conatiner">
                            <h3 className="main-title">
                                The T-pod
                            </h3>
                            <div className="header-section__text">
“Einride is transforming the existing transport chain from the ground up. The big companies behind long haul trucks keep building bigger trucks to increase efficiency, which ultimately means even more emissions. We are changing that by creating a secure solution that is, not only cost effective, but dramatically minimizes the negative environmental impact of the transportation industry.”
<br /><br />- Filip Lilja, COO at Einride
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="grey-section">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="start-page__image-box"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="section__small-box">
                                <h1 className="article-title">Electric, self-driving vehicle</h1>
                                <div className="section__main-text">
                                        The ‘T-pod’ is an electric, self-driving vehicle that can be remotely controlled by drivers, set for prototype testing in 2017 followed by international distribution. In addition to the T-pod, we are developing a remote driving system, charging stations and an infrastructure that will make the system the most pioneering of its kind.
                                    <br />
                                 </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="section__small-box">
                                <h4 className="color-aqua">Details</h4>
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
                             <div className="second-row row margin-top-2-5">
                                <div className="col-md-12">
                                    <div className="about-page__image-box-2"></div>
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

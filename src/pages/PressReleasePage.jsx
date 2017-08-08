import React from 'react';
import Header from '../components/Header.jsx';
import {Link} from 'react-router';
import SecondHeader from '../components/SecondHeader.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';
import FontAwesome from 'react-fontawesome';

class PressReleasePage extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <SecondHeader />
                        <div className="white-section">
                            <div className="container">
                                <div className="main-title-wh">
                                Press material
                                </div>
                                <div className="col-md-12">
                                    <h4 className="press-release__sub-title">Press release</h4>
                                </div>
                                <div className="col-md-12">
                                    <div className="col-md-4">
                                        <Link to="/pressReleaseTpod">
                                            <img className="pressReleasePage__image" src="./images/Tpod_Material1.jpg" />
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <Link to="/pressReleaseTpod">
                                            <h4>The transport vehicle of the future; introducing the T-pod</h4>
                                        </Link>
                                        July 5th, 2017, 8:00: The first full-scale prototype transport vehicle of the future has just been unveiled by Swedish tech company, Einride. The ‘T-pod,’ an electric self-driving vehicle that is remotely controlled by drivers, is significantly smaller than today’s heavy trucks and works alongside its innovative charging stations and pioneering infrastructure. Cargo capacity: 15 standard pallets... 
                                        <div className="press-url">
                                            <Link to="/pressReleaseTpod">
                                                Read more<FontAwesome name='long-arrow-right'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 pressReleasePage__news">
                                    <div className="col-md-4">
                                        <Link to="/pressReleaseEinride">
                                            <img className="pressReleasePage__image" src="./images/podd.png" />
                                        </Link>
                                    </div>
                                    <div className="col-md-8">
                                        <Link to="/pressReleaseEinride">
                                            <h4>Einride to change the future of transport with world’s first sustainable self-driving ‘T-pod’</h4>
                                        </Link>
                                        April 6, 2017 - Today marks the global launch of Einride, the company that will change the modern transportation industry. Einride has created a technologically advanced system including the world’s first ‘T-pod’ which will change the future of the industry and improve the sustainability of mankind...     
                                        <div className="press-url">
                                            <Link to="/pressReleaseEinride">
                                                Read more <FontAwesome name='long-arrow-right'/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <h4 className="press-release__sub-title">Press kit</h4>
                                </div>
                                <div className="col-md-12">
                                    <div className="col-md-12">
                                        Download our press kit for logo and high resolution pictures of the T-pod.
                                        <div className="pressReleasePage__download">
                                            <a href="./files/Presskit.zip" download="Einride press kit">
                                                <button className="btn" type="submit">Get press kit</button>
                                            </a>
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

export default PressReleasePage;

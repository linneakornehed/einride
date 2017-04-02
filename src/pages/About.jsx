import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class About extends React.Component {

  render() {

    return (
        <div>
        <div className="wrapper">
        <div className="second-header">
            <Header />
            <div className="page-section">
                    <div className="header-section">
                        <div className="image-container--about">
                        <div className="conatiner">
                            <h3 className="main-title">
                                About Einride
                            </h3>
                            <div className="header-section__text">
                            "A simpler, carbon dioxide free supply chain. A better life for all." - Christer Fuglesang
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="grey-section">
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="about-page__text-box">
                        <h1 className="article-title">Who we are</h1>
                            <div className="main-text">
                                This is not a company, it’s a movement. We don’t just work here, we believe. We are an organisation that judges our success by the positive impact our solutions have on the lives of others.
                                <br />
                                <br />
                                We believe that with innovation, technology and commitment, no problem can’t be solved. No mountain is insurmountable.
                                <br /> 
                                <br />   
                                We are not a producer, a manufacturer or a service provider – we are designers. We are designing a process, and building the technologies that can make that process a reality.
                                The heart of design is about finding real solutions for real problems. And that’s what defines our approach.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="about-page__image-box">
                            <div className="people__info-box">
                                <label className="people-profile">Profile</label>
                                <div className="people-einride">Robert Falck</div>
                                <div className="people-description">CEO, co-founder <br />Einride</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row second-row">
                    <div className="col-md-5">
                        <div className="about-page__image-box-2"></div>
                    </div>

                    <div className="col-md-7">
                        <div className="about-page__text-box">
                        <h1 className="article-title">Our vision</h1>
                            <div className="main-text">
                                Our vision is to enhance the lives of a billion people through the delivery of a global, impact-positive supply chain infrastructure.
<br /><br />
That means we don’t believe our work is done when we’re carbon neutral. Our design process is driven by aiming to have a net positive impact – whether that might be improving the lives of transport workers, or reducing road traffic accidents, every element of our system aims to have a measurable positive impact on the planet.
<br /><br />
With a global vision, we believe that once we’ve improved the lives of a billion people, we will have reached terminal velocity, and achieving our mission will just be a matter of time.
                            </div>
                        </div>
                    </div>
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

export default About;

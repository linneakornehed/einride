import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class Press extends React.Component {

  render() {

    return(
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="page-section">
                            <div className="header-section">
                                <div className="image-container--about">
                                <div className="conatiner">
                                    <h3 className="main-title">
                                        Press
                                    </h3>
                                    <div className="header-section__text">
                                    "A simpler, carbon dioxide free supply chain. A better life for all." 
                                    <br /><br />- Christer Fuglesang
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className="grey-section">
                        <div className="container">
                    <div className="row second-row">
                            <div className="col-md-7 margin-bottom-2">
                                <div className="about-page__text-box">
                                <h1 className="article-title">Our people</h1>
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
                            <div className="col-md-5 margin-bottom-2">
                                <div className="about-page__image-box">
                                    <div className="people__info-box">
                                        <label className="people-profile">Profile</label>
                                        <div className="people-einride">Robert Falck</div>
                                        <div className="people-description">CEO, founder <br />Einride</div>
                                    </div>
                                </div>
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

export default Press

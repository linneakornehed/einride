import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';


class Jobs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: false}
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
        }))
    }

  render() {

    return (
        <div>
            <div className="second-header wrapper">
                <Header />
                <div className="page-section">
                    <div className="header-section">
                        <div className="image-container">
                        <div className="conatiner">
                            <h1 className="main-title">
                                Join our team
                            </h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="grey-section">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="col-md-12">
                                <div className="main-text col-md-6">
                                    <h4 className="job-page__title">CFO</h4>
                                    <p> We are looking for a CFO to join the founding team. You will be responsible, together with the CEO, of securing long time financing and building the company's success.
                                    <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a>
                                    </p>
                                </div>
                            <div className="main-text col-md-6">
                                <h4 className="job-page__title">PR / Marketing</h4>
                                <p>We are looking for PR / Marketing to join the founding team. You will build and market Einride brand.
                                    <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="main-text col-md-6">
                                <h4 className="job-page__title">Engineering</h4>
                                <p>We are looking for a Engineers to join the tech- team. If you are skilled in automotive and hardware we are looking for you.
                                    <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a>
                                </p>
                            </div>
                            <div className="main-text col-md-6">
                                <h4 className="job-page__title">Programmers</h4>
                                <p>We are looking for a Engineers to join the software-team. If you are a skilled develooper we are looking for you.
                                    <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="main-text col-md-6">
                                <h4 className="job-page__title">Self-drivning</h4>
                                <p>If you want to make a diffrence and know how to contribute in develooping a selfdrivning system Einride is the place for you.
                                                                    <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a>
                                </p>
                            </div>
                            <div className="main-text col-md-6">
                                <h4 className="job-page__title">Creative minds</h4>
                                <p>Einride is built on the belief that we can build a better tomorrow. If you are a person that would like to help us do that, we are waiting for your application.  
                                    <br /><br />
                                    No matter your talent, if you have the passion, you can probably contribute.
                                                                        <br />
                                    <br />
                                    Email: <a>jobs@einride.eu</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grey-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section__video-container margin-bottom-2">
                                    <iframe src="https://player.vimeo.com/video/211160270?color=0AB68e&title=0&byline=0&portrait=0" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h1 className="article-title">We are looking for people that like to make a difference</h1>
                                    <div className="section__main-text">
                                        We are rethinking the entire transport infrastructure from the ground up. With this, we are giving the drivers a new working place, driving our T-pods remotely. This means that the driver can take a coffee break when needed, have a shorter way to work and also be able to get home to family and/or friends every day and not sleeping away from home in order to do their job.
                                        <br /> <br />
                                        We are simplifying the concept of transportation – effectively removing vehicles, and giving the cargo wheels.
                                        <br />
                                        We are rethinking the entire supply chain infrastructure from the ground up.<br /><br />
                                        With this, we are giving the drivers a new working place, driving our T-pods remotely. This means that the driver can take a coffee break when needed, have a shorter way to work and also be able t get home to family and/or friends every day and not sleeping away from home in order to do their job. We will also create new jobs in terms of maintaining the infrastructure, and safety checking the systems as well as the T-Pod. 
                                        Our first estimation is that we will need approximately 200 employees, which includes drivers, IT developers, production engineers and lawyers. In this way we are also creating new jobs. 
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

export default Jobs;

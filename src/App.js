import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Newsletter from './components/Newsletter.jsx'
import Video from './components/Video.jsx'


class App extends Component {   
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
        <div className="App">
        <div className="wrapper">
            <div className="App-header">
                <Header />
                    <div className="start-page">
                            <div className="start-page__video">
                                <Video />
                            </div>
                            <div className="start-page__conatiner">
                                <div className="start-page__section-1">
                                    <div className="start-page__section-1--text content-wrapper">
                                        This is not a company, it’s a movement. Einride is installing the world’s first completely emission-free, road-based transportation system. We are rethinking the entire supply-chain infrastructure from the ground up, creating the transport solution of the future.
                                        { 
                                            this.state.isToggleOn ?
                                            ( <div><br />Einride transforms the impact of the supply chain industry – removing dirty, polluting, inefficient vehicles from the entire system. Noise is reduced, congestion is relieved, and road safety is improved. <br /><br />We are also transforming the economy of change. Traditionally, costs have gone up as planetary impact goes down – but with Einride there is no sustainability premium, rather it’s a sustainability advantage.
                                            <br /><br />
                                            <button className="show-more-button" onClick={this.handleClick}>Read less</button> 
                                            </div> )
                                       :    (<div><br /><button className="show-more-button" onClick={this.handleClick}>Read more</button></div>) }
                                       <br />
                                    </div>
                                </div>
                            </div>
                            <div className="container grey-section">
                                <div className="row">
                                    <div className="col-md-6 margin-bottom-2">
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
                                    <div className="col-md-6">
                                        <div className="start-page__image-block-1">
                
                                        </div>
                                    </div>
                                </div>  
<div className="row second-row">
                                    <div className="col-md-6 margin-bottom-2 hidden-mobile">
                                        <div className="start-page__image-block-2">
                        
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-page__text-box">
                                            <h1 className="article-title">Our mission</h1>
                                            <div className="main-text">
                                                To transform the movement of goods from a negative planetary impact to a positive one.
                                                <br /><br />
                                                Our mission is to eradicate all negative effects that the transportation of goods has on the planet, by replacing the existing infrastructure with an alternative that has a net positive impact.
                                                <br /><br />
                                                Our intelligent infrastructure provides more improvements than infringements on both the planet and those living on it. From noise reduction to zero fossil fuel consumption, the Einride process at its full potential will transform the way the world transports its goods, and in turn, transform the world.

                                            </div>
                                        </div>
                                    </div>
                                </div>                 
                                <div className="row second-row">
                                    <div className="col-md-4 margin-bottom-2">
                                        <div className="about-page__text-box green-bg">
                                            <div className="main-text quote">
                                                <div className="quote-icon-container">
                                                    <img className="quote-icon" src="./images/quotes.svg" />
                                                </div>
                                            We believe that with innovation, technology and commitment, no problem can’t be solved. No mountain is insurmountable.                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 margin-bottom-2 hidden-mobile">
                                        <div className="about-page__image-box-2"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="start-page__image-box"></div>
                                    </div>
                                </div>  
                          </div>
                            <div className="start-page__section-2">
                                <h4 className="section-title"></h4>
                                <div className="col-md-12">
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon" src="./images/cloud-icon.svg" />
                                        <div className="start-page__column--title">Environment</div>
                                        <div className="start-page__column--text">Carbon-neutral electric vehicles that lower the environmental impact</div>
                                    </div>
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon start-page__icon--wheel" src="./images/chain-icon.svg" />
                                        <div className="start-page__column--title">Reduced cost </div>
                                        <div className="start-page__column--text">
                                            Industry agnostic supply chain solutions. Create an enhanced cost efficiency with transports
                                        </div>
                                    </div>
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon start-page__icon--wheel" src="./images/wheel-icon-2.svg" />
                                        <div className="start-page__column--title">Self- and remote drive</div>
                                     <div className="start-page__column--text">
                                        Self-drive technology. Driver centres for remote driving.
                                        We will improve industry standards for the workers and create new kind of jobs
                                    </div>
                                    </div>
                                </div>
                            </div>
                                <Newsletter />
                    </div>
                    </div>
                <div>
            </div>
            <Footer />
        </div>
    </div>
        )
    }
}

export default App
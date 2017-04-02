import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Newsletter from './components/Newsletter.jsx'
import Video from './components/Video.jsx'


class App extends Component {   
    constructor() {
        super()
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
                                        Einride transforms the impact of the supply chain industry – removing dirty, polluting, inefficient ve- hicles from the entire system. Noise is reduced, congestion is relieved, and road safety is improved. We are also transforming the economy of change. Traditionally, costs have gone up as planetary impact goes down – but with Einride there is no sustainability premium, rather it’s a sustainability advantage.
                                    </div>
                                </div>
                            </div>
                            <div className="start-page__section-2">
                                <h4 className="section-title"></h4>
                                <div className="row">
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon" src="./images/cloud-icon.svg" />
                                        <div className="start-page__column--title">Environment</div>
                                        <div className="start-page__column--text">Carbon-neutral electric vehicles that lower the environmental impact</div>
                                    </div>
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon start-page__icon--wheel" src="./images/wheel-icon-2.svg" />
                                        <div className="start-page__column--title">Self- and remote drive</div>
                                     <div className="start-page__column--text">
                                        Self-drive technology. Driver centres for remote driving.
                                        We will improve industry standards for the workers and create new kind of jobs
                                    </div>
                                    </div>
                                    <div className="col-md-4 start-page__column">
                                        <img className="start-page__icon start-page__icon--wheel" src="./images/chain-icon.svg" />
                                        <div className="start-page__column--title">Reduced cost </div>
                                        <div className="start-page__column--text">
                                            Industry agnostic supply chain solutions. Create an enhanced cost efficiency with transports
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
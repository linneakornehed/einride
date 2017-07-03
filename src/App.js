import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Newsletter from './components/Newsletter.jsx'
import Video from './components/Video.jsx'
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router'

class App extends Component {   
    constructor(props) {
        super(props)
        this.state = { 
                    isToggleOn: false,
                    videoURL: 'https://youtu.be/CO5ULbfsY20'
        }
        
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
                    <video id="background-video" loop autoPlay>
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoURL} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="start-page">
                        <div className="start__intro">
                            <div className="start__text-box">
                                <h1 className="start__header-title">
                                   We're installing the world's first completely emission-free, road-based transportation system
                                </h1>
                                <div className="start__main-text">
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
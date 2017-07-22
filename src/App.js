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
                    <div className="start-page">
                        <div className="start__intro">
                            <div className="start__text-box">
                                <div className="start__header-title">
                                    Installing the world's first emission-free, road-based transportation system
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
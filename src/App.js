import React, { Component } from 'react'
import logo from './logo.svg'
import Header from './components/Header.jsx'
import Countdown from 'react-count-down'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

const OPTIONS = { endDate: '04/03/2017'}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
            <div className="start-page">
              <div className="start-page-container">
                <Countdown options={OPTIONS} />
              </div>
              <Video autoPlay muted
                poster=""
                className="background-video">
                <source src="./images/einride-video.mp4" type="video/mp4" />
            </Video>
            </div>
        </div>
      <div>
      </div>
    </div>
    );
  }
}

export default App;
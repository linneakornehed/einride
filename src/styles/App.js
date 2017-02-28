import React, { Component } from 'react';
import logo from './logo.svg';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <h2>Welcome to Einride!</h2>
        </div>
        <div>
         </div>
      </div>
    );
  }
}

export default App;

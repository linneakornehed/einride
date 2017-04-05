import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import Jobs from './pages/Jobs.jsx'
import Contact from './pages/Contact.jsx'
import Investor from './pages/Investor.jsx'
import About from './pages/About.jsx'
import { Router, Route, hashHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './styles/main.css'

ReactDOM.render(  
    <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="about" component={About}/>
        <Route path="jobs" component={Jobs}/>
        <Route path="investor" component={Investor}/>
        <Route path="contact" component={Contact}/>
   </Router>, document.getElementById('root'))

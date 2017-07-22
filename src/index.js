import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import Jobs from './pages/Jobs.jsx'
import Product from './pages/Product.jsx'
import Vision from './pages/Vision.jsx'
import Contact from './pages/Contact.jsx'
import Press from './pages/Press.jsx'
import PressReleasePage from './pages/PressReleasePage.jsx'
import PressReleaseEinride from './pages/PressReleaseEinride.jsx'
import PressReleaseTpod from './pages/PressReleaseTpod.jsx'
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
        <Route path="press" component={Press}/>
        <Route path="product" component={Product}/>
        <Route path="jobs" component={Jobs}/>
        <Route path="investor" component={Investor}/>
        <Route path="vision" component={Vision}/>
        <Route path="contact" component={Contact}/>
        <Route path="pressmaterial" component={PressReleasePage}/>
        <Route path="pressReleaseTpod" component={PressReleaseTpod}/>
        <Route path="pressReleaseEinride" component={PressReleaseEinride}/>
   </Router>, document.getElementById('root'))

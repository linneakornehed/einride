import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Countdown from 'react-count-down'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const OPTIONS = {endDate: '04/03/2017'}

const BasicInputBox = React.createClass({
    render: function () {
        return (
            <div className="input-field">
                <br/>
                <input type="text" onChange={this.props.valChange} value={ this.props.val} className="newsletter-input" placeholder="Sign up with your email"/>
            </div>
        );
    }
})

class App extends Component {   
    constructor() {
        super()
        this.state = { email: "", registered: false,
                       windowWidth: window.innerWidth }
    }

    handleResize() {
    this.setState({windowWidth: window.innerWidth});
    }

    componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    }

    renderWidth() {
        if(this.state.windowWidth >= 640) {
            return this.playVideo()
        } else ''
    }

    playVideo() {
        return (
            <Video autoPlay muted
                poster="./images/mobile-bg.jpg"
                className="background-video">
                <source src="./images/einride-video.mp4" type="video/mp4"/>
            </Video>
        )
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    renderForm() {
        return (
            <div>
                <label className="news-letter-title">Follow our journey</label>
                <form key="form-key" onSubmit={this.submit.bind(this)}>
                    <BasicInputBox valChange={this.emailChange.bind(this)}
                                    val={this.state.email}/>
                    <button className="btn"> Send</button>
                </form>
            </div>
        )
    }

    renderThanks() {
        return (
            <div key="thanks-key" className="newsletter-input news-letter-title">Thank you! We will keep you posted!</div>
        )
    }

    render() {
        return (
        <div className="App">
            <div className="App-header">
                <Header />
                    <div className="start-page">
                        <div className="start-page-container">
                            <Countdown options={OPTIONS}/>
                            <div className="newsletter-signup">
                                <ReactCSSTransitionReplace transitionName="fade-wait"
                                                            transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                                {this.state.registered ? this.renderThanks() : this.renderForm()}
                                </ReactCSSTransitionReplace>
                            </div>
                        </div>
                        <div className="hide-on-desktop">
                            <div className="start-page-bg"></div>
                        </div>
                        <div className="hide-on-mobile">
                            {this.renderWidth()}
                        </div>
                        </div>
                    </div>
                <div>
            </div>
        </div>
        )
    }

    submit(e) {
        e.preventDefault();
        const url = 'https://einride.eu/____formmail/1/';
        const self = this;

        const formData = new FormData();
        // From reverse-engineering the current homepage
        formData.append('recipient', 'news@einride.eu');
        formData.append('email', 'news@einride.eu');
        formData.append('subject', 'New message via contact form on einride.eu - Land page');
        formData.append('We are LAUNCHING soon - sign up for exciting news', this.state.email);
        formData.append('replyto', this.state.email);

        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).then(function (response) {
            console.log(response);
            self.setState({registered: true});
        }).catch(function (err) {
            // Error :(
            console.error("Failed to sign up for newsletter", err);
        })
        return false;
    }
}


export default App;
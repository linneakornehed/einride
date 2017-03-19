import React, {Component} from 'react'
import logo from './logo.svg'
import Header from './components/Header.jsx'
import Countdown from 'react-count-down'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const OPTIONS = {endDate: '04/03/2017'}

const BasicInputBox = React.createClass({
    render: function () {
        return (
            <div>
                <label>{this.props.label}</label>
                <br/>
                <input type="text" onChange={this.props.valChange} value={ this.props.val}/>
                <br/>
            </div>
        );
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {email: "", registered: false};
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }


    renderForm() {
        return (
            <form key="form-key" onSubmit={this.submit.bind(this)}>
                <BasicInputBox label="Follow our journey" valChange={this.emailChange.bind(this)}
                               val={this.state.email}/>
            </form>
        );
    }

    renderThanks() {
        return (
            <p key="thanks-key">We will keep you posted!</p>
        );
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
                                <ReactCSSTransitionReplace transitionName="cross-fade"
                                                           transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                                    {this.state.registered ? this.renderThanks() : this.renderForm()}
                                </ReactCSSTransitionReplace>
                            </div>
                        </div>
                        <Video autoPlay muted
                               poster=""
                               className="background-video">
                            <source src="./images/einride-video.mp4" type="video/mp4"/>
                        </Video>
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }

    submit(e) {
        e.preventDefault();

        const url = 'http://einride.eu/____formmail/1/';
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
        });
        return false;
    }
}


export default App;
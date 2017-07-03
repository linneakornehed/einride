import React, {Component} from 'react'
import ReactCSSTransitionReplace from 'react-css-transition-replace';


const BasicInputBox = React.createClass({
    render: function () {
        return (
            <div className="input-field">
                <br/>
                <input type="text" ref="input-field" onChange={this.props.valChange} value={ this.props.val} className="newsletter-input" placeholder="Sign up with your email"/>
            </div>
        )
    }
})

class Newsletter extends Component { 
    constructor() {
        super()
        this.state = { 
                        email: "", 
                        registered: false,
        }
    }

    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    renderForm() {
        return (
            <div className="start-page__section-4">
                <label className="news-letter-title">Be the first to find out the latest news, events and product updates from Einride</label>
                <form key="form-key" onSubmit={this.submit.bind(this)}>
                    <BasicInputBox valChange={this.emailChange.bind(this)}
                                    val={this.state.email}/>
                    <button className="btn"> Get newsletter</button>
                </form>
            </div>
        )
    }

    renderThanks() {
        return (
            <div key="thanks-key" className="newsletter-input news-letter-title thank-you">Thank you! We will keep you posted!</div>
        )
    }

    render() {
        return (
            <div className="newsletter-signup">
                <ReactCSSTransitionReplace transitionName="fade-wait"
                                            transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {this.state.registered ? this.renderThanks() : this.renderForm()}
                </ReactCSSTransitionReplace>
            </div>    
        )    
    }

    submit(e) {
        e.preventDefault();
        const url = window.location.protocol + '//einride.eu/____formmail/1/';
        const self = this;
        const formData = new FormData();
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
            self.setState({registered: true})
        }).catch(function (err) {
            // Error :(
            console.error("Failed to sign up for newsletter", err)
        })
        return false;
    }

}

export default Newsletter
import React, {Component} from 'react'
import {Link} from 'react-router';

class SecondHeader extends Component { 
    render() {
        return (
            <div className="secondheader__container">
                <Link activeClassName='is-active' className="secondheader__item" to="/product">The T-pod</Link>
                <Link activeClassName='is-active' className="secondheader__item" to="/about">The team</Link>
                <Link activeClassName='is-active' className="secondheader__item" to="/pressmaterial">Press Material</Link>
            </div>
        )
    }    
}

export default SecondHeader
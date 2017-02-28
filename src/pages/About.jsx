import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class About extends React.Component {

  render() {

    return (
        <div>
        <div className="wrapper">
        <div className="second-header">
            <Header />
            <div className="container">
                <div className="col-md-12">
                    <h3 className="main-title">
                        About Einride
                    </h3>
                </div>
                <div className="col-md-7">
                    <div className="">
                        <h1 className="article-title">Our goal is to re-new the way we think about environment for a more sustainible world.</h1>
                        <div className="main-text">
                        Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to 
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world.
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-1">
                    <div>
                    <h4 className="side-title">Press</h4>
                    <ul className="side-info">
                        <li>Phone: <a>+46 738 232</a></li>
                        <li>Email: <a>info@einride.eu</a></li>
                        <li className="side-info__email"><a>www.einride.eu</a></li>
                    </ul>
                    <h4 className="side-title">Contact</h4>
                    <ul className="side-info">
                        <li>Phone: <a>+46 738 232</a></li>
                        <li>Email: <a>info@einride.eu</a></li>
                        <li className="side-info__email"><a>www.einride.eu</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default About;

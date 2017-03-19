import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

class Investor extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="container page-section">
                        <div className="col-md-12">
                            <h3 className="main-title">
                                Investor relations
                            </h3>
                        </div>
                        <div className="col-md-12">
                            <div className="">
                                <h1 className="article-title">Our goal is to re-new the way we think about environment for a more sustainible world.</h1>
                                <div className="main-text">
                                Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to 
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                                environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world. Our goal is to re-new the way we think about environment for a more sustainible world.
                                </div>
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

export default Investor;

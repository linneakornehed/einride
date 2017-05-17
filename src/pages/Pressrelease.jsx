import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class Contact extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="page-section">
                        <div className="press-release">
                            <div className="header-section">
                                <h1 className="main-title press-release__title">Press release</h1>
                                <div className="press-release__date">6 april 2017</div>
                            </div>
                        </div>
                        <div className="start-page__section-1">
                            <div className="press-release__press-title">
                                Einride to change the future of transport with world’s first sustainable self-driving ‘T-pod’
                            </div>
                            <div className="press-release__bread">
                                <div className="press-release__regular">
                                    <div className="press-release__italic">
                                        Swedish transport specialists reinvent the wheel with an entire new transport system
                                    </div>
                                 </div>
                                <div className="press-release__regular">
                                    <b>April 6, 2017 </b>- Today marks the global launch of Einride, the company that will change the modern transportation industry. Einride has created a technologically advanced system including the world’s first ‘T-pod’ which will change the future of the industry and improve the sustainability of mankind.
                                </div>
                                <div className="press-release__regular">
                                    The ‘T-pod’ is an electric, self-driving vehicle that can be remotely controlled by drivers, set for prototype testing in 2017 followed by international distribution. In addition to the T-pod, the Swedish company is developing a remote driving system, charging stations and an infrastructure that will make the system the most pioneering of its kind.
                                </div>
                                <div className="press-release__regular">
                                    Einride’s launch marks a global transition from heavy, noisy trucks with monstrous emissions and bad working conditions to emission-free, noise reduced trucks that allow workers to operate on a standard schedule closer to home.
                                </div>
                                <div className="press-release__regular">
                                    The Einride T-pods will start running between the cities of Gothenburg and Helsingborg, Sweden and the first active system will cover a capacity of 2,000,000 pallets per year. That corresponds to 400,000 passenger cars on the same route. Even better, all of this will run with few to no emissions.
                                </div>
                                <div className="press-release__regular">
                                    Filip Lilja, COO at Einride, comments: 
                                    <div className="press-release__italic">“Einride is transforming the existing transport chain from the ground up. The big companies behind long haul trucks keep building bigger trucks to increase efficiency, which ultimately means even more emissions. We are changing that by creating a secure solution that is, not only cost effective, but dramatically minimizes the negative environmental impact of the transportation industry.”</div>
                                </div>
                                <div className="press-release__regular">
                                    The Einride system doesn’t only benefit the environment but also improves road safety, creates new jobs and provides more cost-efficient transports for purchasers. A ‘T-pod’ is the height of efficiency; personnel don’t have to stand by as it charges or spend an excess of time away from family and friends, and overall client logistics will be more flexible.
                                </div>
                                <div className="press-release__regular">
                                    Robert Falck, CEO of Einride, continues:  <div className="press-release__italic">“Our vision is to enhance the lives of all people through the delivery of a global, impact-positive supply chain infrastructure. We don’t believe our work is done when we’ve achieved carbon neutrality. Our design process is driven by our goal to have a net positive impact – whether that’s improving the lives of transport workers or reducing road traffic accidents, every element of our system aims to have a measurable positive impact on the planet.”</div>
                                </div>
                                <div className="press-release__regular press-release__extra-space">
                                    At the time of writing this, partners and clients have signed contracts at 60 percent of Einride’s capacity. The set goal is an active fleet of 200 T-pods by 2020.
                                </div>
                                <div className="press-release__regular">
                                    <b>T-pod details:</b>
                                </div>
                                <div className="press-release__regular">
                                    Cargo capacity: 15 standard pallets<br />

                                    Weight with full cargo: 20 tons<br />

                                    Length: approximately 7 meters (23 feet)<br />

                                    Battery capacity: 200 kWh energy<br />

                                    Distance on one charge: 200km (124 miles)<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Newsletter />
                </div>
            </div>
        <Footer />
    </div>
    );
  }
}

export default Contact;

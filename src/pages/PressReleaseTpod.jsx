import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';

class PressReleaseTpod extends React.Component {

  render() {

    return (
        <div>
            <div className="wrapper">
                <div className="second-header">
                    <Header />
                    <div className="page-section">
                        <div className="press-release">
                            <div className="header-section">
                                <h1 className="main-title press-release__title">Press release T-pod</h1>
                                <div className="press-release__date">4 July 2017</div>
                            </div>
                        </div>
                        <div className="white-section">
                            <div className="container">
                                <div className="col-md-8 col-md-offset-2">
                                    <div className="press-release__press-title">
                                        The transport vehicle of the future; introducing the T-pod
                                    </div>
                                    <div className="press-release__bread">
                                        <div className="press-release__regular">
                                            <b>July 5th, 2017, 8:00:</b> The first full-scale prototype transport vehicle of the future has just been unveiled by Swedish tech company, Einride. The ‘T-pod,’ an electric self-driving vehicle that is remotely controlled by drivers, is significantly smaller than today’s heavy trucks and works alongside its innovative charging stations and pioneering infrastructure.
                                            Cargo capacity: 15 standard pallets<br /><br />
                                            The new transport system can reduce carbon dioxide emissions from freight transport in Sweden by up to 60% by 2030.
                                            <br /><br />
                                            Einride was founded with the aim of creating a sustainable transport system to help achieve Sweden's environmental goals and has been planning the T-pod system for over a year. As well as benefiting the environment, the Einride system also improves road safety, creates new jobs and provides more cost-efficient transports for purchasers
                                            <br /><br />
                                            The T-pod is about 23 feet long and has an operating weight of 20 tons. It is controlled by an operator, which provides the advantage of human flexibility and decision-making, but it also has the ability to take advantage of a self-driving system.
                                            <br /><br />
                                            The prototype presented at Almedalen marks a major step towards Einride's ambition to deliver a complete transport system between Gothenburg-Helsingborg by 2020. This transport system will involve 200 T-pods with associated charging stations on the route, which means carbon dioxide-free and cost-effective transportation to customers when it’s completed.
                                            <br /><br />
                                            To date, Einride has already filled 60% of the total 200 T-pods that will travel between Gothenburg and Helsingborg. T-pod’s first route will have a capacity of up to 2,000,000 pallets per year. This saves the equivalent Co2 emissions of 400,000 passenger cars travelling the same distance. The company is currently exploring the potential of expanding the route earlier than expected, due to overwhelming interest from potential and signed clients.
                                            <br /><br />
                                            Robert Falck, CEO of Einride says: 
                                            <div className="press-release__italic">
                                            "Our mission is to push the dial towards a sustainable future, starting with an impact positive transportation system. The world’s best tech and transport brains have been working on the T-pod structure for over a year and so it was overwhelming to see the positive response and support received from both customers and partners, when we finally unveiled it at Almedalen”.
                                            <br /><br />
                                            “We’re now at a crucial time for not only the Einride business, but for the future of transport. Through technology we have been able to create a system for the future, but it involves bravery and dedication from people the world over, to accept that change is also their responsibility and put the T-pod system into practice. Einride is committed to making a positive impact on the planet, the T-pod is just the start, but we cannot and should not, do it alone.”
                                            </div>
                                            <br />
                                            <b>Information about the T-pod:</b><br />
                                            Load capacity: 15 standard pallets (0.8x1.2m)<br />
                                            Weight at full load: 20 tons<br />
                                            Length: approximately 7 meters long (23 feet)<br />
                                            Battery capacity: 200 kWh of energy<br />
                                            Driving distance of a charge: 200km (approximately 124 miles)<br />
                                        </div>
                                    </div>        
                                </div>
                            </div>
                        </div>
                        <div className="start-page__video">
                            <div className="video__conatiner">
                                <iframe src="https://player.vimeo.com/video/224164698" 
                                        width="100%" 
                                        height="100%" 
                                        frameborder="0" 
                                        webkitAllowFullScreen mozallowfullscreen allowFullScreen>
                                </iframe>
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

export default PressReleaseTpod;

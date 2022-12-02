import React from 'react'
import SEO from "../common/SEO";
// import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";

const AboutUs = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                {/* <HeaderTopNews /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/about/about.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <div>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">About the ACM Organization.</span></h3>
                                    </div>
                                    <h1 className="title display-one">Supporting Tomorrow’s Problem Solvers Today.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">About ACM</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">The Association for Computing Machinery is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. ACM is a non-profit professional membership group, claiming nearly 100,000 student and professional members as of 2019. ACM has fostered growth in the computing community through its more than 180 professional and more than 680 student chapters worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            
                        <div className="col-lg-6">
                                <p className="mb--10">ACM IOIT Student Chapter was founded on 2019, with a vision to carry forward ACM’s international intentions on a root level at AISSMS’ Institute of Information Technology. The motive behind starting this Student Chapter was to instil an intrigue and passion for learning and innovation in technology, among students.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">    ACM IOIT Student Chapter</h3>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">More About College</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <p className="mb--10">Located at the heart of Pune city, AISSMS IOIT was established in August 1999. The college has been a prime engineering institute of the city for the past decade. With good infrastructural facilities, the institute has enhanced the teaching-learning experience by providing students greater resources, contact with industries and academia, employment opportunities and internships, etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
                

                
                <AboutFour image="./images/about/AboutVideo.jpg" />
                
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area pb--100">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

            






                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;

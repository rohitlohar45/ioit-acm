import React from 'react';
import ContactForm from "./ContactForm";
// import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p><a href="tel:+91 (020) 26057983">+91 (020) 26057983</a></p>
                                        <p><a href="tel:+91 (020) 26057636">+91 (020) 26057636</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address</h4> 
                                        <p><a href="mailto:support@ioit.acm.org">support@ioit.acm.org</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>AISSMS IOIT ACM Student Chapter. RB Motilal Kennedy Road, <br />  near RTO, Sangamvadi, Pune-411001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
            </div>
        </>
    )
}
export default ContactOne;
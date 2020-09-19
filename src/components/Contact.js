import React from 'react'
import overlay from "../img/overlay-bg.jpg"

 function Contact() {
    return (
        <section className="paralax-mf footer-paralax bg-image route intro route bg-image" style={{ backgroundImage: `url(${overlay})` }}>
            <div className="overlay-mf pt-4"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact-mf">
                            <div id="contact" className="box-shadow-full">
                                <div className="row">
                                    {/* <div className="col-md-6">
                                    <div className="title-box-2">
                                        <h5 className="title-left">
                                            Send Message Us
                                        </h5>
                                    </div>
                                    <div>
                                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                                        <div className="validate"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-center mb-3">
                                                    <div className="loading">Loading</div>
                                                    <div className="error-message"></div>
                                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                                    <div className="col-md-12">
                                        <div className="title-box-2 pt-4 pt-md-0">
                                            <h5 className="title-left">
                                                Get in Touch
                                        </h5>
                                        </div>
                                        <div className="more-info">
                                            <p className="lead text-secondary">
                                                You can get in touch via phone, email or any of my social media links below
                                        </p>
                                            <ul className="list-ico text-secondary">
                                                <li><span className="ion-ios-location"></span> Iyanoworo, Oworonshoki Lagos, Nigeria. 104221</li>
                                                <li><span className="ion-ios-telephone"></span> +234 8136293752</li>
                                                <li><span className="ion-email"></span>otokinaodafe@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="socials">
                                            <ul>
                                                <li><a href="https://facebook.com/godwin.odafe" target="_blank"><span className="ico-circle"><i className="ion-social-facebook"></i></span></a></li>
                                                <li><a href="https://www.linkedin.com/in/godwin-otokina-631775161/" target="_blank"><span className="ico-circle"><i className="ion-social-linkedin"></i></span></a></li>
                                                <li><a href="https://twitter.com/GodwinOtokina" target="_blank"><span className="ico-circle"><i className="ion-social-twitter"></i></span></a></li>
                                                <li><a href="https://www.instagram.com/_wincodes/" target="_blank"><span className="ico-circle"><i className="ion-social-instagram"></i></span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

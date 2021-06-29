import React from "react";
import overlay from "../img/overlay-bg.jpg";

function Contact() {
  return (
    <section
      className="paralax-mf footer-paralax bg-image route intro route bg-image"
      style={{ backgroundImage: `url(${overlay})` }}
    >
      <div className="overlay-mf pt-4"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  
                  <div className="col-md-12">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead text-secondary">
                        You can get in touch via Phone, Text, Email or any of my
                        Social Media Accounts below
                      </p>
                      <ul className="list-ico text-secondary">
                        <li>
                          <span className="ion-ios-telephone"></span> +234
                          8136293752
                        </li>
                        <li>
                          <span className="ion-email"></span>
                          otokinaodafe@gmail.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://facebook.com/godwin.odafe"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-facebook"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/godwin-otokina-631775161/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/GodwinOtokina"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-twitter"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/_wincodes/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="ion-social-instagram"></i>
                            </span>
                          </a>
                        </li>
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
  );
}

export default Contact;

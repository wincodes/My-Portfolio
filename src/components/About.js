import React from 'react'
import testimonial2 from "../img/testimonial-2.jpg"
import overlay from "../img/intro-bg.jpg"

export default function About() {
    return (
        <section id="about" className="paralax-mf footer-paralax bg-image route intro route bg-image" style={{ backgroundImage: `url(${overlay})` }}>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row text">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src={testimonial2} className="img-fluid rounded b-shadow-a" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info">
                                                <p><span className="title-s">Name: </span> <span>Morgan Freeman</span></p>
                                                <p><span className="title-s">Profile: </span> <span>full stack developer</span></p>
                                                <p><span className="title-s">Email: </span> <span>contact@example.com</span></p>
                                                <p><span className="title-s">Phone: </span> <span>(617) 557-0089</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skill-mf">
                                        <p className="title-s">Top Skills</p>
                                        <span>HTML</span> <span className="pull-right">95%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>CSS3</span> <span className="pull-right">85%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>PHP</span> <span className="pull-right">90%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="about-me pt-4 pt-md-0">
                                        <div className="title-box-2">
                                            <h5 className="title-left">
                                                About me
                                            </h5>
                                        </div>
                                        <p className="lead text-secondary">
                                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id
                                            imperdiet et, porttitor
                                            at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla
                                            porttitor accumsan tincidunt.
                                        </p>
                                        <p className="lead text-secondary">
                                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis
                                            porttitor volutpat. Vestibulum
                                            ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.
                                        </p>
                                        <p className="lead text-secondary">
                                            Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                                            Nulla porttitor accumsan
                                            tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                        </p>
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

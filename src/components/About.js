import React from "react";
import overlay from "../img/intro-bg.jpg";

import Skills from "./Skills";
import godwinBeach from "../img/godwin-beach.png";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="paralax-mf footer-paralax bg-image route intro route bg-image"
        style={{ backgroundImage: `url(${overlay})` }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row text">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img
                            src={godwinBeach}
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info text-secondary">
                          <p>
                            <span className="title-s">Name: </span>{" "}
                            <span>Godwin Odafe Otokina</span>
                          </p>
                          <p>
                            <span className="title-s">Profile: </span>{" "}
                            <span>Full Stack Web Developer</span>
                          </p>
                          <p>
                            <span className="title-s">Email: </span>{" "}
                            <span>otokinaodafe@gmail.com</span>
                          </p>
                          <p>
                            <span className="title-s">Phone: </span>{" "}
                            <span>+234 8136293752</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Top Skills</p>
                      <span>HTML</span> <span className="pull-right">95%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>PHP</span> <span className="pull-right">70%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me </h5>
                      </div>
                      <p className="lead text-secondary">
                        Software Developer with about 4 Years of
                        Experience in Designing, Developing, Deploying and Maintaining Full
                        Stack Web Applications. I have a Firm understanding of the entire software development lifecycle.
                        I also have Experiece Leading a Team
                      </p>
                      <hr />
                      <p className="lead text-secondary">
                        <h6>Recent Work Experiences</h6>
                        Team Lead, Vas Applications at{" "}
                        <strong>
                          <i>Itex Integrated Services </i>{" "}
                        </strong>{" "}
                        <br />
                        Full Stack Devevloper at{" "}
                        <strong>
                          <i>Demz Ananytis </i>
                        </strong>{" "}
                        <br />
                        Software Devevloper at{" "}
                        <strong>
                          <i>Ikooba Technologies </i>
                        </strong>
                      </p>

                      <p className="lead text-secondary">
                        <h6>Educational Qualifications</h6>
                        BSc Chemistry |{" "}
                        <strong>
                          <i>University of Benin </i>
                        </strong>{" "}
                        | <em>2011 - 2015</em> <br />
                        Diploma in Web Development |{" "}
                        <strong>
                          <i>Open Classrooms </i>
                        </strong>{" "}
                        | <em>Jan 2020 - Present</em> <br />
                      </p>

                      <div className="py-3">
                          <button className="btn btn-info"> Download My Resume</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </div>
  );
};

export default About;

import React from 'react'
import overlay from "../img/overlay-bg.jpg"

export default function Skills() {
    return (
        <section id="service" className="services-mf pt-5 route" style={{ backgroundImage: `url(${overlay})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box text-center">
                      <h3 className="title-a">
                        Skills
                      </h3>
                      <p className="subtitle-a">
                        My Skills are Listed Below.
                      </p>
                      <div className="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-monitor"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Frontend Web Development</h2>
                        <p className="s-description text-center">
                          I am a very Experienced Frontend Web Developer. I have mastered the Frontend Web Technologies:
                           HTML5, CSS3 and Javascript. I am also advanced in the following Frameworks/Tools
                          React.js, Vue.js, Angular and Jquery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-code-working"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Backend Web Development</h2>
                        <p className="s-description text-center">
                          I am a Well Established Backend Developer. Having worked with backend technonogies 
                          for up to 5 years. I am very Experienced with Node.js and Php with Laravel Framework.
                          I also have solid experience with C# and .Net Core as well as Basic Java.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-cloud"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Database & Storage Administration</h2>
                        <p className="s-description text-center">
                          I have Sound Experience working with Databases and Storage Technologies which includes
                          Mysql, Postgres, MSSQL, Mongo Db, Redis, Firebase and Firestore. Also Experienced in 
                          writing Complex and Advanced Sql Queries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-android-phone-portrait"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Moble Application Development</h2>
                        <p className="s-description text-center">
                          I Develop Cross Platform Native Mobile Applications for Iphones (IOS) and Android Phones,
                          Using Techonoogies like React Native and Ionic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-disc"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Server Administration</h2>
                        <p className="s-description text-center">
                          I am also very Exprienced in Linux Server Administration, Deploying and Managing 
                          Apps on Linux Servers.I have worked with Apache, Nginx, Node, MySql, Postgres, Redis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-stats-bars"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">CI/CD, Version Contol and Dev Ops</h2>
                        <p className="s-description text-center">
                          I have sound Experience with Continuous Integration/Deployment (Travis-CI),
                          Version Control (Git) and Dev Ops (Docker). <br />
                          <a href="https://github.com/wincodes" target="_blank" className="text-danger">Visit My Github Repo</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    )
}

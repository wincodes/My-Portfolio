import React from "react";
import overlay from "../img/overlay-bg.jpg";

const Skills = () => {
  return (
    <section
      id="service"
      className="services-mf pt-5 route"
      style={{ backgroundImage: `url(${overlay})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Skills</h3>
              <p className="subtitle-a">Tech Skills.</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-monitor"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Frontend Web Development</h2>
                <p className="s-description text-center">
                  I'm an Expert Frontend Web Developer. I have
                  mastered the Frontend Web Technologies: HTML5, CSS3 and
                  Javascript. I am also advanced in these
                  Frameworks/Tools React.js and Vue.js.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-code-working"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Backend Web Development</h2>
                <p className="s-description text-center">
                  I am also a Well Established Backend Developer. I have solid Experienced
                  with Node.js and Express also with Php and Laravel Framework. I also have intermediate 
                  knowledge in C# and .Net Core.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-cloud"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Database & Storage Administration</h2>
                <p className="s-description text-center">
                  I have Sound Experience working with Databases and Storage
                  Technologies Including Mysql, Postgres, Mongo Db,
                  Redis, Firebase and Firestore. Also Experienced in writing
                  Complex and Advanced Sql Queries.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-disc"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">Server Administration</h2>
                <p className="s-description text-center">
                  I am also very Exprienced in Linux Server Administration,
                  Deploying and Managing Apps on Linux Servers. Working with Technologies like
                  Apache, Nginx, Node (Npm, Pm2), Db (MySql, Postgres, MongoDB).
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-box">
              <div className="service-ico">
                <span className="ico-circle">
                  <i className="ion-stats-bars"></i>
                </span>
              </div>
              <div className="service-content">
                <h2 className="s-title">CI/CD, Version Contol and Dev Ops</h2>
                <p className="s-description text-center">
                  I have sound Experience with Continuous Integration/Deployment
                  (Travis-CI), Version Control (Git) and Dev Ops (Docker).{" "}
                  <br />
                  <a
                    href="https://github.com/wincodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger"
                  >
                    Visit My Github Repo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

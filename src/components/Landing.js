import React from 'react'


import introBg from "../img/counters-bg.jpg"
import oneport from "../img/oneport.png"
import kanban from "../img/kanban.png"
import medicalconnect from "../img/medicalconnect.png"
import silos from "../img/silos.png"
import teamwork from "../img/teamwork.png"

import godwinBeach from "../img/godwin-beach.png"
import godwin1 from "../img/godwin-1.jpg"
import godwin2 from "../img/godwin-2.jpg"

import Skills from "./Skills"

function Landing () {
    return (
      <div>

        <div id="home" className="intro route bg-image" style={{ backgroundImage: `url(${introBg})` }}>
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                {/* <p className="display-6 color-d">Hello, world!</p> */}
                <h1 className="intro-title mb-4">Godwin Odafe Otokina</h1>
                <p className="intro-subtitle"><small >Full Stack Web and Mobile App Developer</small></p>
                {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
              </div>
            </div>
          </div>
        </div>

        <main id="main">

          <Skills />

          {/* <!-- ======= Blog Section ======= --> */}
          <section id="blog" className="blog-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                      </h3>
                    <p className="subtitle-a">
                      Some Projects I have Worked On.
                      </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="https://medicalconnect.netlify.app/" target="_blank"><img src={medicalconnect} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h3 className="category">Medical Connect</h3>
                        </div>
                      </div>
                      <h3 className="card-title text-center">Medical Connect</h3>
                      <p className="card-description">
                        A social Media Application for medical workers to Connect and share Ideas.
                        Technologies used are Node, Express, React and Mongo db.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="https://teamwork-frontend.netlify.app/" target="_blank"><img src={teamwork} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h3 className="category">Team Work</h3>
                        </div>
                      </div>
                      <h3 className="card-title text-center">Team Work</h3>
                      <p className="card-description">
                        A DevC Training With Andela project for Employees of an organization to share Gif Images and articles,
                        Technologies used are Node, Express, React and Postgres.
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="https://silos-app.netlify.app/" target="_blank"><img src={silos} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h3 className="category">Silos</h3>
                        </div>
                      </div>
                      <h3 className="card-title text-center">Silos</h3>
                      <p className="card-description">
                        A project that aims to connect small scale food producers to a larger market through an
                        eCommerce market place, Technologies used are Node, Express, React and Postgres.
                        </p>
                    </div>
                  </div>
                </div>
              
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="https://godwin-kanban-test.netlify.app/" target="_blank"><img src={kanban} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h3 className="category">Kanban Dashboard</h3>
                        </div>
                      </div>
                      <h3 className="card-title text-center">Kanban Dashboard</h3>
                      <p className="card-description">
                        This is a Kanban Project Management Dashboard for web Fx. Built with React, React Hooks and Firebase
                        </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-blog">
                    <div className="card-img">
                      <a href="https://app.oneport365.com/" target="_blank"><img src={oneport} alt="" className="img-fluid" /></a>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h3 className="category">Oneport 365</h3>
                        </div>
                      </div>
                      <h3 className="card-title text-center">Oneport 365</h3>
                      <p className="card-description">
                        This is a platform designed to take care of all processes involved in Exporting goods from one country or continent to another.
                        Technologies used are Node, Express, Vue.js and Mongo db.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Blog Section --> */}

          {/* <!-- ======= Portfolio Section ======= --> */}
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      My Picture Gallery
                      </h3>
                    <p className="subtitle-a">
                      Just Some Cool Pictures of Mine.
                      </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={godwinBeach} data-gall="portfolioGallery" className="venobox">
                      <div className="work-img">
                        <img src={godwinBeach} alt="" className="img-fluid" />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">On the Beach</h2>
                          <div className="w-more">
                            <span className="w-date">Aug. 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={godwin1} data-gall="portfolioGallery" className="venobox">
                      <div className="work-img">
                        <img src={godwin1} alt="" className="img-fluid" />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">For my Birthday</h2>
                          <div className="w-more">
                            <span className="w-date">22 Aug. 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="work-box">
                    <a href={godwin2} data-gall="portfolioGallery" className="venobox">
                      <div className="work-img">
                        <img src={godwin2} alt="" className="img-fluid" />
                      </div>
                    </a>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Birthday Picture 2</h2>
                          <div className="w-more">
                            <span className="w-date">22 Aug. 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
         

        </main>
      </div>
    )
}

export default Landing

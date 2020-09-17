import React, { Component } from 'react'


import introBg from "../img/intro-bg.jpg"
import work1 from "../img/work-1.jpg"
import work2 from "../img/work-2.jpg"
import work3 from "../img/work-3.jpg"
import work4 from "../img/work-4.jpg"
import work5 from "../img/work-5.jpg"
import work6 from "../img/work-6.jpg"
import post1 from "../img/post-1.jpg"
import post2 from "../img/post-2.jpg"
import post3 from "../img/post-3.jpg"
import testimonial2 from "../img/testimonial-2.jpg"
import overlay from "../img/overlay-bg.jpg"

class Landing extends Component {
    render() {
        return (
            <div>

            <div id="home" className="intro route bg-image" style={{ backgroundImage: `url(${introBg})` }}>
                <div className="overlay-itro"></div>
                <div className="intro-content display-table">
                    <div className="table-cell">
                        <div className="container">
                            {/* <p className="display-6 color-d">Hello, world!</p> */}
                            <h1 className="intro-title mb-4">Godwin Odafe Otokina</h1>
                            <p className="intro-subtitle"><small >I am a Full Stack Web and Mobile App Developer</small></p>
                            {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                        </div>
                    </div>
                </div>
            </div>

            <main id="main">

            <section id="service" className="services-mf pt-5 route" style={{ backgroundImage: `url(${overlay})` }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title-box text-center">
                      <h3 className="title-a">
                        Skills
                      </h3>
                      <p className="subtitle-a">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
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
                        <h2 className="s-title">Web Design</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
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
                        <h2 className="s-title">Web Development</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-camera"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Photography</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
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
                        <h2 className="s-title">Responsive Design</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-box">
                      <div className="service-ico">
                        <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                      </div>
                      <div className="service-content">
                        <h2 className="s-title">Graphic Design</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
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
                        <h2 className="s-title">Marketing Services</h2>
                        <p className="s-description text-center">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                          provident vitae! Magni
                          tempora perferendis eum non provident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- End Services Section --> */}

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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card card-blog">
                      <div className="card-img">
                        <a href="blog-single.html"><img src={post1} alt="" className="img-fluid" /></a>
                      </div>
                      <div className="card-body">
                        <div className="card-category-box">
                          <div className="card-category">
                            <h6 className="category">Travel</h6>
                          </div>
                        </div>
                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                        <p className="card-description">
                          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                          a pellentesque nec,
                          egestas non nisi.
                        </p>
                      </div>
                      <div className="card-footer">
                        <div className="post-author">
                          <a href="#">
                            <img src={testimonial2} alt="" className="avatar rounded-circle" />
                            <span className="author">Morgan Freeman</span>
                          </a>
                        </div>
                        <div className="post-date">
                          <span className="ion-ios-clock-outline"></span> 10 min
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-blog">
                      <div className="card-img">
                        <a href="blog-single.html"><img src={post2} alt="" className="img-fluid" /></a>
                      </div>
                      <div className="card-body">
                        <div className="card-category-box">
                          <div className="card-category">
                            <h6 className="category">Web Design</h6>
                          </div>
                        </div>
                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                        <p className="card-description">
                          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                          a pellentesque nec,
                          egestas non nisi.
                        </p>
                      </div>
                      <div className="card-footer">
                        <div className="post-author">
                          <a href="#">
                            <img src={testimonial2} alt="" className="avatar rounded-circle" />
                            <span className="author">Morgan Freeman</span>
                          </a>
                        </div>
                        <div className="post-date">
                          <span className="ion-ios-clock-outline"></span> 10 min
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card card-blog">
                      <div className="card-img">
                        <a href="blog-single.html"><img src={post3} alt="" className="img-fluid" /></a>
                      </div>
                      <div className="card-body">
                        <div className="card-category-box">
                          <div className="card-category">
                            <h6 className="category">Web Design</h6>
                          </div>
                        </div>
                        <h3 className="card-title"><a href="blog-single.html">See more ideas about Travel</a></h3>
                        <p className="card-description">
                          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis
                          a pellentesque nec,
                          egestas non nisi.
                        </p>
                      </div>
                      <div className="card-footer">
                        <div className="post-author">
                          <a href="#">
                            <img src={testimonial2} alt="" className="avatar rounded-circle" />
                            <span className="author">Morgan Freeman</span>
                          </a>
                        </div>
                        <div className="post-date">
                          <span className="ion-ios-clock-outline"></span> 10 min
                        </div>
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
                        Gallery
                      </h3>
                      <p className="subtitle-a">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      </p>
                      <div className="line-mf"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work1} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work1} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Lorem impsum dolor</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work2} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work2} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Loreda Cuno Nere</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work3} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work3} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Mavrito Lana Dere</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work4} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work4} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Bindo Laro Cado</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work5} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work5} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Studio Lena Mado</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="work-box">
                      <a href={work6} data-gall="portfolioGallery" className="venobox">
                        <div className="work-img">
                          <img src={work6} alt="" className="img-fluid" />
                        </div>
                      </a>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Studio Big Bang</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                </div>
              </div>
            </section>
            {/* <!-- End Portfolio Section --> */}
        
            {/* <!-- ======= Testimonials Section ======= --> */}
            {/* <div className="testimonials paralax-mf bg-image" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
              <div className="overlay-mf"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div id="testimonial-mf" className="owl-carousel owl-theme">
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src={testimonial2} alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Xavi Alonso</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                          <span className="comit"><i className="fa fa-quote-right"></i></span>
                        </div>
                      </div>
                      <div className="testimonial-box">
                        <div className="author-test">
                          <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a" />
                          <span className="author">Marta Socrate</span>
                        </div>
                        <div className="content-test">
                          <p className="description lead">
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                          </p>
                          <span className="comit"><i className="fa fa-quote-right"></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- End Testimonials Section --> */}
        
          </main>
            </div>
        )
    }
}

export default Landing

import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

export default function About() {

  const [vision, setVision] = useState(true);
  const [activebtn, setActivebtn] = useState('active-btn');
  const [missionactivebtn, setMisionbtn] = useState();


  return (
    <>
      <>
      
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  .page-title:before {\n    position: absolute;\n    content: '';\n    background: #06323bd4;\n}\n  "
          }}
        />
        {/* page wrapper */}
        {/* Preloader */}

        {/* search-popup end */}
        {/* Mobile Menu  */}

        <section
          className="page-title centred"
          style={{
            backgroundImage: "url(assets/images/myimages/gallery/photo.png)",
            backgroundPosition: "center"

          }}
        >
          <div className="auto-container">
            <div className="content-box clearfix">
              <h1 style={{ color: "#fff" }}>About US</h1>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/" style={{ color: "#fff" }}>Home</Link>
                </li>
                <li style={{ color: "#fff" }}>About US</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="about-style-two mt-5 ">
          <div
            className="pattern-layer"

          />
          <div className="auto-container pb-5">
            <div className="row clearfix">
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div id="content_block_three">
                  <div className="content-box">
                    <div className="sec-title style-two">
                      {/* <h5>About Stock Brain</h5> */}
                      <h2>Welcome To <span style={{ color: "#e35728", fontFamily: "Signika, sans-serif" }}>Stock <span style={{ color: "#034854" }} >Brain</span> </span> </h2>
                    </div>
                    <div className="text">
                      <p>
                        Welcome to Stock Brain, your only destination for to became a pro in stock market. At Stock Brain, we’re dedicated to make stock market education accessible and engaging for everyone. Our platform is designed for individuals with the knowledge and confidence they need to succeed in investing, whether you’re a complete beginner or  experienced

                      </p>
                      <p>
                        We offer a wide range of learning resources that cover all important aspect of stock market investing. From understanding basic concepts like what is stocks and bonds to  advanced level of trading strategies, our educational modules are designed in a way to cater the various levels of expertise. Our interactive tutorials , demo classes and live webinars with our  expertise provide an immersive learning experience in a very easy language and allowing you to grasp complex topics and stay updated with you about what’s happening in the real time market.
                      </p>

                    </div>



                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div id="image_block_two">
                  <div className="image-box">
                    <figure className="image">
                      <img src="assets/images/myimages/about.png" alt="about" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                <div id="image_block_two">
                  <div className="image-box">
                    <figure className="image">
                      <img src="assets/images/myimages/a1.jpg" alt="about" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div id="content_block_three">
                  <div className="content-box">
                    <div className="sec-title style-two">
                      {/* <h5>About Stock Brain</h5> */}

                    </div>
                    <div className="text">
                      <p>
                        At Stock Brain, we tell you the importance of practical knowledge, so we provide tips and tools to help you manage your investments effectively. Our platform includes tools for which you can keep an eye on your portfolio, analyzing company behaviour , market trends and make infomed decisions. and With our stock market glossary, you'll quickly understand and able to learn all the key terms.
                        <br />
                        Join the Stock Brain and became the part of supportive fellow investor and take participation in discussions, share experiences, and seek advice from others experts who share your passion for the stock market. Our goal is to make  a supportive environment where learning and growth go hand in hand.
                        With Stock Brain, you’ll find everything you need to know about the stock market with clear concept  Start your journey with us today and enhance your financial skills under the  expert guidance.

                      </p>

                    </div>
                    <div className="inner-box">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="flaticon-employee-3" />
                            </div>
                            <h5>
                              <Link href="#">Experienced Instructor</Link>
                            </h5>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="flaticon-safe-2" />
                            </div>
                            <h5>
                              <Link href="contact">24/7 Help Support</Link>
                            </h5>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="flaticon-rocket" />
                            </div>
                            <h5>
                              <Link href="#">Live Classes</Link>
                            </h5>

                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                          <div className="single-item">
                            <div className="icon-box">
                              <i className="flaticon-document" />
                            </div>
                            <h5>
                              <Link href="/studymaterial">Free Resourses</Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mission mt-5 mb-5">
          <div className="auto-container">
            <div className="row clearfix">

              <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                <div id="content_block_four">
                  <div className="content-box">
                    <div className="tabs-box">
                      <div className="tab-btn-box">
                        <ul className="tab-btns tab-buttons clearfix">
                          <li className={`${activebtn} tab-btn`} onClick={() => { setVision(true); setActivebtn('active-btn'); setMisionbtn('') }}>
                            Vision
                          </li>
                          <li className={`${missionactivebtn} tab-btn`} onClick={() => { setVision(false); setActivebtn(''); setMisionbtn('active-btn') }}>
                            Mission
                          </li>
                        </ul>
                      </div>
                      <div className="tabsf-content">
                        {vision ? <>
                          <div className="tdab " id="">
                            <div className="content-inner">
                              {/* <h3>Living a Confident Life</h3> */}
                              <p>
                                Our vision is to become the most preferred training institute for stock market with strong orientation towards innovation, technology and real time practical exposure. We aim to enhance your knowledge on the stock market and in turn help you achieve financial freedom
                              </p>
                              <p>
                                At Stock Brain, we combine the latest technology with effective teaching methods to make learning about the stock market both energetic yet effective and practical. We understand that success  in today’s fast-paced financial world needs more than traditional learning. That’s why we use modern tools and techniques that shows the current trends and demand of global markets.
                              </p>
                              <p>Our approach provides the real-world experience through our virtual  training. You’ll have opportunities to practice in simulated trading environments and apply your skills in live market scenarios.</p>
                              {/* <ul className="list-item clearfix">
                                <li>Aliquip ex ea consequat sed duis</li>
                                <li>Irure dolor voluptate velit esse</li>
                                <li>Cillum dolore eu fugiat nulla pariatur</li>
                                <li>Excepteur sint occaecat cupidatat non</li>
                              </ul> */}
                            </div>
                          </div>
                        </>
                          :
                          <>
                            <div className="tfab" id="">
                              <div className="content-inner">
                                {/* <h3>Lpunam</h3> */}
                                <p>
                                  Our mission is to help people understand the complexity of the stock market . We know that the stock market can seem confusing and technical , but it’s important for everyone to learn how it works because it can greatly impact on your personal finances and future financial goals.
                                  We’re here to make your learning about the stock market very easy and approachable  and to educate every Indian about the stock market, demonstrating that it’s not gambling but in reality it is a legit business for earning profits, with the goal of building wealth for India and its people.
                                </p>
                                <p>
                                  Our aim is not just to teach but also to build a supportive community of well informed financial investors. We want to help you to boost your confidence about making investment decisions.
                                </p>
                                {/* <ul className="list-item clearfix">
                                  <li>Aliquip ex ea consequat sed duis</li>
                                  <li>Irure dolor voluptate velit esse</li>
                                  <li>Cillum dolore eu fugiat nulla pariatur</li>
                                  <li>Excepteur sint occaecat cupidatat non</li>
                                </ul> */}
                              </div>
                            </div>
                          </>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 video-column">
                <div id="video_block_one">
                  <div className="video-inner">
                    <figure className="image-box">
                      <img src="assets/images/myimages/about3.avif" alt="about" />
                    </figure>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </>

    </>
  );
}
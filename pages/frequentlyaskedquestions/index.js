import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Link from 'next/link';

export default function Contact() {

  const [hasBorder, setHasBorder] = useState(true);
  const handleClick = () => {
    setHasBorder(prevState => !prevState);
  };

  return (
    <>
     
      <section
        className="page-title centred"
        style={{
          backgroundImage: "url(assets/images/myimages/contactban2.png)"
        }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1>FAQs</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mission mt-5 mb-5">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 video-column">
              <div id="video_block_one">
                <div className="video-inner">
                  <figure className="image-box">
                    <img src="assets/images/myimages/faq.jpg" alt="faq" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div id="content_block_four">
                <div className="faq">
                  <div className="sec-title">
                    <h2>Comprehensive FAQ for Traders</h2>

                  </div>
                  <div className="accordion" id="faqAccordion">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                          <button

                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"

                          >
                            What is Stock Brain?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          Stock Brain is an educational platform dedicated to helping individuals understand and master trading strategies. We provide comprehensive resources, tutorials, and courses on various aspects of trading.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How can I start learning about trading on Stock Brain?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          To start learning about trading on Stock Brain, simply visit our website and you can get a variety of free study material , including notes and books. We recommend starting with our demo class.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Are the courses on Stock Brain free or paid?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          Stock Brain offers a mix of free and paid courses. Our free resources include introductory materials and basic tutorials, while more advanced and specialized courses may require a subscription or one-time payment. We strive to offer valuable content at various price points to accommodate all learners.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingFour">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What types of trading strategies are covered?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          Stock Brain covers a range of trading strategies, including technical analysis, fundamental analysis, day trading, swing trading, and long-term investing. Our resources are designed to help you understand and implement various strategies effectively.
                        </div>
                      </div>
                    </div>


                    <div className="card">
                      <div className="card-header" id="headingFive">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How can I contact Stock Brain for support?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          If you have any questions or need assistance, you can reach our support team through the contact form on our website . Our team is available to help with any issues or queries you may have.
                        </div>
                      </div>
                    </div>


                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <h5 className="mb-0">
                          <button
                            className="btn btn-link collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            How can I stay updated with Stock Brain’s latest news and features?
                          </button>
                        </h5>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#faqAccordion"
                      >
                        <div className="card-body">
                          You can stay updated by subscribing to our newsletter, following us on social media, and checking our blog regularly. We also offer notifications and alerts for important updates and new features.
                        </div>
                      </div>
                    </div>

                    {/* Add more FAQ items here */}
                  </div>




                </div>




              </div>
            </div>


          </div>
        </div>

      </section>
      <br />
      <br />

      <button
        className="scroll-top style-three scroll-to-target"
        data-target="html"
      >
        <span className="fa fa-arrow-up" />
      </button>
      
    </>

  );
}
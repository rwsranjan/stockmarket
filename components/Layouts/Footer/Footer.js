import React, { useState } from 'react';
import validator from 'validator';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { imageCustom } from '@/lib/imageLoader';

export default function Footer() {

  const [emailError, setEmailError] = useState('')
  const [SubscriptionMail, setSubscriptionMail] = useState("");
  const [sname, setSname] = useState("");
  const router = useRouter();

  const [notsubscribe, setNotsubscribe] = useState(true);

  const Subscribed = async () => {
    const response = await fetch(
      '/api/subscriber?' +
      new URLSearchParams({ email: SubscriptionMail, name: sname })
    );
    const res = await response.json();

    if (res.result.status == 200) {
      setNotsubscribe(false);
    } else if (res.result.status == 403) {
      alert('Your email has been registered');
    } else {
      alert('Enter Another Email')
    }
  };

  const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter valid Email!')
    }
  };


  return (
    <>
      {/* main-footer */}
      <section>
        <div className='container'>


          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">

              <div className="carousel-item active">
                <blockquote>


                  <h5>   <i className="bi bi-quote" style={{
                    fontSize: "39px",
                    color: "#e35728"
                  }} />
                    <i>
                      The individual investor should act consistently as an investor and not as a speculator.
                    </i>
                    <i className="bi bi-quote" style={{
                      display: "inline-block", transform: " rotate(180deg)", fontSize: "39px",
                      color: "#e35728"
                    }} /> </h5>
                  <span>Ben Graham</span>



                </blockquote>
              </div>
              <div className="carousel-item ">
                <blockquote>
                  <h5>
                    <i className="bi bi-quote" style={{
                      fontSize: "39px",
                      color: "#e35728"
                    }} />
                    <i>The four most dangerous words in investing are: 'This time it’s different.

                    </i>
                    <i className="bi bi-quote" style={{
                      display: "inline-block", transform: " rotate(180deg)", fontSize: "39px",
                      color: "#e35728"
                    }} />
                  </h5>
                  <span>Sir John Templeton</span>
                </blockquote>
              </div>

              <div className="carousel-item">
                <blockquote>


                  <h5>   <i className="bi bi-quote" style={{
                    fontSize: "39px",
                    color: "#e35728"
                  }} />
                    <i>
                      How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case.

                    </i>
                    <i className="bi bi-quote" style={{
                      display: "inline-block", transform: " rotate(180deg)", fontSize: "39px",
                      color: "#e35728"
                    }} /> </h5>
                  <span>Robert G. Allen</span>



                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote>


                  <h5>   <i className="bi bi-quote" style={{
                    fontSize: "39px",
                    color: "#e35728"
                  }} />
                    <i>
                      Do not save what is left after spending, but spend what is left after saving.

                    </i>
                    <i className="bi bi-quote" style={{
                      display: "inline-block", transform: " rotate(180deg)", fontSize: "39px",
                      color: "#e35728"
                    }} /> </h5>
                  <span> Warren Buffett </span>



                </blockquote>
              </div>
            </div>
            {/* <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </Link >
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </Link > */}
          </div>




        </div>
      </section>



      <footer className="main-footer alternet-3">
        {/* <div className="footer-upper">
          <div className="auto-container">
            <div className="upper-inner clearfix">
              <div className="text pull-left">
                <h2>Do you want to know about us ?</h2>
                <p>
                Join our community today and embark on a transformative journey towards mastering the art of trading with confidence and precision.
                </p>
              </div>
              <div className="btn-box pull-right">
                <Link href="" onClick={()=>router.push('/contact')}>Contact Us</Link>
              </div>
              <Link href="#"></Link >
            </div>
            <Link href="#"></Link >
          </div>
          <Link href="#"></Link >
        </div> */}
        <Link href="#"></Link >
        <div className="footer-top">
          <Link href="#"></Link >
          <div className="auto-container">
            <Link href="#"></Link >
            <div className="widget-section">
              <Link href="#"></Link >
              <div className="row clearfix">
                <Link href="#"></Link >
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <Link href="#"></Link >
                  <div className="footer-widget logo-widget">
                    <Link href="#"></Link >
                    <figure className="footer-logo">
                      <Link href="#" />
                      <Link href="/">
                        <Image
                          height={100} width={200} loader={imageCustom}
                          src="/assets/images/mobile-logo.png"
                          alt="logo"
                        />
                      </Link >
                    </figure>
                    <div className="text">
                      <p>
                        Stock Brain offers a wide range of  educational resources cater to your needs. You'll learn more about risk management, profitable trading strategies, and market patterns with Stock Brain.
                      </p>
                    </div>
                    <ul className="info-list clearfix">
                      {/* <li><i className="fas fa-map-marker-alt"></i>Noida Sector 2</li> */}
                      <li>
                        <i className="fas fa-envelope" />
                        <Link href="mailto:info@stockbrain.in">
                          info@stockbrain.in
                        </Link >
                      </li>
                      <li>
                        <i className="fas fa-headphones" />
                        <Link href="tel:9990799940">9990799940</Link >
                      </li>
                    </ul>
                    <ul className="social-links clearfix">

                      <li>
                        <Link href="https://www.facebook.com/people/Stock-brain/61562645010874/?mibextid=ZbWKwL">
                          <i className="fab fa-facebook-f" />
                        </Link >
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/_stockbrain?igsh=OTJ3dGF4bzB5bGxt">
                          <i className="fab fa-instagram" />
                        </Link >
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/in/stock-brain-4b836531b/">
                          <i className="fab fa-linkedin-in" />
                        </Link >
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget ml-70">
                    <div className="widget-title">
                      <h4>Useful Links</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li>
                          <Link href="/about" >About Us </Link>
                        </li>
                        <li>
                          <Link href="/contact" >Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/blog" >Blogs</Link>
                        </li>
                        <li>
                          <Link href="/privacypolicy" >Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="termsandconditions" >Terms &amp; Conditions</Link>
                        </li>
                        <li><Link href="/book" prefetch={false} >Free Books</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h4>Our Training</h4>
                    </div>
                    <div className="widget-content">
                      <ul className="list clearfix">
                        <li>
                          <Link href='/smarttrader' onClick={() => { router.push("/smarttrader") }}>Paid Training</Link>
                        </li>
                        <li>
                          <Link href="/nism">NISM Series VIII</Link >
                        </li>
                        <li>
                          <Link href="/studymaterial" onClick={() => { router.push("/studymaterial") }} >Free Training</Link>
                        </li>
                        <li>
                          <Link href="/sipcalculator" onClick={() => { router.push("/sipcalculator") }} >SIP Calculator</Link>
                        </li>
                        <li>
                          <Link href="/admin" onClick={() => { router.push("/admin") }} >Office Login</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget newsletter-widget">
                    <div className="widget-title">
                      <h4>Newsletter</h4>
                    </div>
                    <div className="widget-content">
                      <div className="text">
                        <p>
                          For the latest stock market news and financial analysis, visit <Link href="https://www.moneycontrol.com/" target="_blank" rel="noopener noreferrer">Moneycontrol</Link>.
                        </p> <hr />
                        <p>Get inbox for the latest News</p>
                      </div>
                      <form
                        className="newsletter-form"
                      >
                        {notsubscribe ?
                          <>
                            <div className="form-group">
                              <i className="far fa-user" />

                              <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                id='name'
                                onChange={e => { setSname(e.target.value) }}
                                required
                              />

                            </div>
                            <div className="form-group">
                              <i className="far fa-envelope" />

                              <input
                                type="email"
                                placeholder="Enter Your Email"
                                name="subscribe"
                                id="email"
                                required
                                onChange={e => { setSubscriptionMail(e.target.value), validateEmail(e) }} />
                              <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                              }}>{emailError}</span>

                            </div>
                            <div className="form-group message-btn">
                              <button className="theme-btn style-three" type='button' onClick={() => Subscribed()}>
                                subscribe
                              </button>
                            </div>
                          </> : <>
                            <div className="form-group message-btn">
                              <button className="theme-btn style-three" >
                                <strong>Subscribed successfully</strong>{/** {SubscriptionMail} */}<br />
                              </button>
                            </div>
                          </>
                        }
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">

              <p>
                ©2025<Link href="/"> SBIFM</Link > stock brain institute of
                financial market. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}

      {/*Scroll to top*/}
      
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <Link
          href="https://api.whatsapp.com/send?phone=+919990799940&text=Hello"
          className="float"
          target="_blank"
        >
          <i className="fa fa-whatsapp my-float" />
        </Link >
      </>

      {/*  
      this code is working but commented cause of whatsapp button.
      <button
        className="scroll-top style-three scroll-to-target"
        data-target="html"
      >
        <span className="fa fa-arrow-up" />
      </button> 
      */}

      {/* sidebar cart item */}

      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <Link href="#" className="close-side-widget">
                X
              </Link >
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="upper-box">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="assets/images/mobile-logo.png"
                          alt="logo"
                          style={{ width: 260 }}
                        />
                      </Link>
                    </div>
                    <div className="text">
                      <p>
                        Here is a learning platform for becoming a Full time trader
                        and investor in Indian stock Market
                      </p>
                    </div>
                  </div>
                  <div className="side-menu-box">
                    <div className="side-menu">
                      <nav className="menu-box">
                        <div className="menu-outer"></div>
                      </nav>
                    </div>
                  </div>
                  <div className="info-box">
                    <h3>Get in touch</h3>
                    <ul className="info-list clearfix">
                      {/* <li><i className="fas fa-map-marker-alt"></i>Noida Sector 2</li> */}
                      <li>
                        <i className="fas fa-envelope" />
                        <Link href="mailto:info@stockbrain.in">
                          info@stockbrain.in
                        </Link>
                      </li>
                      <li>
                        <i className="fas fa-headphones-alt" />
                        <Link href="tel:+91 999079994">+91 9990799940</Link>
                      </li>
                    </ul>
                    <form>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          required=""
                        />
                        <button type="submit" className="theme-btn style-one">
                          subscribe now
                        </button>
                      </div>
                    </form>

                    <ul className="social-links clearfix">

                      <li>
                        <Link href="https://www.facebook.com/people/Stock-brain/61562645010874/?mibextid=ZbWKwL">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.instagram.com/_stockbrain?igsh=OTJ3dGF4bzB5bGxt">
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/in/stock-brain-4b836531b/">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

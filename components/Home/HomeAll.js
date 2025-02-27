import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import { format } from 'date-fns';
import { imageCustom } from '@/lib/imageLoader';
import PopupBanner from '../PopupBanner/PopupBanner';

export default function Home() {

  const [blogdata, setBlogdata] = useState([]);
  const [blogdatatwo, setBlogdatawo] = useState([]);

  const router = useRouter();

  useEffect(() => {

    FetchBlogData();
  }, []);


  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + '...';
  };

  const FetchBlogData = async () => {
    const response = await fetch('/api/singleBlog');
    const res = await response.json();

    if (res) {
      setBlogdata(res?.result?.blogs_response);
      setBlogdatawo(res?.result?.blogs_response2);

      // console.log(res.result.blogs_response);
    } else {
      alert('Something went wrong');
      router.push('/');
    }
  }
  {/*

  const [isLoading, setIsLoading] = useState(true);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    var email = e.target.value
    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  // console.log(fname, lname, mobile, email);

  useEffect(() => {
    // Check if the form has already been submitted
    const formSubmitted = localStorage.getItem('formSubmitted');
    if (formSubmitted) {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !mobile || !email) {
      alert('Please fill the further details...');
      return false;
    }
    if (emailError) {
      alert('Please Enter valid Email...');
      return false;

    }
    const response = await fetch(
      '/api/ebook_form?' +
      new URLSearchParams({ email: email, firstname: fname, lastname: lname, mobile: mobile })
    );
    const res = await response.json();

    if (res.result.status == 200) {
      alert(res.result.msg);
      localStorage.setItem('formSubmitted', 'true');
    } else if (res.result.status == 403) {
      alert(res.result.msg);
      localStorage.setItem('formSubmitted', 'true');
    } else {
      alert(res.result.msg);
      localStorage.setItem('formSubmitted', 'false');
    }

    setTimeout(() => {
      // Remove the loading screen after form submission
      setIsLoading(false);
    }, 1000);
  };


  const [ebookdata, setEbookdata] = useState([]);

  useEffect(() => {
    const FetchBookData = async () => {
      try {
        const response = await fetch('/api/ebook?' + new URLSearchParams({ typeofbooks: 'published-book-pdf' }));
        const res = await response.json();
  
        if (res) {
          setEbookdata(res.ebook_response);
          //     console.log(res.ebook_response);
        } else {
          console.log('Something went wrong');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
    FetchBookData();
  }, []);

  
 */}


  return (
    <>
      <PopupBanner />
      <main>
        <>
          <section className="banner-section style-four">
            <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
              <div className="slide-item">
                <div
                  className="image-layer"
                  style={{ backgroundImage: "url(assets/images/myimages/gallery/photo2.webp)", objectFit: "cover" }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    <h2>
                      Understanding the
                      <span style={{ color: "#e35728" }}> Ups and Downs </span>
                      <br /> of  Financial Markets
                    </h2>
                    <p>
                      Modern economies cannot function without financial markets, <br /> which provide the efficiency, transparency, and liquidity needed to foster economic growth.
                    </p>

                    <a onClick={() => router.push('/about')} className="theme-btn style-three">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div
                  className="image-layer"
                  style={{ backgroundImage: "url(assets/images/myimages/gallery/p2.webp)", objectFit: "cover" }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    <h2>
                      Master
                      <span style={{ color: "#e35728" }}> The Art </span>
                      <br /> of Investing
                    </h2>

                    <p>
                      Learn how to make smart decisions about where to invest your money. <br /> Understand how the economy works, analyze company behavior <br /> and discover how to grow your wealth through wise investments.


                    </p>

                    <a onClick={() => router.push('/about')} className="theme-btn style-three">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide-item">
                <div
                  className="image-layer"
                  style={{ backgroundImage: "url(assets/images/myimages/gallery/p1.webp)", objectFit: "cover" }}
                />
                <div className="auto-container">
                  <div className="content-box">
                    <h2>
                      Transform Your
                      <span style={{ color: "#e35728" }}> Financial Future </span>
                      <br />with US
                    </h2>
                    <p>
                      In today’s era, financial literacy is fundamental.  <br />We are here to help you make informed financial decisions,  <br />transforming the way you manage your money for the better.


                    </p>
                    <a onClick={() => router.push('/about')} className="theme-btn style-three">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="container wow slideInUp">
            <div className="bigcard">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="cardcontent">
                      <div className="container">
                        <div className="row p-3">
                          <div className="col-md-8">
                            <h2>Experienced Instructor</h2>
                            <p>
                              Having an experienced instructor in a stock market course is invaluable. Their knowledge ensures a thorough understanding of the subject and provides insights from current trading and investing situations.
                            </p>
                            <br />
                            <Link href="/about" className="theme-btn style-three">
                              Learn More
                            </Link>
                          </div>
                          <div className="col-md-4">
                            <div className="image-content">
                              <Image src="assets/images/instructor.jpg" alt="instructor" loader={imageCustom} fill loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="cardcontent">
                      <div className="container">
                        <div className="row p-3">
                          <div className="col-md-8">
                            <h2>Book Library</h2>
                            <p>
                              A book library offers a wide range of literature across many
                              genres and fields, making it a veritable gold mine of
                              information. A library, whether it is located in a private
                              collection, public institution, or educational setting,
                              a library serves several important functions in society.
                            </p>
                            <br />
                            <Link href="/book" className="theme-btn style-three">
                              Learn More
                            </Link>
                          </div>
                          <div className="col-md-4">
                            <div className="image-content">
                              <Image src="assets/images/book.jpg" alt="book" loader={imageCustom} fill loading="lazy" />

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="cardcontent">
                      <div className="container">
                        <div className="row p-3">
                          <div className="col-md-8">
                            <h2>Our Verified P&amp;L</h2>
                            <p>
                              A verified Profit &amp; Loss (P&amp;L) statement is a comprehensive financial report that shows a company’s revenue, expenses, and net profit or loss over a specific period. It reflects the true financial performance of the company.
                            </p>
                            <br />
                            <Link href="/about" className="theme-btn style-three">
                              Learn More
                            </Link>
                          </div>
                          <div className="col-md-4">
                            <div className="image-content">
                              <Image src="assets/images/library.jpg" alt="library" loader={imageCustom} fill loading="lazy" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swipebtn">
                  <button
                    className=""
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                    style={{ cursor: "pointer", width: 30, marginRight: 9 }}
                  >
                    <i className="bi bi-chevron-left" />
                  </button>
                  <button
                    className=""
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                    style={{ cursor: "pointer", width: 30, marginRight: 9 }}
                  >
                    <i className="bi bi-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </section>


          <br />
          <br />
          <br />
          <section className="about-style-two wow slideInUp">
            <div
              className="pattern-layer"
              style={{ backgroundImage: "url(assets/images/shape/shape-1.png)", objectFit: "cover" }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                  <div id="content_block_three">
                    <div className="content-box">
                      <div className="sec-title style-two">
                        <h1 >
                          <span style={{ color: "#e35728", fontFamily: "Signika, sans-serif" }}>Stock <span style={{ color: "#034854" }} >Brain</span> </span>
                          : Master the Markets </h1>
                      </div>
                      <div className="text">
                        <p>
                          We help you become a successful trader and investor in the Indian stock market. Our comprehensive course covers everything you need to know about trading and investing, from basic concepts to advanced strategies. Our mentor, with 5 years of experience at renowned companies like Findoc Investment, Adroit, and Share India, brings valuable insights and practical knowledge to our platform. You’ll benefit from advanced strategies and expert guidance refined through real-world experience. With our resources and support, you’ll learn to make informed decisions confidently and navigate the ups and downs of the real market.

                        </p>
                        <br />
                        <br />
                        <Link href="/about" rel='canonical' className="theme-btn style-three">Read More</Link>
                        {/* <a href="#" className="theme-btn style-three">
                          Read More
                        </a> */}
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 image-column">
                  <div id="image_block_two">
                    <div className="image-box">
                      <figure className="image">
                        <Image src="assets/images/myimages/about.png" alt="about" loader={imageCustom} height={222} width={112} loading="lazy" />

                      </figure>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <>
            {/* service-style-five */}
            <section className="service-style-five bg-color-1 wow slideInUp">
              <div className="auto-container">
                <div className="sec-title style-three centred">
                  {/* <h5>Courses</h5> */}
                  <h2>Stock Market Training Program</h2>
                </div>
                <div className="tabs-content">
                  <div className="tab active-tab" id="tab-1">
                    <div className="row align-items-center clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 image-column">

                        <figure className="image-box">
                          <Image src="assets/images/resource/about-1.png" alt="instructor" loader={imageCustom} height={220} width={112} loading="lazy" />

                        </figure>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                        <div className="content-box ">
                          <h3 style={{ fontWeight: 600, color: "#034854" }}>
                            Be A Smart Trader
                          </h3>
                          <ul className="list-item clearfix">
                            <li>What is the Stock Market and its Functions ?</li>
                            <li>Terminology of the Stock Market</li>
                            <li>How to trade in the Stock Market</li>
                            <li>Trading terminal function</li>
                            <li>What are Cash and Future Markets?</li>
                            <li>What are Derivatives (Future &amp; Option)</li>
                            <li>Option Greek</li>
                            <li>Strategies</li>
                            <li>Practical training in live sessions</li>
                          </ul>
                          <div className='pricing500'>
                            <Image src="assets/images/myimages/pricing5000.png" alt="pricing" loader={imageCustom} height={220} width={221} loading="lazy" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* service-style-five end */}
          </>

          <section className="service-style-four">

            <div className="auto-container text-center">
              <div className="sec-title style-three centred">
                <h5>Our Expertise</h5>
                <h2>What we Offer</h2>

              </div>

              <br />
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/buysell.png" alt="buysell" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Stock Market <br /> Basic
                      </h4>
                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            {/* The stock market is a platform where financial instruments like shares and securities are bought and sold.  */}
                            We provide foundational knowledge to help you understand how the market operates.
                          </p>
                          <Link className='btn learn' href='assets/images/myimages/bookpdf/what_is_share.pdf'>Learn More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/stockmarketadvance.png" alt="stockmarketadvance" loader={imageCustom} height={22} width={22} loading="lazy" />

                      </figure>
                      <h4>
                        Share Market <br /> Advance
                      </h4>

                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Advanced stock market study covers detailed strategies and tools to help you make smart trading and investing choices
                          </p>
                          <button className='learn'  onClick={() => { router.push('/smarttrader') }}>Learn More</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/avancetechnicalanalysis.png" alt="avancetechnicalanalysis" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Advance Technical <br /> Analysis
                      </h4>
                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Advanced technical analysis involves using complex charts and indicators to predict future stock price movements and trends
                          </p>
                          <Link className='btn learn' href='assets/images/myimages/bookpdf/importance_of_200_ema.pdf'>Learn More</Link>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/fundamental.png" alt="fundamental" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Fundamental <br /> Analysis
                      </h4>

                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Fundamental analysis involves evaluating a company's financial health, industry position, and economic factors to determine its stock value
                          </p>
                          <Link className='btn learn' href='assets/images/myimages/bookpdf/FUNDAMENTAL_ANALYSIS.pdf'>Learn More</Link>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/derivative.png" alt="derivative" loader={imageCustom} height={22} width={22} loading="lazy" />

                      </figure>
                      <h4>
                        Derivatives
                      </h4>

                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Derivatives are financial contracts that derive their value from an underlying asset, like stocks or commodities, used for hedging or speculation
                          </p>
                          <button className='learn'>Learn More</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/strategy.png" alt="strategy" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Strategies
                      </h4>
                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Strategies are planned methods used to achieve specific financial goals, such as buying low, selling high, or managing risk in investing
                          </p>
                          <Link className='btn learn' href='assets/images/myimages/bookpdf/Nifty_Banknifty_BTST_Super_Setup.pdf'>Learn More</Link>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/stockmarketlivetraning.png" alt="stockmarketlivetraning" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Stock Market <br /> Live Training
                      </h4>
                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Stock market live training involves real-time learning and practice of trading strategies and market analysis techniques
                          </p>
                          {/* <button className='learn'>Learn More</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                  <div
                    className="service-block-four wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <figure className="icon-box">
                        <Image src="assets/images/myimages/offer/fees.png" alt="fees" loader={imageCustom} height={22} width={22} loading="lazy" />
                      </figure>
                      <h4>
                        Stock Market <br />
                        Training Program
                      </h4>

                      <div className="overlay-box">
                        <div className='overlaycontent'>
                          <p>
                            Learn stock market skills with our expert trainer at a great price. Affordable and valuable education to help you succeed
                          </p>
                          <button className='learn' onClick={() => { router.push('/smarttrader') }}>Learn More</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* news-style-three */}
          <section className="news-style-three">
            <div
              className="pattern-layer"
              style={{ backgroundImage: "url(assets/images/shape/shape-12.png)", objectFit: "cover" }}
            />
            <div className="auto-container">
              <div className="upper-box">
                <div className="title-inner clearfix">
                  <div className="sec-title style-three left pull-left">
                    <h5>Read latest articles</h5>
                    <h2>Market Highlights</h2>

                  </div>
                </div>
                <div className="btn-box">
                  <a href='/blog' className="theme-btn style-three">
                    Our Blogs
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="row clearfix">
                {blogdata &&
                  blogdata.map((bdata, index) => {
                    return (
                      <div className="col-lg-6 col-md-6 col-sm-12 big-column" key={index}>
                        <div className="left-block">
                          <div
                            className="news-block-two fadeInUp animated animated"
                            data-wow-delay="00ms"
                          >
                            <div className="inner-box">
                              <figure className="image-box">
                                <div className="bigblog">
                                  <Image height={0} width={0} src={bdata.main_image} alt={bdata.blog_title} loading="lazy" />
                                </div>
                              </figure>
                              <div className="lower-content">
                                <ul className="post-info">
                                  <li>
                                    By <a href="/">{bdata.author_name}</a>
                                  </li>
                                  <li>{format(new Date(bdata.blog_date), 'dd-MM-yyyy')}</li>
                                </ul>
                                <h3>
                                  <a href="#">
                                    {bdata.blog_title}
                                  </a>
                                </h3>
                                <div className="link">
                                  <a href={`blogdetail/` + bdata.seo_url}>
                                    <i className="fas fa-arrow-right" />
                                    <span>Read More</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                <div className="col-lg-6 col-md-6 col-sm-12 big-column">
                  <div className="right-block">
                    <div className="row clearfix">
                      {blogdata &&
                        blogdatatwo.map((bdata, index) => {
                          return (
                            <div className="col-lg-6 col-md-6 col-sm-12 news-block" key={index}>
                              <div
                                className="news-block-one wow fadeInUp animated animated"
                                data-wow-delay="300ms"
                                data-wow-duration="1500ms"
                                id='myblog'
                              >
                                <div className="inner-box">
                                  <figure className="image-box">
                                    <a href={`blogdetail/` + bdata.seo_url}>
                                      <div className="myimg">
                                        <Image
                                          src={bdata.main_image}
                                          height={0}
                                          width={0}
                                          alt={bdata.blog_title}
                                          loading="lazy"
                                        />
                                      </div>
                                    </a>
                                  </figure>
                                  <div className="lower-content">
                                    <ul className="post-info">
                                      <li>
                                        By <a href="/">{bdata.author_name}</a>
                                      </li>
                                      <li>{format(new Date(bdata.blog_date), 'dd-MM-yyyy')}</li>
                                    </ul>
                                    <h3 className="bloghead">
                                      <a href={`blogdetail/` + bdata.seo_url}>
                                        {bdata.blog_title}
                                      </a>
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: truncateString(bdata.blog_content, 100) }} />
                                    <div className="link">
                                      <a href={`blogdetail/` + bdata.seo_url}>
                                        <i className="fas fa-arrow-right" />
                                        <span>Read More</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* news-style-three end */}
          {/* project-style-two */}

          <section className="project-style-two wow slideInUp">
            <div className="auto-container">
              <div className="upper-box">
                <div className="title-inner clearfix">
                  <div className="sec-title style-three left pull-left">
                    <h5>Books</h5>
                    <h2>Free Study Materials</h2>
                  </div>
                </div>
                <div className="btn-box">
                  <a href="/studymaterial" className="theme-btn style-three">
                    View All
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="project-carousel-2 owl-carousel owl-theme owl-nav-none">
                <div className="project-inner">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/myimages/book/consolidation_chart_pattern.jpg" style={{ height: 460, width: 432 }} loading="lazy"
                        alt="consolidation_chart_pattern" />
                    </figure>
                    <div className="content-box">
                      <h3>Consolidation Chart Pattern</h3>
                      <p>
                        <b>By Stock Brain</b> - In the stock market, a consolidation pattern is a
                        stage where a security's price swings inside a
                        narrow range
                      </p>
                      <a href="assets/images/myimages/bookpdf/consolidation_chart_pattern.pdf">
                        <i className="fas fa-arrow-right" />
                        <span>Download Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/myimages/book/supportandresistance.jpg"
                        alt="supportandresistance"
                        style={{ height: 460, width: 432 }}
                        loading="lazy"
                      />
                    </figure>
                    <div className="content-box">
                      {/* <span>Reminiscences of a Stock Operator</span> */}
                      <h3>Support And Resistance</h3>
                      <p>
                        <b>By Stock Brain</b> - Support is a place where the selling and the trend of the stock might get halt
                        and reverse in the opposite direction from where they come .
                      </p>
                      <a href="assets/images/myimages/bookpdf/SupportandResistance.pdf">
                        <i className="fas fa-arrow-right" />
                        <span>Download Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/myimages/book/continuationpatterns.jpg"
                        alt="continuationpatterns"
                        style={{ height: 460, width: 432 }}
                        loading="lazy"
                      />
                    </figure>
                    <div className="content-box">
                      {/* <span>Taxation Planning</span> */}
                      <h3>Continuation Pattern</h3>
                      <p>
                        <b>By Stock Brain</b> - A continuation pattern is a type of chart pattern
                        that suggests the price movement of a financial
                        instrument
                      </p>
                      <a href="assets/images/myimages/bookpdf/continuouspattern.pdf">
                        <i className="fas fa-arrow-right" />
                        <span>Download Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img
                        src="assets/images/myimages/book/chartpatterns.jpg"
                        alt="chartpatterns"
                        style={{ height: 460, width: 432 }}
                        loading="lazy"
                      />
                    </figure>
                    <div className="content-box">
                      {/* <span>Investment Trading</span> */}
                      <h3>Chart Pattern</h3>
                      <p>
                        <b>By Stock Brain</b> - A chart pattern in financial markets refers to distinctive
                        formations or shapes
                      </p>
                      <a href="assets/images/myimages/bookpdf/chartpatterns.pdf">
                        <i className="fas fa-arrow-right" />
                        <span>Download Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      </main>
    </>
  );
}




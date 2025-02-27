import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from './PopupForm.module.css';
import validator from 'validator';
import Image from 'next/image';
import Link from "next/link";
const imagepath = process.env.PUBLIC_URL;

export default function Book() {

  const [isLoading, setIsLoading] = useState(true);
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const router = useRouter();
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
    FetchBookData();
  }, [router.query]);

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



  return (

    <>
   
      <section
        className="page-title pagetitle2 centred"
        style={{
          backgroundImage: "url(assets/images/myimages/bookban1.jpg)"
        }}
      >
        <div className="auto-container">
          <div className="content-box clearfix">
            <h1 style={{ color: "#fff" }}>Free Trading Books</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href="/" style={{ color: "#fff" }}>Home</Link>
              </li>
              <li>
                <Link style={{ color: "#fff" }} href="/book">Books</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <br />
      <br />

      <section className="feature-style-two">
        <div className="auto-container">
          <div className="row clearfix">
            {ebookdata &&
              ebookdata.map((ebook, index) => {
                return (

                  <div className="col-lg-3 col-md-6 col-sm-12 feature-block mt-3" key={index}>
                    <div
                      className="feature-block-two wow fadeInUp animated animated animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">
                        <figure className="image-box">
                          <Image src={ebook.cover_photo} alt={ebook.book_title} height={0} width={0} />
                        </figure>
                        <div className="overlay-box">
                          <p>
                            {ebook.book_title}
                          </p>
                        </div>
                        <div className="lower-content">
                          <div className="inner">
                            <h4>
                              <Link href={`${imagepath}/${ebook.pdf_file}`}>
                                Download For Free
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      <div>
        {isLoading && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div className={styles.popupContent}>
              <div className={styles.topForm}>
                <div>
                  <h2 className={styles.title}>Download Books</h2>
                  <p>Please fill-up the form below to download the free study material </p>
                </div>
              </div>
              <div className="auto-container mt-3">
                <div
                  className="default-form"
                >
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        className={styles.formInput}
                        name="fname"
                        placeholder="First Name"
                        onChange={e => { setFname(e.target.value) }}
                        required
                      />
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        className={styles.formInput}
                        name="lname"
                        placeholder="Last Name"
                        onChange={e => { setLname(e.target.value) }}
                        required

                      />
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                      <input
                        className={styles.formInput}
                        type="email"
                        placeholder="Enter Your Email"
                        name="subscribe"
                        id="email"
                        required
                        onChange={e => { setEmail(e.target.value), validateEmail(e) }} />
                      <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                      }}>{emailError}</span>


                    </div>
                    <div
                      className="col-lg-12 col-md-6 col-sm-6 form-group"
                      style={{ display: "flex", gap: 4 }}
                    >
                      <input
                        type="number"
                        className={styles.formInput}
                        name="mobile"
                        placeholder="Your Mobile number"
                        onChange={e => { setMobile(e.target.value) }}
                        required />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button
                        className="theme-btn style-one"
                        type="button"
                        name="submit-form"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!isLoading && (
          <div>
          </div>
        )}

      </div>

    </>
  );
}
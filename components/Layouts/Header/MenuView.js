import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { imageCustom } from '@/lib/imageLoader';
import styles from '@/components/CustomForm.module.css';

export default function MenuView() {
  const [regId, setRegId] = useState();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    age: '',
    email: '',
    qualification: '',
    address: '',
    profession: '',
    experience: '',
    learningMode: '',
  });

  const [isRegistering, setIsRegistering] = useState(false);
  const [emailError, setEmailError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (emailError) {
        alert('Please fix the errors before submitting.');
        return;
      }
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();

      if (res) {
        alert(res?.result?.msg);
        router.reload();
      } else {
        alert('Registration failed!');
      }
    } else {
      router.push(`/sbifm/${regId}`).then(() => {
        router.reload();
      });

    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };


  return (
    <>
      {/* main header */}
      <header className="main-header style-one style-six">
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="logo-box pull-left">
                <figure className="logo">
                  <Link href="/">
                    <Image height={100} width={200} loader={imageCustom} src="/assets/images/logo-6.png" alt="logo" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area pull-right">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <Link href='/' rel="canonical">Home</Link>
                      </li>
                      <li>
                        <Link href='/about'>About Us</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="#">Training</Link>
                        <ul>
                          <li>
                            <Link href='/smarttrader' rel="canonical"> Paid Training</Link>
                          </li>
                          <li>
                            <Link href="/studymaterial" rel="canonical">Free Training</Link>
                          </li>
                          <li>
                            <Link href="/nism" rel="canonical">NISM series VIII</Link>
                          </li>
                          <li>
                            <Link href="/assets/broucher.pdf">Download Broucher</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="#">
                        <Link href='/book' rel="canonical">Free e-book</Link>
                      </li>

                      {/* <Link className='a' href=" " onClick={()=>router.push('/blog')}>Blog</Link> */}
                      <li className="#">
                        <Link href="/blog" rel="canonical">Blog</Link>
                      </li>
                      <li>
                        <Link href="/frequentlyaskedquestions" rel="canonical">FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="menu-right-content clearfix">
                  {/* <div className="search-btn">
                          <button type="button" className="search-toggler"><i className="flaticon-search-1"></i></button>
                      </div> */}
                  {/* <div className="nav-btn nav-toggler navSidebar-button clearfix">
                          <i className="fas fa-align-right"></i>
                      </div> */}

                  <div className="btn-box btnres">
                    <button
                      type="button"
                      className="registraion_button"
                      data-bs-toggle="modal"
                      data-bs-target="#registrationModal">
                      Register
                    </button>
                    <Link href="/contact" rel="canonical" className="theme-btn style-three">
                      Contact Us
                    </Link>

                  </div>
                  <div className='mobileregister'>
                    <button
                      type="button"
                      className="registraion_buttonmob"
                      data-bs-toggle="modal"
                      data-bs-target="#registrationModal">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box clearfix" style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="logo-box pull-left">
                <figure className="logo">
                  <Link href="/" >
                    <Image height={100} width={200} loader={imageCustom} src="/assets/images/logo-6.png" alt="logo" />
                  </Link>
                </figure>
              </div>
              <div className="menu-area pull-right">
                <nav className="main-menu clearfix" style={{ marginLeft: '-29px' }}>
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
                <div className="menu-right-content clearfix">
                  {/* <div className="search-btn">
                          <button type="button" className="search-toggler"><i className="flaticon-search-1"></i></button>
                      </div> */}
                  {/* <div className="nav-btn nav-toggler navSidebar-button clearfix">
                          <i className="fas fa-align-right"></i>
                      </div> */}
                </div>
              </div>

              <div className="btn-box  btnres" style={{ marginLeft: 84 }}>
                <button
                  type="button"
                  className="registraion_button"
                  data-bs-toggle="modal"
                  data-bs-target="#registrationModal">
                  Register
                </button>
                <Link href="/contact" className="theme-btn style-three" rel="canonical">
                  Contact Us
                </Link>

              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fas fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image height={100} width={200} loader={imageCustom} src="/assets/images/logo-6.png" alt="logo" />
            </Link>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>

              <li>
                <Link href="tel:+919990799940">+919990799940</Link>
              </li>
              <li>
                <Link href="mailto:info@stockbrain.in">info@stockbrain.in</Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/*Registrain page Model BOdy  */}

      <div
        className="modal fade"
        id="registrationModal"
        tabIndex="-1"
        aria-labelledby="registrationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title" id="registrationModalLabel" style={{ textAlign: 'center' }}>
                {isRegistering ? 'Register Yourself' : 'Login'}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
               >
              </button>
            </div>
            <div className="modal-body">
              <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles['form-title']}>{isRegistering ? 'Registration Form' : 'Login Form'}</h1>

                {!isRegistering && (
                  <div className={styles['form-group']}>
                    <label htmlFor="regId" className={styles['form-label']}>Registration ID</label>
                    <input
                      type="text"
                      id="regId"
                      name="regId"
                      className={styles['form-input']}
                      value={regId}
                       onChange={(e) => setRegId(e.target.value)}
                      required
                    />
                  </div>
                )}

                {isRegistering && (
                  Object.keys(formData).filter(key => key !== 'regId').map((key) => (
                    <div className={styles['form-group']} key={key}>
                      <label htmlFor={key} className={styles['form-label']}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      {key === 'experience' || key === 'learningMode' ? (
                        <select
                          id={key}
                          name={key}
                          className={styles['form-select']}
                          value={formData[key]}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Select your {key}</option>
                          {key === 'experience' ? (
                            <>
                              <option value="Less than 3 months">Less than 3 months</option>
                              <option value="3 Months to 12 Months">3 Months to 12 Months</option>
                              <option value="1-3 years">1-3 years</option>
                              <option value="More than 3 years">More than 3 years</option>
                              <option value="Want to begin">Want to begin</option>
                            </>
                          ) : (
                            <>
                              <option value="Online">Online</option>
                              <option value="Offline">Offline</option>
                            </>
                          )}
                        </select>
                      ) : (
                        <input
                          type={key === 'number' ? 'tel' : key === 'age' ? 'number' : key === 'email' ? 'email' : 'text'}
                          id={key}
                          name={key}
                          className={styles['form-input']}
                          value={formData[key]}
                          onChange={handleChange}
                          required
                        />
                      )}
                      {key === 'email' && emailError && (
                        <small className={styles['form-error']}>{emailError}</small>
                      )}
                    </div>
                  ))
                )}

                <button type="submit" className='theme-btn style-three'>
                  {isRegistering ? 'Register' : 'Login'}
                </button>

                <button type="button" className='registraion_button' onClick={toggleForm} >
                  {isRegistering ? 'Already Registered? Login' : 'Not Registered yet? Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


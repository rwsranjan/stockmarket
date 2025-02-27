import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

export default function Privacypolicy() {

    const router = useRouter();

    return (
        <>
            <>
              
                <section
                    className="page-title centred"
                    style={{
                        backgroundImage: "url(assets/images/myimages/contactban2.png)"
                    }}
                >
                    <div className="auto-container">
                        <div className="content-box clearfix">
                            <h1>Privacy Policy</h1>
                            <ul className="bread-crumb clearfix">
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <section>
                <div className="container mb-5">
                    <div className="termscontent">

                        <h3>Introduction</h3>
                        <p>
                            At StockBrain, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website or use our services.
                        </p>

                        <h3>Information We Collect</h3>
                        <p>
                            We collect both personal and non-personal information to improve our services. Personal information includes your name, email, phone number, and any details you provide during registration. Non-personal information includes IP addresses, browser type, and usage statistics.
                        </p>

                        <h3>How We Use Your Information</h3>
                        <p>
                            We use your data to:
                        </p>
                        <ul>
                            <li>Provide and improve our services.</li>
                            <li>Process admissions and registrations.</li>
                            <li>Send promotional emails and updates.</li>
                            <li>Analyze website usage for improvements.</li>
                        </ul>

                        <h3>Data Security</h3>
                        <p>
                            We implement strict security measures to protect your information from unauthorized access, alteration, or disclosure.
                        </p>

                        <h3>Cookies and Tracking Technologies</h3>
                        <p>
                            Our website uses cookies to enhance user experience. You can manage your cookie preferences through your browser settings.
                        </p>

                        <h3>Third-Party Disclosure</h3>
                        <p>
                            We do not sell or trade your personal information. However, we may share your data with trusted partners for operational purposes, provided they comply with strict confidentiality agreements.
                        </p>

                        <h3>Your Rights</h3>
                        <p>
                            You have the right to:
                        </p>
                        <ul>
                            <li>Request access to your personal information.</li>
                            <li>Request corrections or deletion of your data.</li>
                            <li>Opt-out of marketing communications.</li>
                        </ul>

                        <h3>Changes to Our Privacy Policy</h3>
                        <p>
                            We may update this Privacy Policy periodically. Any changes will be posted on this page.
                        </p>

                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions, please contact us at <Link href="mailto:info@stockbrain.in">info@stockbrain.in</Link>.
                        </p>
                    </div>
                </div>
            </section>
                <button
                    className="scroll-top style-three scroll-to-target"
                    data-target="html"
                >
                    <span className="fa fa-arrow-up" />
                </button>
                {/* sidebar cart item */}
                <div className="xs-sidebar-group info-group info-sidebar">
                    <div className="xs-overlay xs-bg-black" />
                    <div className="xs-sidebar-widget">
                        <div className="sidebar-widget-container">
                            <div className="widget-heading">
                                <Link href="#" className="close-side-widget">
                                    X
                                </Link>
                            </div>
                            <div className="sidebar-textwidget">
                                <div className="sidebar-info-contents">
                                    <div className="content-inner">
                                        <div className="upper-box">
                                            <div className="logo">
                                                <Link href="/">
                                                    <img src="assets/images/sidebar-logo.png" alt="logo" />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    Here is a learning platform for becoming a Full time trader
                                                    and investor in Indian stock Market.
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
                                                {/* <li><i class="fas fa-map-marker-alt"></i>Noida Sector 2</li> */}
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
                                                    <Link href="/">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/">
                                                        <i className="fab fa-instagram" />
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
        </>
    );
}
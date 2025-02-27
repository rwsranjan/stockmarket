import Link from 'next/link';

export default function Termsandconditions() {

    return (
        <>
            <>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <title>SBIFM-stock brain institute of financial market</title>
                <section
                    className="page-title centred"
                    style={{
                        backgroundImage: "url(assets/images/myimages/contactban2.png)"
                    }}
                >
                    <div className="auto-container">
                        <div className="content-box clearfix">
                            <h1>Terms and Conditions</h1>
                            <ul className="bread-crumb clearfix">
                                <li>
                                    <Link href='/'>Home</Link>
                                </li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <br />
                <br />
                <section>
                    <div className="container mb-5">
                        <div className="termscontent">
                            <h3>Use of Website</h3>
                            <p>
                                You are granted a limited, non-transferable license to access and use the content for personal and non-commercial purposes. Unauthorized use may result in legal action.
                            </p>

                            <h3>Intellectual Property</h3>
                            <p>
                                All content on this website, including text, graphics, logos, and images, is the property of Stock Brain and protected by copyright laws. You may not reproduce, distribute, or modify any part of the website without prior written consent. Any unauthorized use of intellectual property may lead to legal consequences.
                            </p>

                            <h3>User Comments</h3>
                            <p>
                                You are responsible for any comments or content you post on our website. We reserve the right to remove any comments that are deemed inappropriate, offensive, or violate these terms. Any abusive, defamatory, or unlawful content will be removed immediately.
                            </p>

                            <h3>Links to Other Websites</h3>
                            <p>
                                Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or control the content of these websites and are not responsible for any damages or losses incurred from their use. Please review the terms and privacy policies of any third-party website before using them.
                            </p>

                            <h3>Disclaimer</h3>
                            <p>
                                We strive to provide accurate and up-to-date information on our website, but we do not guarantee the completeness, accuracy, or reliability of any content. Your use of this website is at your own risk. Stock Brain is not responsible for any investment decisions made based on the information provided on this website.
                            </p>

                            <h3>Limitation of Liability</h3>
                            <p>
                                Under no circumstances shall Stock Brain, its affiliates, or employees be liable for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use our website.
                            </p>

                            <h3>Privacy Policy</h3>
                            <p>
                                Your privacy is important to us. We collect and use personal information in accordance with our Privacy Policy. By using this website, you consent to our data practices.
                            </p>

                            <h3>Changes to Terms</h3>
                            <p>
                                We may revise these terms and conditions at any time without notice. By continuing to use this website after changes are made, you agree to be bound by the updated terms. We encourage users to check this page regularly for updates.
                            </p>

                            <h3>Governing Law</h3>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.
                            </p>

                            <h3>Contact Us</h3>
                            <p>
                                If you have any questions or concerns about these terms and conditions, please contact us at{' '}
                                <Link href="mailto:info@stockbrain.in">info@stockbrain.in</Link>.
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
                                                    <img src="assets/images/sidebar-logo.png" alt="sidebar-logo" />
                                                </Link>
                                            </div>
                                            <div className="text">
                                                <p>
                                                    {" "}
                                                    Here is a learning platform for becoming a Full time trader
                                                    and investor in Indian stock Market{" "}
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

                {/* END sidebar widget item */}
            </>

        </>
    );
}
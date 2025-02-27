import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [mobile, setMobile] = useState();
    const [message, setMessege] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [questiontype, setQuestionType] = useState();

    const router = useRouter();



    const handleSubmit = async () => {
       
        const contactData = {
            fname: fname,
            lname: lname,
            email: email,
            mobile: mobile,
            message: message,
            questiontype: questiontype
        };

        try {
            // Send the form data to the API endpoint
            const response = await fetch('/api/sendmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            // Parse the JSON response
            const res = await response.json();

            // Check if the request was successful
            if (res.result.status == 200) {
                console.log('Success:', res.result.msg);
                return res;
            } else {
                console.error('Error:', res);
                throw new Error(res.result.msg || 'Failed to send contact form');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    };

    const SaveData = async () => {
        if (!fname || !mobile || !email) {
            alert('Please fill the further details...');
            return false;
        }
        const response = await fetch(
            '/api/contactus?' +
            new URLSearchParams({
                email: email, name: fname + '' + lname, mobile: mobile, message: message, country: country, questiontype: questiontype
            })
        );
        const res = await response.json();

        if (res) {
            await handleSubmit();
            alert('We will contact you soon');
            router.push('/');
        } else {
            alert('Something went wrong');
        }

    }


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
                        <h1>Contact US</h1>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li> Contact</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*End Page Title*/}
            {/* contact-information */}
            <section className="contact-information centred">
                <div className="auto-container">
                    <div className="sec-title style-three centred">
                        <h5>Get In Touch</h5>
                        <h4>Our dedicated support team is available and ready to assist you from 10AM to 6 PM.<br />
                            Please get in touch using the details below if you have any questions about our service or products.
                        </h4>
                    </div>
                    <div className="row clearfix text-center">
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div
                                className="single-item wow fadeInUp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="fas fa-phone" />
                                    </div>
                                    <h3>Calling Support</h3>
                                    <p>
                                        <a href="tel:+91 9990799940">+91 9990799940</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                            <div
                                className="single-item wow fadeInUp"
                                data-wow-delay="400ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="far fa-envelope-open" />
                                    </div>
                                    <h3>Email Information</h3>
                                    <p>
                                        <a href="mailto:info@stockbrain.in">
                                            info@stockbrain.in
                                        </a>
                                        <br />

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact-information end */}
            <br />
            <br />
            {/* contact-style-two */}
            <section
                className="contact-style-two"
                style={{
                    backgroundImage: "url(assets/images/myimages/about-contact-banner.webp)"
                }}
            >
                <div className="auto-container">
                    <div className="col-xl-8 col-lg-12 col-md-12 inner-column">
                        <div className="sec-title left light">
                            <Link href="#contact" id="contact">
                                <h2>Drop Us a Message</h2>
                            </Link>
                            <p>
                                Feel free to leave your contact details below, and a representative from Stock Brain will get in touch with you within one business day.
                            </p>
                        </div>
                        <div
                            className="default-form"
                        >
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input
                                        type="text"
                                        name="fname"
                                        placeholder="First Name"
                                        onChange={e => { setFname(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input
                                        type="text"
                                        name="lname"
                                        placeholder="Last Name"
                                        onChange={e => { setLname(e.target.value) }}
                                        required
                                        value={lname}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        onChange={e => { setEmail(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div
                                    className="col-lg-6 col-md-6 col-sm-6 form-group"
                                    style={{ display: "flex", gap: 4 }}
                                >
                                    {/*
                                        <select id="country_code" name="country_code">
                                            <option value="">Code</option>
                                            <option value={+1}>+1 (USA)</option>
                                            <option value={+44}>+44 (UK)</option>
                                            <option value={+61}>+61 (Australia)</option>
                                            <option value={+93}>+93 (Afghanistan)</option>
                                            <option value={+355}>+355 (Albania)</option>
                                            <option value={+213}>+213 (Algeria)</option>
                                            <option value={+376}>+376 (Andorra)</option>
                                            <option value={+244}>+244 (Angola)</option>
                                            <option value="+1-268">+1-268 (Antigua and Barbuda)</option>
                                            <option value={+54}>+54 (Argentina)</option>
                                            <option value={+374}>+374 (Armenia)</option>
                                            <option value={+297}>+297 (Aruba)</option>
                                            <option value={+61}>+61 (Australia)</option>
                                            <option value={+43}>+43 (Austria)</option>
                                            <option value={+994}>+994 (Azerbaijan)</option>
                                            <option value="+1-242">+1-242 (Bahamas)</option>
                                            <option value={+973}>+973 (Bahrain)</option>
                                            <option value={+880}>+880 (Bangladesh)</option>
                                            <option value="+1-246">+1-246 (Barbados)</option>
                                            <option value={+375}>+375 (Belarus)</option>
                                            <option value={+32}>+32 (Belgium)</option>
                                            <option value={+501}>+501 (Belize)</option>
                                            <option value={+229}>+229 (Benin)</option>
                                            <option value={+975}>+975 (Bhutan)</option>
                                            <option value={+591}>+591 (Bolivia)</option>
                                            <option value={+387}>+387 (Bosnia and Herzegovina)</option>
                                            <option value={+267}>+267 (Botswana)</option>
                                            <option value={+55}>+55 (Brazil)</option>
                                            <option value={+673}>+673 (Brunei)</option>
                                            <option value={+359}>+359 (Bulgaria)</option>
                                            <option value={+226}>+226 (Burkina Faso)</option>
                                            <option value={+257}>+257 (Burundi)</option>
                                            <option value={+855}>+855 (Cambodia)</option>
                                            <option value={+237}>+237 (Cameroon)</option>
                                            <option value={+1}>+1 (Canada)</option>
                                            <option value={+238}>+238 (Cape Verde)</option>
                                            <option value={+236}>+236 (Central African Republic)</option>
                                            <option value={+235}>+235 (Chad)</option>
                                            <option value={+56}>+56 (Chile)</option>
                                            <option value={+86}>+86 (China)</option>
                                            <option value={+57}>+57 (Colombia)</option>
                                            <option value={+269}>+269 (Comoros)</option>
                                            <option value={+506}>+506 (Costa Rica)</option>
                                            <option value={+385}>+385 (Croatia)</option>
                                            <option value={+53}>+53 (Cuba)</option>
                                            <option value={+357}>+357 (Cyprus)</option>
                                            <option value={+420}>+420 (Czech Republic)</option>
                                            <option value={+243}>+243 (Democratic Republic of the Congo)</option>
                                            <option value={+45}>+45 (Denmark)</option>
                                            <option value={+253}>+253 (Djibouti)</option>
                                            <option value="+1-767">+1-767 (Dominica)</option>
                                            <option value="+1-809">+1-809 (Dominican Republic)</option>
                                            <option value={+670}>+670 (East Timor)</option>
                                            <option value={+593}>+593 (Ecuador)</option>
                                            <option value={+20}>+20 (Egypt)</option>
                                            <option value={+503}>+503 (El Salvador)</option>
                                            <option value={+240}>+240 (Equatorial Guinea)</option>
                                            <option value={+291}>+291 (Eritrea)</option>
                                            <option value={+372}>+372 (Estonia)</option>
                                            <option value={+251}>+251 (Ethiopia)</option>
                                            <option value={+679}>+679 (Fiji)</option>
                                            <option value={+358}>+358 (Finland)</option>
                                            <option value={+33}>+33 (France)</option>
                                            <option value={+241}>+241 (Gabon)</option>
                                            <option value={+220}>+220 (Gambia)</option>
                                            <option value={+995}>+995 (Georgia)</option>
                                            <option value={+49}>+49 (Germany)</option>
                                            <option value={+233}>+233 (Ghana)</option>
                                            <option value={+30}>+30 (Greece)</option>
                                            <option value="+1-473">+1-473 (Grenada)</option>
                                            <option value={+502}>+502 (Guatemala)</option>
                                            <option value={+224}>+224 (Guinea)</option>
                                            <option value={+245}>+245 (Guinea-Bissau)</option>
                                            <option value={+592}>+592 (Guyana)</option>
                                            <option value={+509}>+509 (Haiti)</option>
                                            <option value={+504}>+504 (Honduras)</option>
                                            <option value={+852}>+852 (Hong Kong)</option>
                                            <option value={+36}>+36 (Hungary)</option>
                                            <option value={+354}>+354 (Iceland)</option>
                                            <option value={+91}>+91 (India)</option>
                                            <option value={+62}>+62 (Indonesia)</option>
                                            <option value={+98}>+98 (Iran)</option>
                                            <option value={+964}>+964 (Iraq)</option>
                                            <option value={+353}>+353 (Ireland)</option>
                                            <option value={+972}>+972 (Israel)</option>
                                            <option value={+39}>+39 (Italy)</option>
                                            <option value="+1-876">+1-876 (Jamaica)</option>
                                            <option value={+81}>+81 (Japan)</option>
                                            <option value={+962}>+962 (Jordan)</option>
                                            <option value={+7}>+7 (Kazakhstan)</option>
                                            <option value={+254}>+254 (Kenya)</option>
                                            <option value={+686}>+686 (Kiribati)</option>
                                            <option value={+965}>+965 (Kuwait)</option>
                                            <option value={+996}>+996 (Kyrgyzstan)</option>
                                            <option value={+856}>+856 (Laos)</option>
                                            <option value={+371}>+371 (Latvia)</option>
                                            <option value={+961}>+961 (Lebanon)</option>
                                            <option value={+266}>+266 (Lesotho)</option>
                                            <option value={+231}>+231 (Liberia)</option>
                                            <option value={+218}>+218 (Libya)</option>
                                            <option value={+423}>+423 (Liechtenstein)</option>
                                            <option value={+370}>+370 (Lithuania)</option>
                                            <option value={+352}>+352 (Luxembourg)</option>
                                            <option value={+853}>+853 (Macau)</option>
                                            <option value={+389}>+389 (Macedonia)</option>
                                            <option value={+261}>+261 (Madagascar)</option>
                                            <option value={+265}>+265 (Malawi)</option>
                                            <option value={+60}>+60 (Malaysia)</option>
                                            <option value={+960}>+960 (Maldives)</option>
                                            <option value={+223}>+223 (Mali)</option>
                                            <option value={+356}>+356 (Malta)</option>
                                            <option value={+692}>+692 (Marshall Islands)</option>
                                            <option value={+222}>+222 (Mauritania)</option>
                                            <option value={+230}>+230 (Mauritius)</option>
                                            <option value={+52}>+52 (Mexico)</option>
                                            <option value={+691}>+691 (Micronesia)</option>
                                            <option value={+373}>+373 (Moldova)</option>
                                            <option value={+377}>+377 (Monaco)</option>
                                            <option value={+976}>+976 (Mongolia)</option>
                                            <option value={+382}>+382 (Montenegro)</option>
                                            <option value={+212}>+212 (Morocco)</option>
                                            <option value={+258}>+258 (Mozambique)</option>
                                            <option value={+95}>+95 (Myanmar)</option>
                                            <option value={+264}>+264 (Namibia)</option>
                                            <option value={+674}>+674 (Nauru)</option>
                                            <option value={+977}>+977 (Nepal)</option>
                                            <option value={+31}>+31 (Netherlands)</option>
                                            <option value={+64}>+64 (New Zealand)</option>
                                            <option value={+505}>+505 (Nicaragua)</option>
                                            <option value={+227}>+227 (Niger)</option>
                                            <option value={+234}>+234 (Nigeria)</option>
                                            <option value={+850}>+850 (North Korea)</option>
                                            <option value={+47}>+47 (Norway)</option>
                                            <option value={+968}>+968 (Oman)</option>
                                            <option value={+92}>+92 (Pakistan)</option>
                                            <option value={+680}>+680 (Palau)</option>
                                            <option value={+507}>+507 (Panama)</option>
                                            <option value={+675}>+675 (Papua New Guinea)</option>
                                            <option value={+595}>+595 (Paraguay)</option>
                                            <option value={+51}>+51 (Peru)</option>
                                            <option value={+63}>+63 (Philippines)</option>
                                            <option value={+48}>+48 (Poland)</option>
                                            <option value={+351}>+351 (Portugal)</option>
                                            <option value={+974}>+974 (Qatar)</option>
                                            <option value={+242}>+242 (Republic of the Congo)</option>
                                            <option value={+40}>+40 (Romania)</option>
                                            <option value={+7}>+7 (Russia)</option>
                                            <option value={+250}>+250 (Rwanda)</option>
                                            <option value="+1-869">+1-869 (Saint Kitts and Nevis)</option>
                                            <option value="+1-758">+1-758 (Saint Lucia)</option>
                                            <option value="+1-784">+1-784 (Saint Vincent and the Grenadines)</option>
                                            <option value={+685}>+685 (Samoa)</option>
                                            <option value={+378}>+378 (San Marino)</option>
                                            <option value={+239}>+239 (Sao Tome and Principe)</option>
                                            <option value={+966}>+966 (Saudi Arabia)</option>
                                            <option value={+221}>+221 (Senegal)</option>
                                            <option value={+381}>+381 (Serbia)</option>
                                            <option value={+248}>+248 (Seychelles)</option>
                                            <option value={+232}>+232 (Sierra Leone)</option>
                                            <option value={+65}>+65 (Singapore)</option>
                                            <option value={+421}>+421 (Slovakia)</option>
                                            <option value={+386}>+386 (Slovenia)</option>
                                            <option value={+677}>+677 (Solomon Islands)</option>
                                            <option value={+252}>+252 (Somalia)</option>
                                            <option value={+27}>+27 (South Africa)</option>
                                            <option value={+82}>+82 (South Korea)</option>
                                            <option value={+211}>+211 (South Sudan)</option>
                                            <option value={+34}>+34 (Spain)</option>
                                            <option value={+94}>+94 (Sri Lanka)</option>
                                            <option value={+249}>+249 (Sudan)</option>
                                            <option value={+597}>+597 (Suriname)</option>
                                            <option value={+268}>+268 (Swaziland)</option>
                                            <option value={+46}>+46 (Sweden)</option>
                                            <option value={+41}>+41 (Switzerland)</option>
                                            <option value={+963}>+963 (Syria)</option>
                                            <option value={+886}>+886 (Taiwan)</option>
                                            <option value={+992}>+992 (Tajikistan)</option>
                                            <option value={+255}>+255 (Tanzania)</option>
                                            <option value={+66}>+66 (Thailand)</option>
                                            <option value={+228}>+228 (Togo)</option>
                                            <option value={+676}>+676 (Tonga)</option>
                                            <option value={+1-868}>+1-868 (Trinidad and Tobago)</option>
                                            <option value={+216}>+216 (Tunisia)</option>
                                            <option value={+90}>+90 (Turkey)</option>
                                            <option value={+993}>+993 (Turkmenistan)</option>
                                            <option value={+688}>+688 (Tuvalu)</option>
                                            <option value={+256}>+256 (Uganda)</option>
                                            <option value={+380}>+380 (Ukraine)</option>
                                            <option value={+971}>+971 (United Arab Emirates)</option>
                                            <option value={+44}>+44 (United Kingdom)</option>
                                            <option value={+598}>+598 (Uruguay)</option>
                                            <option value={+998}>+998 (Uzbekistan)</option>
                                            <option value={+678}>+678 (Vanuatu)</option>
                                            <option value={+39}>+39 (Vatican City)</option>
                                            <option value={+58}>+58 (Venezuela)</option>
                                            <option value={+84}>+84 (Vietnam)</option>
                                            <option value={+967}>+967 (Yemen)</option>
                                            <option value={+260}>+260 (Zambia)</option>
                                            <option value={+263}>+263 (Zimbabwe)</option>
                                        </select>
                                        */}
                                    <input
                                        type="number"
                                        name="mobile"
                                        placeholder="Your Mobile number"
                                        onChange={e => { setMobile(e.target.value) }}
                                        required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <select id="country" name="country" onChange={e => { setCountry(e.target.value) }}                                        >
                                        <option value="">Select Country</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="VG">British Virgin Islands</option>
                                        <option value="BN">Brunei</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curacao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="CD">Democratic Republic of the Congo</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="TL">East Timor</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="CI">Ivory Coast</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="XK">Kosovo</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Laos</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macau</option>
                                        <option value="MK">Macedonia</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia</option>
                                        <option value="MD">Moldova</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="KP">North Korea</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="CG">Republic of the Congo</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russia</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthelemy</option>
                                        <option value="SH">Saint Helena</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="KR">South Korea</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syria</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="VI">U.S. Virgin Islands</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VA">Vatican</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>

                                    </select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <select id="question" name="question" onChange={e => { setQuestionType(e.target.value) }}>
                                        <option value="">Select Question Type</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Trade Inquiry">Trade Inquiry</option>
                                        <option value="Complaints">Complaints</option>

                                    </select>
                                </div>
                                {/* select box make here  */}
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        onChange={e => { setMessege(e.target.value) }}
                                    />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                    <button
                                        className="theme-btn style-one"
                                        type="button"
                                        name="submit-form"
                                        onClick={() => SaveData()}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* contact-style-two end */}
            {/*Scroll to top*/}
            <button
                className="scroll-top style-three scroll-to-target"
                data-target="html"
            >
                <span className="fa fa-arrow-up" />
            </button>

        </>

    );
}
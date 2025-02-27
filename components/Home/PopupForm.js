// components/PopupForm.js
import React, { useEffect, useState } from 'react';
import styles from './PopupForm.module.css';
import { useRouter } from 'next/router';

const PopupForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the popup when the component is mounted
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };



    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [mobile, setMobile] = useState();
    const [message, setMessege] = useState();
    const [email, setEmail] = useState();
    const [country, setCountry] = useState();
    const [questiontype, setQuestionType] = useState();

    const router = useRouter();


    const SaveData = async () => {
        if (!fname || !mobile || !email) {
            alert('Please fill the further details...');
            return false;
        }
        const response = await fetch(
            '/api/contactus?' +
            new URLSearchParams({ email: email, name: fname + lname, mobile: mobile, message: message, country: country, questiontype: questiontype })
        );
        const res = await response.json();

        if (res) {
            alert('We will contact you soon');
            router.push('/');
        } else {
            alert('Something went wrong');
        }

    }

    return (
        <div className={`${styles.popup} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.popupContent}>
                <div className={styles.topForm}>
                    <div>
                        <h2 className={styles.title}>Download Books</h2>
                        <p>Please fill-up the form below to download the free study material </p>
                    </div>
                    <button className={styles.closeButton} onClick={handleClose}>X</button>
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
                                    value={lname}
                                />
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-12 form-group">
                                <input
                                    type="email"
                                    className={styles.formInput}
                                    name="email"
                                    placeholder="Your Email"
                                    onChange={e => { setEmail(e.target.value) }}
                                    required
                                />
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
                                    onClick={() => SaveData()}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupForm;

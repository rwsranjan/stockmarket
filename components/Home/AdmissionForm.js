import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './AdmissionForm.module.css'; // Import custom CSS module
import { imageCustom } from '@/lib/imageLoader';
import { useRouter } from 'next/router';

const AdmissionForm = (props) => {
    const StudentData = props.data;
    const router = useRouter();

    // State variables
    const [studentName, setStudentName] = useState(StudentData?.name || '');
    const [studentAddress, setStudentAddress] = useState(StudentData?.address || '');
    const [contactNumber, setContactNumber] = useState(StudentData?.mobile || '');
    const [email, setEmail] = useState(StudentData?.email || '');
    const [registrationNumber, setRegistrationNumber] = useState(StudentData?.reg_student_id || '');
    const [studentPhoto, setStudentPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [adharCard, setAdharCard] = useState('');
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [payPhoto, setPayPhoto] = useState(null);
    const [payphotoPreview, setPayPhotoPreview] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [paymentType, setPaymentType] = useState('cash');
    const [paymentMode, setPaymentMode] = useState('one-time');
    const [installmentType, setInstallmentType] = useState(1);
    const [selectedFees, setSelectedFees] = useState([30000]); // Default to "Basics to Advance"
    const [totalFee, setTotalFee] = useState(30000);
    const [installmentAmount, setInstallmentAmount] = useState(30000);
    const [adminView, setAdminView] = useState(false);
    const [discount, setDiscount] = useState(0);
    const [userRegNo, setUserRegNo] = useState("");
    const [sessionTime, setSessionTime] = useState("");
    const [termsAccepted, setTermsAccepted] = useState({
        condition1: false,
        condition2: false,
    });

    // Check if the form is valid
    const isFormValid = totalFee > 0 && termsAccepted.condition1 && termsAccepted.condition2;

    // Handle terms acceptance
    const handleTermsChange = (e) => {
        setTermsAccepted({
            ...termsAccepted,
            [e.target.name]: e.target.checked,
        });
    };

    // Check session and registration number
    useEffect(() => {
        const session = localStorage.getItem("session");
        const regNo = localStorage.getItem("regNo");

        if (!session || !regNo) {
            setAdminView(false);
            return;
        }

        const sessionData = JSON.parse(session);
        setSessionTime(sessionData?.expiresAt);

        if (!sessionData || Date.now() > sessionData.expiresAt) {
            localStorage.removeItem("session");
            router.push("/admin");
            return;
        }

        setUserRegNo(regNo);
        setAdminView(true);
    }, [router]);

    // Course data
    const courses = [
        { id: "course1", name: "BASICS TO Advance", fee: 30000 },
        { id: "course2", name: "FUTURE & OPTIONS", fee: 10000 },
        { id: "course3", name: "PSYCHOLOGY & RISK MANAGEMENT", fee: 6000 },
        { id: "course4", name: "FUNDAMENTAL ANALYSIS", fee: 7000 },
        { id: "course5", name: "TECHNICAL ANALYSIS", fee: 11000 },
        { id: "course6", name: "Basics of Stock Market", fee: 5000 },
    ];

    // Calculate total fee whenever selectedFees change
    useEffect(() => {
        const newTotal = selectedFees.reduce((sum, fee) => sum + fee, 0);
        setTotalFee(newTotal);
    }, [selectedFees]);

    // Update installment amount based on payment mode and type
    useEffect(() => {
        if (paymentMode === 'installment') {
            setInstallmentAmount(totalFee / (installmentType == '2' ? 2 :installmentType == '3' ? 3 : 1));
        } else {
            setInstallmentAmount(totalFee);
        }
    }, [totalFee, installmentType, paymentMode]);

    // Handle checkbox change for course selection
    const handleCheckboxChange = (fee, isChecked) => {
        const updatedFees = isChecked
            ? [...selectedFees, fee]
            : selectedFees.filter(f => f !== fee);
        setSelectedFees(updatedFees);
    };

    // Handle student photo change
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setStudentPhoto(file);
        setPhotoPreview(file ? URL.createObjectURL(file) : null);
    };

    // Handle payment photo change
    const handlePhotoChangePay = (e) => {
        const file = e.target.files[0];
        setPayPhoto(file);
        setPayPhotoPreview(file ? URL.createObjectURL(file) : null);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('studentName', studentName);
        formData.append('installmentAmount', installmentAmount);
        formData.append('courseFee', totalFee);
        formData.append('studentAddress', studentAddress);
        formData.append('contactNumber', contactNumber);
        formData.append('email', email);
        formData.append('paymentType', paymentType);
        formData.append('registrationNumber', registrationNumber);
        formData.append('adharCard', adharCard);
        formData.append('paymentMode', paymentMode);
        formData.append('installmentType', installmentType);
        formData.append('onlinepaymentrecipt', payPhoto);
        formData.append('studentPhoto', studentPhoto);

        try {
            const response = await fetch('/api/add_admission', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.message || 'Submission failed');
            }

            alert('Admission Form submitted successfully.');
          //  router.push('/');
            // Optionally reset the form or redirect
        } catch (error) {
            console.error('Request failed', error);
            alert(`Error: ${error.message}`);
        }
    };

    // Check if registration number is blank
    const isRegistrationNumberBlank = registrationNumber.trim() === '';

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>Admission Form</h1>
            <h1 className={styles.title} style={{ color: "#E35728" }}>
                {sessionTime || userRegNo === router.query.regID ? "Admin User" : "Individual USER"}
            </h1>

            <div className={styles.formGroup}>
                <label>Registration Number:</label>
                <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    required
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                    readOnly={StudentData.reg_student_id ? true : false}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Student Name:</label>
                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Student Address:</label>
                <input
                    type="text"
                    value={studentAddress}
                    onChange={(e) => setStudentAddress(e.target.value)}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Contact Number:</label>
                <input
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
            </div>

            <div className={styles.formGroup}>
                <div className={styles.courseSelectionContainer}>
                    <label className={styles.label}>Select Courses:</label>
                    <div className={styles.dropdownContainer} ref={dropdownRef}>
                        <button
                            type="button"
                            className={`${styles.dropdownButton} ${(isRegistrationNumberBlank || isDiscountApplied) ? styles.disabledButton : ''}`}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            disabled={isRegistrationNumberBlank || isDiscountApplied}
                        >
                            Choose Courses
                        </button>

                        {dropdownOpen && (
                            <div className={styles.dropdownMenu}>
                                {courses.map(course => (
                                    <label key={course.id} className={styles.courseOption}>
                                        <input
                                            type="checkbox"
                                            value={course.fee}
                                            checked={selectedFees.includes(course.fee)}
                                            onChange={(e) => handleCheckboxChange(course.fee, e.target.checked)}
                                            disabled={isRegistrationNumberBlank || isDiscountApplied}
                                        />
                                        {course.name} - ₹{course.fee}
                                    </label>
                                ))}
                            </div>
                        )}

                        <p className={styles.totalFee}>Total Fee: ₹{totalFee}</p>
                    </div>
                </div>
            </div>

            <div className={styles.formGroup}>
                <label>Student Photo:</label>
                <input
                    type="file"
                    onChange={handlePhotoChange}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
                {photoPreview && (
                    <div className={styles.photoPreview}>
                        <Image
                            src={photoPreview}
                            alt="Student Photo Preview"
                            height={100}
                            width={100}
                            className={styles.previewImage}
                        />
                    </div>
                )}
            </div>

            <div className={styles.formGroup}>
                <label>Aadhar Card / ID Number:</label>
                <input
                    type="text"
                    value={adharCard}
                    onChange={(e) => setAdharCard(e.target.value)}
                    required
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Payment Mode:</label>
                <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                >
                    <option value="one-time">One-time</option>
                    <option value="installment">Installment</option>
                </select>
            </div>

            {paymentMode === 'installment' && (
                <div className={styles.formGroup}>
                    <label>Installment Type:</label>
                    <select
                        value={installmentType}
                        onChange={(e) => setInstallmentType(e.target.value)}
                        disabled={isRegistrationNumberBlank}
                        className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                    >
                        <option value="1">Select Installment Type</option>
                        <option value="3">3 Installments</option>
                        <option value="2">2 Installments</option>
                    </select>
                </div>
            )}

            <div className={styles.formGroup}>
                <label>Installment Amount:</label>
                <input
                    type="text"
                    value={installmentAmount ? installmentAmount.toFixed(2) : '0.00'}
                    readOnly
                    className={styles.disabledInput}
                />
            </div>

            <div className={styles.formGroup}>
                <label>Payment Type:</label>
                <select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                    disabled={isRegistrationNumberBlank}
                    className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                >
                    <option value="cash">Cash</option>
                    <option value="upi">UPI</option>
                </select>
            </div>

            {paymentType === 'upi' && (
                <>
                    <div className={styles.imageContainer}>
                        <Image
                            loader={imageCustom}
                            className={styles.imgForPayment}
                            src="/assets/images/bank-qr.png"
                            alt="Bank QR Code for UPI Payment"
                            height={200}
                            width={300}
                            priority
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>UPI Payment Receipt:</label>
                        <input
                            type="file"
                            onChange={handlePhotoChangePay}
                            required
                            disabled={isRegistrationNumberBlank}
                            className={isRegistrationNumberBlank ? styles.disabledInput : ''}
                        />
                    </div>

                    {payphotoPreview && (
                        <div className={styles.photoPreview}>
                            <Image
                                src={payphotoPreview}
                                alt="UPI Payment Receipt Preview"
                                height={100}
                                width={100}
                                className={styles.previewImage}
                            />
                        </div>
                    )}
                </>
            )}

            {adminView && (
                <div className={styles.formGroup}>
                    <label>Discount Amount:</label>
                    <input
                        type="text"
                        placeholder="INR"
                        value={discount}
                        disabled={isDiscountApplied}
                        className={isRegistrationNumberBlank ? styles.disabledInput : ""}
                        onChange={(e) => setDiscount(Number(e.target.value) || 0)}
                    />
                    {discount > 0 && discount <= totalFee && !isDiscountApplied && (
                        <p
                            className={styles.applyButton}
                            onClick={() => {
                                const confirmApply = window.confirm(`Are you sure you want to apply a discount of ₹${discount}?`);
                                if (confirmApply) {
                                    setTotalFee(prevFee => Math.max(prevFee - discount, 0));
                                    setIsDiscountApplied(true);
                                }
                            }}
                        >
                            Apply Discount
                        </p>
                    )}

                    {isDiscountApplied && (
                        <p
                            className={styles.resetButton}
                            style={{ float: "right" }}
                            onClick={() => {
                                const confirmReset = window.confirm("Do you want to remove the applied discount?");
                                if (confirmReset) {
                                    setTotalFee(prevFee => prevFee + discount);
                                    setIsDiscountApplied(false);
                                    setDiscount(0);
                                }
                            }}
                        >
                            Reset Discount
                        </p>
                    )}
                </div>
            )}

            <div style={{ marginTop: "15px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                    <input
                        style={{ marginRight: "20px" }}
                        type="checkbox"
                        name="condition1"
                        checked={termsAccepted.condition1}
                        onChange={handleTermsChange}
                    />
                    I agree to the refund policy (No refund after enrollment).
                </label>

                <label style={{ display: "block", marginBottom: "10px", marginRight: "20px" }}>
                    <input
                        style={{ marginRight: "20px" }}
                        type="checkbox"
                        name="condition2"
                        checked={termsAccepted.condition2}
                        onChange={handleTermsChange}
                    />
                    I agree to abide by the course guidelines and ethics.
                </label>
            </div>

            <button
                type="submit"
                className='theme-btn style-three'
                disabled={!isFormValid || isRegistrationNumberBlank}
                style={{ background: isFormValid ? "#01485a" : "#ccc", color: "white", padding: "8px 16px", border: "none", cursor: isFormValid ? "pointer" : "not-allowed" }}
            >
                Submit
            </button>
        </form>
    );
};

export default AdmissionForm;
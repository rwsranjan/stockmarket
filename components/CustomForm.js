import { useState } from 'react';
import styles from './CustomForm.module.css';

const CustomForm = () => {
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

    const [emailError, setEmailError] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles['form-title']}>Registration Form</h1>

            {Object.keys(formData).map((key) => (
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
            ))}

            <button type="submit" className={styles['form-submit']}>Submit</button>
        </form>
    );
};

export default CustomForm;

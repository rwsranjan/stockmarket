import { useEffect, useState } from 'react';
import AdmissionForm from '@/components/Home/AdmissionForm'; // Adjust the path as necessary
import { useRouter } from 'next/router';

const RegistrationPage = () => {
    const router = useRouter();

    const [isRegistered, setIsRegistered] = useState(false);
    const [loading, setLoading] = useState(true);
    const [studentRegdata, setStudentRegData] = useState();

    const { regID } = router.query; // Access the dynamic parameter

    useEffect(() => {
        if (!regID) return; // Prevent API call if regID is undefined

        const checkRegistration = async () => {
            try {
                const response = await fetch(`/api/registered_student`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ regID }),
                });

                const data = await response.json();
                
                if (data.result.status === 200) {
                    setStudentRegData(data?.result?.userData);
                    setIsRegistered(data.result.isRegistered);
                }
            } catch (error) {
                console.error("Error checking registration:", error);
            } finally {
                setLoading(false);
            }
        };

        checkRegistration();
    }, [regID]);

 
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {isRegistered ? (
                <AdmissionForm data={studentRegdata} />
            ) : (
                <div>
                    <h2>User Not Registered</h2>
                    <p>Please check your email or mobile number.</p>
                    <button
                        type="button"
                        className="btn btn-primary registration_button"
                        data-bs-toggle="modal"
                        data-bs-target="#registrationModal"
                    >
                        Register
                    </button>

                    {/* Registration Modal */}
                    <div
                        className="modal fade"
                        id="registrationModal"
                        tabIndex="-1"
                        aria-labelledby="registrationModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="registrationModalLabel">Registration</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p>Please fill in your details to register.</p>
                                    {/* You can add a registration form here if needed */}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationPage;
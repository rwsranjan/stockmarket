import Link from 'next/link';
import Image from 'next/image'
import { imageCustom } from '@/lib/imageLoader';
export default function NISM() {

    const units = [
        { number: "Unit 1", name: "Basics of Derivatives", weightage: 10 },
        { number: "Unit 2", name: "Understanding Index", weightage: 5 },
        { number: "Unit 3", name: "Introduction to Forwards and Futures", weightage: 20 },
        { number: "Unit 4", name: "Introduction to Options", weightage: 20 },
        { number: "Unit 5", name: "Strategies using Equity Futures and Equity Options", weightage: 10 },
        { number: "Unit 6", name: "Trading Mechanism", weightage: 10 },
        { number: "Unit 7", name: "Clearing, Settlement and Risk Management", weightage: 10 },
        { number: "Unit 8", name: "Legal and Regulatory Environment", weightage: 5 },
        { number: "Unit 9", name: "Accounting and Taxation", weightage: 5 },
        { number: "Unit 10", name: "Sales Practices and Investor Protection Measures", weightage: 5 }
    ];

    return (
        <>
            <section
                className="page-title pagetitle2 centred"
                style={{
                    backgroundImage: "url(assets/images/myimages/courseban3.jpg)"
                }}
            >
                <div className="auto-container">
                    <div className="content-box clearfix">
                        <h1 style={{ color: "#fff" }}>NISM Series VIII</h1>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <Link href="/" style={{ color: "#fff" }}>Home</Link>
                            </li>
                            <li>
                                <Link style={{ color: "#fff" }} href="/nism">NISM</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section> <br />

            <div className="container nism mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <h3>The National Institute of Securities Markets (NISM)</h3>
                        <p>NISM operates under the guidelines of the Securities and Exchange Board of India (SEBI) and performs two key functions related to certification and examination.</p>
                        <br />
                        <h3>Mandatory Certification Examinations</h3>
                        <p>NISM conducts exams that are required for individuals working in securities market intermediaries. These exams ensure that persons—such as brokers, advisors, or other professionals—have the necessary knowledge and skills of the securities market.</p>
                        <br />

                        <h3>Continuing Professional Education (CPE) Programs</h3>
                        <p>NISM also offers programs designed to help these professionals stay updated with the latest knowledge and practices in the securities markets. These CPE programs are mandatory for maintaining their certification.</p>
                        <br />

                        <h3>Certification Validity</h3>
                        <p>When you receive a certification from NISM, it is valid for 3 years.</p>
                        <p>After the expiry date of your certificate, you need to re-validate it. You have two main options:</p>
                        <br />

                        <ol>
                            <li><strong>Pass a Relevant NISM Certification Examination:</strong> You can take and pass the NISM exam before the expiry of your certification. It will consider you still knowledgeable and qualified according to current standards.</li><br />

                            <li><strong>CPE Program:</strong> Alternatively, you can attend and successfully complete a CPE program specified by NISM. This program must be completed within the 12 months before the expiry of your certificate.</li>
                        </ol>
                        <p>Your certificate will be re-validated for another three years from the expiry date of the existing certificate once you complete the NISM exam or CPE program.</p>
                    </div>
                    <div className="col-sm-6">
                        <Image src="assets/images/myimages/nism.jpg" alt="NISM" className="img-fluid" loader={imageCustom} width={1410} height={2250} />
                    </div>
                </div>
                <br />
                <div className="row mt-3" style={{ textAlign: "center" }}>
                    <div className="col-sm-12">
                        <h3 className="m-3" >
                            <strong>
                                Syllabus Outline with Weights
                            </strong>
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <table style={{ textAlign: "center", border: "1px solid #034854", borderCollapse: "collapse", width: "80%" }}>
                                <thead>
                                    <tr>
                                        <th className="tablehead">Unit No.</th>
                                        <th className="tablehead">Unit Name</th>
                                        <th className="tablehead">Weightage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {units.map((unit, index) => (
                                        <tr key={index}>
                                            <td className="tablecontent">{unit.number}</td>
                                            <td className="tablecontent">{unit.name}</td>
                                            <td className="tablecontent">{unit.weightage}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '20px',
                textAlign: 'left',
                fontFamily: 'Arial, sans-serif',
                lineHeight: '1.6',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
                <h2 style={{
                    fontSize: '24px',
                    marginBottom: '20px',
                    textAlign: 'center'
                }}>Examination Specifications</h2>
                <p style={{
                    fontSize: '16px',
                    marginBottom: '15px'
                }}>
                    This is a computer-based examination with multiple choice questions.
                </p>
                <p style={{
                    fontSize: '16px',
                    marginBottom: '15px'
                }}>
                    The examination consists of 100 questions of 1 mark each adding to 100 marks.
                </p>
                <p style={{
                    fontSize: '16px',
                    marginBottom: '15px'
                }}>
                    The examination should be completed in 2 hours.
                </p>
                <p style={{
                    fontSize: '16px',
                    marginBottom: '15px'
                }}>
                    There shall be negative marking of 25% of the marks assigned to the question for each wrong answer.
                </p>
                <p style={{
                    fontSize: '16px',
                    marginBottom: '15px'
                }}>
                    The passing score for the examination is 60 marks.
                </p>
            </div>
        </>
    )
}
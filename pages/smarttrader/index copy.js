import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SmartTrader() {
    // Define initial percentages and target values for each progress bar
    const [percentages, setPercentages] = useState({
        bar1: 0,
        bar2: 0,
        bar3: 0,
        bar4: 0,
        bar5: 0,
        bar6: 0,
        bar7: 0,
        bar8: 0,
        bar9: 0,
        bar10: 0,
    });

    const targets = {
        bar1: 10,
        bar2: 5,
        bar3: 10,
        bar4: 5,
        bar5: 20,
        bar6: 20,
        bar7: 10,
        bar8: 5,
        bar9: 5,
        bar10: 75,
    };

    const incrementRates = {
        bar1: 5,
        bar2: 5,
        bar3: 5,
        bar4: 5,
        bar5: 5,
        bar6: 5,
        bar7: 5,
        bar8: 5,
        bar9: 5,
        bar10: 5,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPercentages(prevPercentages => {
                const updatedPercentages = { ...prevPercentages };
                let allComplete = true;

                // Update each progress bar's percentage
                for (const key in updatedPercentages) {
                    if (updatedPercentages[key] < targets[key]) {
                        updatedPercentages[key] += incrementRates[key];
                        if (updatedPercentages[key] > targets[key]) {
                            updatedPercentages[key] = targets[key];
                        }
                        allComplete = false; // If any bar is still updating
                    }
                }

                if (allComplete) {
                    clearInterval(interval); // Stop updating when all bars are complete
                }

                return updatedPercentages;
            });
        }, 300); // Update every 3 second

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <>
            <section
                className="page-title pagetitle2 centred"
                style={{
                    backgroundImage: "url(assets/images/myimages/cbanner2.jpg)",
                }}
            >
                <div className="auto-container">
                    <div className="content-box clearfix">
                        <h1 style={{ color: "#fff" }}>Be A Smart Market Player</h1>
                        <ul className="bread-crumb clearfix">
                            <li>
                                <a href="/" style={{ color: "#fff" }}>Home</a>
                            </li>
                            <li>
                                <a style={{ color: "#fff" }} href="/smarttrader">SmartTrader</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="service-style-five wow slideInUp">
                <div className="auto-container">
                    <div className="sec-title style-three centred">
                        <h5>Paid Training</h5>
                        <h2>What are you going to Learn?</h2>
                    </div>
                    <div className="tabs-content">
                        <div className="tab active-tab" id="tab-1">
                            <div className="row align-items-center clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar1} text={`${percentages.bar1}%`} />
                                        </div>
                                        <h4>What is the Stock Market?</h4>
                                        <p><b>➪Stock Market</b></p>
                                        <p><b>➪ Buy & Sell of Share</b></p>
                                        <p><b>➪ Types of Traders & Investors</b></p>
                                        <p><b>➪ Global Market</b></p>
                                        <p><b> ➪ How it Works?</b></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar2} text={`${percentages.bar2}%`} />
                                        </div>
                                        <h4>Terminology of the Stock Market</h4>
                                        <p> <b>➪ Stock</b></p>
                                        <p> <b>➪ Bond</b></p>
                                        <p> <b>➪ Dividend</b></p>
                                        <p> <b>➪ Bull Market</b></p>
                                        <p> <b>➪ Bear Market</b></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar3} text={`${percentages.bar3}%`} />
                                        </div>
                                        <h4>How to Trade in the Stock Market</h4>
                                        <p> <b>➪ Open a Brokerage Account</b></p>
                                        <p> <b>➪ Research</b></p>
                                        <p> <b>➪ Place an Order</b></p>
                                        <p> <b>➪ Monitor Your Investments</b></p>
                                        <p> <b>&nbsp;</b></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar4} text={`${percentages.bar4}%`} />
                                        </div>
                                        <h4>Trading Terminal Functions</h4>
                                        <p> <b>➪ Real-Time Quotes</b></p>
                                        <p> <b>➪ Order Execution</b></p>
                                        <p> <b>➪ Charts and Analysis</b></p>
                                        <p><b> ➪ News Feeds</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar5} text={`${percentages.bar5}%`} />
                                        </div>
                                        <h4>What is Cash and Future Markets?</h4>
                                        <p> <b>➪ Cash Market</b></p>
                                        <p><b> ➪ Futures Market</b></p>
                                        <p> <b>&nbsp;</b></p>
                                        <p> <b>&nbsp;</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar6} text={`${percentages.bar6}%`} />
                                        </div>
                                        <h4>What is Derivative (Future & Option)</h4>
                                        <p> <b>➪ Futures</b></p>
                                        <p> <b>➪ Options</b></p>
                                        <p> <b>&nbsp;</b></p>
                                        <p> <b>&nbsp;</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar7} text={`${percentages.bar7}%`} />
                                        </div>
                                        <h4>Option Greeks</h4>
                                        <p> <b>➪ Delta</b></p>
                                        <p> <b>➪ Gamma</b></p>
                                        <p> <b>➪ Theta</b></p>
                                        <p> <b>➪ Vega</b></p>
                                        <p> <b>➪ Rho</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar strokeWidth={15} value={percentages.bar8} text={`${percentages.bar8}%`} />
                                        </div>
                                        <h4>Futures and Options</h4>
                                        <p> <b>➪ Learn the Fundamentals</b></p>
                                        <p> <b>➪ Select a Broker</b></p>
                                        <p> <b>➪ Develop a Strategy</b></p>
                                        <p> <b>➪ Place Orders</b></p>
                                        <p> <b>➪ Control Risk</b></p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className='course-content'>
                                        <div className='circlesmall mb-2'>
                                            <CircularProgressbar value={percentages.bar9} text={`${percentages.bar9}%`} strokeWidth={15} />
                                        </div>
                                        <h4>Strategy</h4>
                                        <p> <b>➪ For Stocks</b></p>
                                        <p> <b>➪ For Options</b></p>
                                        <p> <b>➪ For Futures</b></p>
                                        <p> <b>&nbsp;</b></p>
                                        <p> <b>&nbsp;</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import { useState } from 'react';
import Link from 'next/link';
const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(12);
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const r = annualReturn / 100 / 12;
    const n = investmentPeriod;
    const FV = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    setFutureValue(FV.toFixed(2));
  };

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
            <h1>SIP Calculator</h1>
            <ul className="bread-crumb clearfix">
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>SIP Calculator</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-style-two mt-5 ">
        <div
          className="pattern-layer"

        />
        <div className="auto-container pb-5">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_two">
                <div className="image-box">
                  <figure className="image">
                    <img src="assets/images/myimages/sipcalculator.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className='sipform'>

                <div style={{ marginBottom: '10px' }}>
                  <label>Monthly Investment (Rs.): </label>
                  <input
                    className='form-group'
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Annual Return Rate (%): </label>
                  <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label>Investment Period (Months): </label>
                  <input
                    type="number"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(e.target.value)}
                  />
                </div>
                <div className='mt-4' >
                  <button className="theme-btn style-one" type="button" style={{ width: "100%" }} onClick={calculateSIP}>Calculate</button>
                </div>

                {/* <button onClick={calculateSIP}>Calculate</button> */}
                {futureValue && (
                  <div className='valuediv' style={{ marginTop: '20px' }}>
                    <h3>Future Value: Rs. {futureValue}</h3>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>



    </>

  );
};

export default SIPCalculator;

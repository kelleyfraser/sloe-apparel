import React, { useState, useEffect } from 'react';

function InterestCalculator() {
  // Keep rate as a regular constant value
  const rate = 0.2;
  // Separate input states from results and isSubmitted state
  const [totalSpent, setTotalSpent] = useState('');
  const [months, setMonths] = useState('');
  const [results, setResults] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If totalSpent or months change then hide results element from HTML
  useEffect(() => {
    setIsSubmitted(false);
  }, [totalSpent, months])

  // Calculate total paid and monthly payment based on the input state, then update state values
  const calculatePayments = (e) => {
    e.preventDefault();

    // Perform calculations
    let totalPaid = (Number(totalSpent) + (Number(totalSpent) * Number(rate))).toFixed(2);
    let monthlyPayment = (totalPaid / Number(months)).toFixed(2);

    // Set results object
    if (!isNaN(totalPaid) && !isNaN(monthlyPayment)) {
      setResults({
        totalPaid: totalPaid,
        payments: monthlyPayment,
      });

      // Set isSubmitted to true
      setIsSubmitted(true);
    }
  }

  // Render form element and conditionally render results element to display results from calculation
  return (
    <>
      <form onSubmit={calculatePayments} className="interest-calculator">
        <div className="mb-3">
          <label htmlFor="totalSpent" className="form-label">Total Spent</label>
          <input id="spent" value={totalSpent} onChange={(e) => setTotalSpent(e.target.value)} name="totalSpent" type="number" min="0" className="form-control"></input>
        </div>
        <div className="mb-3">
          <label htmlFor="months" className="form-label">Months</label>
          <input id="months" value={months} onChange={(e) => setMonths(e.target.value)} name="months" type="number" min="0" max="400" className="form-control"></input>
        </div>
        <div className="btn-container">
          <button className="btn btn-purple">Calculate</button>
        </div>
      </form>
      <div className="interest-calculator-results">
        {isSubmitted ?
          <div className="interest-results-container">
            <h2>Results</h2>
            <div className="interest-results">
              <h3>Monthly Payment:</h3>
              <p>£{results.payments}</p>
              <h3>Total Paid over {months} months:</h3>
              <p>£{results.totalPaid}</p>
            </div>
          </div> : <div className="interest-results-container"></div>}
      </div>
    </>
  );
}

export default InterestCalculator;
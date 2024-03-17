import React, { useState } from 'react';

export default function TipCalculator() {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);
  
  const totalTip = (bill * tipPercentage) / 100;
  const perPersonTip = totalTip / people;

  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        min="0"
        value={bill}
        onChange={(event) => setBill(parseInt(event.target.value))}
      />
       
      <label htmlFor="tipPercentage">Tip Percentage</label>
      <input
        id="tipPercentage"
        type="number"
        min="0"
        value={tipPercentage}
        onChange={(event) => setTipPercentage(parseInt(event.target.value))}
      />
      
      <label htmlFor="people">Number of People</label>
      <input
        id="people"
        type="number"
        min="1"
        value={people}
        onChange={(event) => setPeople(parseInt(event.target.value))}
      />
      
      <p>Total Tip: {isNaN(totalTip) ? "-" : `$${totalTip.toFixed(2)}`}</p>
      <p>Tip Per Person: {isNaN(perPersonTip) ? "-" : `$${perPersonTip.toFixed(2)}`}</p>

      {/* Footer */}
      <footer>
      This project was coded by{" "}
          <a
            href="https://github.com/mia-chou?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Fang-Yi Chou</strong>
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/mia-chou/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>open-sourced on GitHub</strong>
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-clima-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>hosted on Netlify</strong>
          </a>
      </footer>
    </div>
  );
}

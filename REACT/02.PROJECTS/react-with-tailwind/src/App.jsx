import "./App.css";
import { useState } from "react";
// import {useCurrencyInfo}
import useCurrencyInfo from "./hook/useCurrencyInfo";

function App() {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState("INR");

  const currencyInfo = useCurrencyInfo(currency);
  const options = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(amount + currencyInfo[targetCurrency]);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select>
          {options.map((currency) => (
            <options key={currency} value={currency}>
              {currency}
            </options>
          ))}
        </select>
        <button onClick={convertCurrency}>Convert</button>
        <div>Converted Amount: {convertedAmount}</div>
      </div>
    </>
  );
}

export default App;

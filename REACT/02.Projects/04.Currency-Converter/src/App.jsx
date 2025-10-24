import "./App.css";
import { useState } from "react";
// import {useCurrencyInfo}
import useCurrencyInfo from "./hook/useCurrencyInfo";
import { InputBox } from "./component";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setForm] = useState("USD");
  const [to, setTo] = useState("INR");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setForm(to);
    setTo(from);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full text-center mb-5">
            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setForm(currency)}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="w-full text-center mb-5">
            <button
              type="button"
              className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full text-center mb-5">
            <InputBox
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 active:bg-green-700 disabled:opacity-50"
          >
            Convert
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

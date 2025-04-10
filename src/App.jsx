import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

const App = function () {
  const [investment, updateDetails] = useState(INVESTMENT);
  const inputIsValid = investment.duration >= 1;
  const handleOnChange = function (identifier, value) {
    updateDetails((prevInvestment) => {
      return {
        ...prevInvestment,
        [identifier]: +value
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput investmentDetails={investment} handleEvent={handleOnChange} />
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
      {inputIsValid && <Result investmentDetails={investment} />}
    </>
  );
};

export default App;

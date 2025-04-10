import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ investmentDetails }) {
  const newData = calculateInvestmentResults(investmentDetails);
  //   const investedCapital =
  //     investmentDetails.initialInvestment + investmentDetails.annualInvestment;

  const initialInvestment =
    newData[0].valueEndOfYear -
    newData[0].interest -
    newData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {newData.map((data) => {
          //   const totalInterest = data.valueEndOfYear - investedCapital;
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;

          const investedCapital = data.valueEndOfYear - totalInterest;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

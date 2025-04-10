import { formatter, calculateInvestmentResults } from "../util/investment";

// export default function Result({ investmentDetails }) {
//   const newData = calculateInvestmentResults(investmentDetails);
//   //   const investedCapital =
//   //     investmentDetails.initialInvestment + investmentDetails.annualInvestment;

//   const initialInvestment =
//     newData[0].valueEndOfYear -
//     newData[0].interest -
//     newData[0].annualInvestment;

//   return (
//     <table id="result">
//       <thead>
//         <tr>
//           <th>Year</th>
//           <th>Investment Value</th>
//           <th>Interest (Year)</th>
//           <th>Total Interest</th>
//           <th>Invested Capital</th>
//         </tr>
//       </thead>
//       <tbody>
//         {newData.map((data) => {
//           //   const totalInterest = data.valueEndOfYear - investedCapital;
//           const totalInterest =
//             data.valueEndOfYear -
//             data.annualInvestment * data.year -
//             initialInvestment;

//           const investedCapital = data.valueEndOfYear - totalInterest;

//           return (
//             <tr key={data.year}>
//               <td>{data.year}</td>
//               <td>{formatter.format(data.valueEndOfYear)}</td>
//               <td>{formatter.format(data.interest)}</td>
//               <td>{formatter.format(totalInterest)}</td>
//               <td>{formatter.format(investedCapital)}</td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }


export default function Result({ investmentDetails }) {
  const results = [];
  calculateInvestmentResults(investmentDetails, results);

  if (results.length === 0) {
    return <p className="center">Invalid input data provided.</p>;
  }

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

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
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function UserInput({ investmentDetails, handleEvent }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="inititalInvestment"
            value={+investmentDetails.initialInvestment}
            onChange={(ev)=> handleEvent('initialInvestment', ev.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            value={+investmentDetails.annualInvestment}
            onChange={(ev)=> handleEvent('annualInvestment', ev.target.value)}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={+investmentDetails.expectedReturn}
            onChange={(ev)=> handleEvent('expectedReturn', ev.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={+investmentDetails.duration}
            onChange={(ev)=> handleEvent('duration', ev.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}

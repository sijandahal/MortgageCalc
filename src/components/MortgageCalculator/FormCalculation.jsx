import { useState } from "react";
import { FormField } from "./FormField/FormFieldWrapper.jsx";
import {MortgagePieChart} from "./Chart/MortgagePieChart.jsx";

export const FormCalulation = ({setChartData, setTableData}) => {
  const [formData, setFormData] = useState({
    MortgageAmount: null,
    DownPayment: null,
    LoanTerms: null,
    InterestRate: null,
  });

//   const [chartData, setChartData] = useState(null);




  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData); // Log the submitted data

    const MortgageAmount = formData.MortgageAmount.replace(/,/g, "");
    const DownPayment = formData.DownPayment.replace(/,/g, "");
    const LoanTerms = formData.LoanTerms.replace(/,/g, "");
    const InterestRate = formData.InterestRate.replace(/,/g, "");

    //loan payment
    const totalLoanAmount = MortgageAmount - DownPayment;
    const monthlyInterestRate = InterestRate / 12 / 100;
    const LoanTermsinMonths = LoanTerms * 12;

    const monthlyPayment = totalLoanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, LoanTermsinMonths)) / (Math.pow(1 + monthlyInterestRate, LoanTermsinMonths) - 1);

    let remainingBalance = totalLoanAmount;
    let scheduleTable = [];

     for (let i = 0; i< LoanTermsinMonths; i ++) {
            const interest = remainingBalance * monthlyInterestRate;
            const principalAmount = monthlyPayment - interest;
            remainingBalance = remainingBalance - principalAmount;

            scheduleTable.push({
                Data: new Date(2025, i),
                PrincipalAmount: principalAmount.toFixed(3),
                InterestRate: InterestRate,
                "Remaining Balance" : remainingBalance.toFixed(3),
             })
     }



    //  return scheduleTable;
    // Calculate total payment over the loan term
    const totalMortgagePayment = monthlyPayment * LoanTermsinMonths;
    
    console.log(`Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`);
    console.log(`Total Mortgage Payment: $${totalMortgagePayment.toFixed(2)}`);

    setChartData([
        { name: 'Monthly Payment', value: monthlyPayment },
        { name: 'Total Loan Payment', value: totalMortgagePayment },
    ]);

    setTableData([
        { name: 'Monthly Payment', value: monthlyPayment },
        { name: 'Total Loan Payment', value: totalMortgagePayment },
        {name: 'scheduleTable', value: scheduleTable}
    ])
    
};




  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Home Amount"
          spanIcon="$"
          inputName="MortgageAmount"
          value={formData.MortgageAmount}
          onChange={handleChange}
        />
        <FormField
          label="Down Payment"
          spanIcon="$"
          inputName="DownPayment"
          value={formData.DownPayment}
          onChange={handleChange}
        />
        <FormField
          label="Loan Terms"
          spanIcon="Years"
          inputName="LoanTerms"
          value={formData.LoanTerms}
          onChange={handleChange}
        />
        <FormField
          label="Interest rate"
          spanIcon="%"
          inputName="InterestRate"
          value={formData.InterestRate}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="relative z-0 h-12 rounded-md bg-blue-500 px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-blue-500 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
          onClick={handleSubmit}
        >
          Update
        </button>

        {/* {chartData && (
          <div className="chart-container">
            <MortgagePieChart data={chartData} />
          </div>
        )} */}
        
        </form>
    </>
  );
};

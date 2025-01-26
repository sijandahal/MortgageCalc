import { useState } from "react";
import { FormField } from "./FormField/FormFieldWrapper.jsx";

export const FormCalulation = ({ setChartData, setTableData }) => {
  const [formData, setFormData] = useState({
    MortgageAmount: null,
    DownPayment: null,
    LoanTerms: null,
    InterestRate: null,
    ExtraPaymentPerMonth: null,
    ExtraPaymentPerYear: null,
  });

  const [open, setOpen] = useState(false);
  function handlePayment() {
    setOpen(!open);
  }

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
    const ExtraPaymentPerMonth = formData.ExtraPaymentPerMonth
      ? parseFloat(formData.ExtraPaymentPerMonth.replace(/,/g, ""))
      : 0;
    const ExtraPaymentPerYear = formData.ExtraPaymentPerYear
      ? parseFloat(formData.ExtraPaymentPerYear.replace(/,/g, ""))
      : 0;

    const currentDate = new Date(); // Get the current date
    let paymentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    ); // Set to next month

    // Loan payment calculations
    const totalLoanAmount = MortgageAmount - DownPayment;
    const monthlyInterestRate = InterestRate / 12 / 100;
    const LoanTermsinMonths = LoanTerms * 12;

    const monthlyPayment =
      (totalLoanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, LoanTermsinMonths))) /
      (Math.pow(1 + monthlyInterestRate, LoanTermsinMonths) - 1);

    let remainingBalance = totalLoanAmount;
    let scheduleTable = [];
    let totalInterestPaid = 0;

    // Loop to calculate the schedule
    for (let i = 0; i < LoanTermsinMonths; i++) {
      const interest = remainingBalance * monthlyInterestRate;
      totalInterestPaid += interest;

      let principalAmount = monthlyPayment - interest;

      // Apply extra monthly payment
      if (remainingBalance > principalAmount + ExtraPaymentPerMonth) {
        remainingBalance -= principalAmount + ExtraPaymentPerMonth;
      } else {
        // If the remaining balance is less than the total payment, handle the final month
        scheduleTable.push({
          Data: paymentDate.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
          }),
          PrincipalAmount: remainingBalance.toFixed(2), // Remaining balance becomes the final principal
          InterestAmount: (remainingBalance * monthlyInterestRate).toFixed(2), // Interest on the remaining balance
          "Remaining Balance": "0.00", // Explicitly set the remaining balance to 0
        });
        remainingBalance = 0; // Set remaining balance to 0 after adding the final row
        break; // Exit the loop
      }

      scheduleTable.push({
        Data: paymentDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        }), // Format the date to show Year and Month
        PrincipalAmount: principalAmount + ExtraPaymentPerMonth, // Include Extra Payment in the Principal
        InterestRate: interest.toFixed(2),
        "Remaining Balance": remainingBalance.toFixed(3),
      });

      // Increment the payment date to the next month for the next row
      paymentDate.setMonth(paymentDate.getMonth() + 1);
    }

    // Calculate total payment over the loan term
    const totalMortgagePayment = monthlyPayment * LoanTermsinMonths;

    setChartData([
      { name: "Monthly Payment", value: monthlyPayment },
      { name: "Total Loan Payment", value: totalMortgagePayment },
    ]);

    setTableData([
      { name: "Monthly Payment", value: monthlyPayment },
      { name: "Total Loan Payment", value: totalMortgagePayment },
      { name: "scheduleTable", value: scheduleTable },
    ]);
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

        <div className="button__wrapper my-10 ">
          <div
            onClick={handlePayment}
            className="flex gap-3cursor-pointer items-center justify-center w-full font-bold text-indigo-600 hover:underline "
          >
            Add Extra Payments
            <span
              className={`sdfsdf${open ? "asfsdfdsf" : "asfsdfsdfsdfsdfdsf"}`}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#4f46e5"
                viewBox="0 0 14 8"
              >
                <path
                  stroke="current"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                ></path>
              </svg>
            </span>
          </div>
          {open ? (
            <>
              <FormField
                label="Extra Payment Per Month"
                spanIcon="$"
                inputName="ExtraPaymentPerMonth"
                value={formData.ExtraPaymentPerMonth}
                onChange={handleChange}
              />

              <FormField
                label="Extra Payment Per Year"
                spanIcon="$"
                inputName="ExtraPaymentPerYear"
                value={formData.ExtraPaymentPerYear}
                onChange={handleChange}
              />
            </>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="relative z-0 w-full h-12 rounded-md bg-indigo-600  px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-indigo-600  hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
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

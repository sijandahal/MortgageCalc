import { useState, useEffect } from "react";
import { FormField } from "./FormField/FormFieldWrapper.jsx";

export const FormCalulation = ({ setChartData, setTableData, onFormSubmit }) => {

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("mortgageFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          MortgageAmount: "200000",
          DownPayment: "",
          LoanTerms: "",
          InterestRate: "",
          ExtraPaymentPerMonth: "",
          ExtraPaymentPerYear: "",
        };
  });

console.log("Initial formData state:", formData);

  const [open, setOpen] = useState(false);

  // Save formData to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("mortgageFormData", JSON.stringify(formData));
  }, [formData]);

  function handlePayment() {
    setOpen(!open);
  }

  
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData, [name]: value };
      console.log("Updated formData:", updatedFormData);
      return updatedFormData;
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("mortgageFormData", JSON.stringify(formData));
    onFormSubmit();
    console.log("Form Data Submitted:", formData); // Log the submitted data

    const MortgageAmount = formData.MortgageAmount
      ? parseFloat(formData.MortgageAmount.replace(/,/g, ""))
      : 0;
    const DownPayment = formData.DownPayment
      ? parseFloat(formData.DownPayment.replace(/,/g, ""))
      : 0;
    const LoanTerms = formData.LoanTerms
      ? parseFloat(formData.LoanTerms.replace(/,/g, ""))
      : 0;
    const InterestRate = formData.InterestRate ? parseFloat(formData.InterestRate.replace(/,/g, "")) : 0;
    const ExtraPaymentPerMonth = formData.ExtraPaymentPerMonth
      ? parseFloat(formData.ExtraPaymentPerMonth.replace(/,/g, ""))
      : 0;
    const ExtraPaymentPerYear = formData.ExtraPaymentPerYear
      ? parseFloat(formData.ExtraPaymentPerYear.replace(/,/g, ""))
      : 0;

    let annualExtraPayment = ExtraPaymentPerYear / 12; // Convert yearly extra to monthly


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
    
      // Apply extra monthly and yearly payments
      let totalExtraPayment = ExtraPaymentPerMonth + annualExtraPayment;
    
      if (remainingBalance > principalAmount + totalExtraPayment) {
        remainingBalance -= principalAmount + totalExtraPayment;
      } else {
        // Handle final month if remaining balance is less than total payment
        scheduleTable.push({
          Data: paymentDate.toLocaleDateString(undefined, { year: "numeric", month: "long" }),
          PrincipalAmount: remainingBalance.toFixed(2),
          InterestAmount: (remainingBalance * monthlyInterestRate).toFixed(2),
          "Remaining Balance": "0.00",
        });
        remainingBalance = 0;
        break;
      }
    
      scheduleTable.push({
        Data: paymentDate.toLocaleDateString(undefined, { year: "numeric", month: "long" }),
        PrincipalAmount: (principalAmount + totalExtraPayment).toFixed(2),
        InterestRate: interest.toFixed(2),
        "Remaining Balance": remainingBalance.toFixed(3),
      });
    
      // Move to the next month
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
          value={formData.MortgageAmount ||  ""
          }
          onChange={handleChange}
        />
        <FormField
          label="Down Payment"
          spanIcon="$"
          inputName="DownPayment"
          value={formData.DownPayment ||  ""}
          onChange={handleChange}
        />
        <FormField
          label="Loan Terms"
          spanIcon="Years"
          inputName="LoanTerms"
          value={formData.LoanTerms ||  ""}
          onChange={handleChange}
        />
        <FormField
          label="Interest rate"
          spanIcon="%"
          inputName="InterestRate"
          value={formData.InterestRate ||  ""}
          onChange={handleChange}
        />

        <div className="button__wrapper my-10 ">
          <div
            onClick={handlePayment}
            className="flex gap-3cursor-pointer items-center justify-center w-full font-bold text-[#124E66] hover:underline "
          >
            Add Extra Payments
            <span
              className={`sdfsdf${open ? "asfsdfdsf" : "asfsdfsdfsdfsdfdsf"}`}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="#124E66"
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
                value={formData.ExtraPaymentPerMonth || ""}
                onChange={handleChange}
              />

              <FormField
                label="Extra Payment Per Year"
                spanIcon="$"
                inputName="ExtraPaymentPerYear"
                value={formData.ExtraPaymentPerYear || ""}
                onChange={handleChange}
              />
            </>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="relative z-0 w-full h-12 rounded-md bg-[#124E66]  px-6 text-neutral-50 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-md after:bg-[#124E66]  hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500"
        >
          Update
        </button>
      </form>
    </>
  );
};

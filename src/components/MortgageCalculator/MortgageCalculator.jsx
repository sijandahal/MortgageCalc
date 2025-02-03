import { useState, useEffect } from "react";
import { FormCalulation } from "./FormCalculation.jsx";
import { MortgagePieChart } from "./Chart/MortgagePieChart.jsx";
import { AmortizationTable } from "./Table/AmortizationTable.jsx";
export const MortgageCalculator = () => {
  const [view, setView] = useState(""); // State to control which view is displayed
  const [chartData, setChartData] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCompareMessage, setShowCompareMessage] = useState(false);

  useEffect(() => {
    // Check if this is a new tab
    if (localStorage.getItem("isNewTab")) {
      setShowCompareMessage(true);
      localStorage.removeItem("isNewTab");
    }
  }, []);
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const handleCompareAnotherMortgage = () => {
    // Set a flag in localStorage to indicate the page was opened in a new tab
    localStorage.setItem("isNewTab", "true");
    window.open(window.location.href, "_blank");
  };

  return (
    <section className="container m-auto py-8">
      <h1 className="text-4xl font-bold tracking-tight  sm:text-8xl my-16 text-[#124E66]  ">
        Mortgage Calculator
      </h1>

      {showCompareMessage && (
        <div className="bg-yellow-100 text-[#124E66] p-4 mb-4">
          Please compare against your previous mortgage.
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-12 pt-0 md:pt-7 gap-6 xl:gap-8">
        <div className="md:col-span-4 xl:col-span-3 px-4 xl:px-0">
          <FormCalulation
            setChartData={setChartData}
            setTableData={setTableData}
            onFormSubmit={handleFormSubmit}
          />
          {
            !showCompareMessage &&  (
              <button
            onClick={handleCompareAnotherMortgage}
            className="your-button-class"
          >
            Compare Another Mortgage
          </button>
            )
          }
          
        </div>
        <div
          className={`md:col-span-8 xl:col-span-9 md:px-5 ${
            formSubmitted ? "" : "hidden"
          }`}
        >
          <div className="button-group mt-4 border-b-2 border-black  flex gap-4">
            <button
              onClick={() => handleViewChange("paymentBreakdown")}
              className={`px-4 py-3 transition-all hover:bg-[#124E66]  hover:text-white ${
                view === "paymentBreakdown" ? "   bg-[#124E66]  text-white" : ""
              }`}
            >
              Payment Breakdown
            </button>
            <button
              onClick={() => handleViewChange("amortizationTable")}
              className={` px-4 py-3 hover:bg-[#124E66]  hover:text-white${
                view === "amortizationTable"
                  ? "px-4 bg-[#124E66]  text-white"
                  : ""
              }`}
            >
              Amortization Table
            </button>
          </div>

          <div className=" shadow-md py-5 px-8 h-full">
            <div className="content flex items-end">
              {view === "paymentBreakdown" && chartData && (
                <MortgagePieChart data={chartData} className="text-left" />
              )}
              <div className="content flex-1">
                {chartData?.map((data, index) => (
                  <div key={index} className="flex border-b border-gray-300">
                    <div className="w-1/2 p-4">{data.name}</div>
                    <div className="w-1/2 p-4 text-right font-semibold">
                      ${data.value.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {view === "amortizationTable" && (
              <AmortizationTable data={tableData} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

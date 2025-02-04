import { useState, useEffect } from "react";
import { FormCalulation } from "./FormCalculation.jsx";
import { MortgagePieChart } from "./Chart/MortgagePieChart.jsx";
import { AmortizationTable } from "./Table/AmortizationTable.jsx";
import { Profile } from "./Profile/Profile.jsx";
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
      <Profile/>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-8xl my-16 text-[#124E66]  ">
          Mortgage Calculator
        </h1>
        {!showCompareMessage && (
          <>
            {/* <button
            onClick={handleCompareAnotherMortgage}
            className="your-button-class"
          >
            Compare Another Mortgage
          </button> */}
            <button
              onClick={handleCompareAnotherMortgage}
              className="relative inline-block  group"
            >
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-cyan-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#124E66]   group-hover:-rotate-180 group-hover:ml-0 group-hover:w-full ease"></span>
                <span class="relative">Compare Another Mortgage</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#124E66]   rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </>
        )}
      </div>

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

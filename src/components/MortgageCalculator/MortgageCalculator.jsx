import { useState } from "react";
import { FormField } from "./FormField/FormFieldWrapper.jsx";
import { FormCalulation } from "./FormCalculation.jsx";
import { MortgagePieChart } from "./Chart/MortgagePieChart.jsx";
import { AmortizationTable } from "./Table/AmortizationTable.jsx";
export const MortgageCalculator = () => {
  const [view, setView] = useState('');  // State to control which view is displayed
  const [chartData, setChartData] = useState(null);
  const [tableData, setTableData] = useState(null);

  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  return (
    <section className="container m-auto py-8">
      <h1 className="text-6xl font-bold">Mortgage Calculator</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 pt-0 md:pt-7 gap-6 xl:gap-8">
        <div className="md:col-span-4 xl:col-span-3 px-4 xl:px-0">
          <FormCalulation setChartData={setChartData} setTableData={setTableData}/>
        </div>
        <div className="md:col-span-8 xl:col-span-9 md:px-5">
        <div className="button-group mt-4 border-b-2 border-black  flex gap-4">
            <button
              onClick={() => handleViewChange('paymentBreakdown')}
                 className= {`px-4 py-3 transition-all hover:bg-indigo-600  hover:text-white ${view === "paymentBreakdown" ? '   bg-indigo-600  text-white' : ""}`}
            >
              Payment Breakdown
            </button>
            <button
              onClick={() => handleViewChange('amortizationTable')}
              className= {` px-4 py-3 hover:bg-indigo-600  hover:text-white${ view === "amortizationTable" ? 'px-4 bg-indigo-600  text-white' : "" }`}
            >
              Amortization Table
            </button>
          </div>

          <div className=" shadow-md py-5 px-8 h-full">
            <div className="content flex items-end">

            {view === 'paymentBreakdown' && chartData && 
            <MortgagePieChart data={chartData} className = "text-left" />}
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
            {view === 'amortizationTable' && <AmortizationTable data = {tableData}/>}
              </div>
         
        </div>
      </div>
    </section>
  );
};

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
        <div className="button-group mt-4">
            <button
              onClick={() => handleViewChange('paymentBreakdown')}
              className="mr-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Payment Breakdown
            </button>
            <button
              onClick={() => handleViewChange('amortizationTable')}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Amortization Table
            </button>
          </div>

          <div className="mt-6">
            <div className="content">

            {view === 'paymentBreakdown' && chartData && <MortgagePieChart data={chartData} />}
            </div>
            {view === 'amortizationTable' && <AmortizationTable data = {tableData}/>}
              </div>
          <div className="content">
            {chartData?.map((data, index) => (
              <div key={index} className="flex border-b border-gray-300">
                <div className="w-1/2 p-4">{data.name}</div>
                <div className="w-1/2 p-4 text-right font-semibold">
                  ${data.value.toFixed(2)}
                </div>
              </div>
            ))}
{/* 
{chartData && (
          <div className="chart-container">
            <MortgagePieChart data={chartData} />
          </div>
        )} */}
            {/* {<MortgagePieChart data={chartData} />} */}

          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Csv } from "../CSV/Csv";

export const AmortizationTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 10; // Number of rows per page

  if (!data) {
    return <p className="text-red-500">No data available</p>;
  }

  // Extract the scheduleTable from the data
  const scheduleTable = data.find(
    (item) => item.name === "scheduleTable"
  )?.value;

  if (!scheduleTable) {
    return <p className="text-red-500">Schedule data not found</p>;
  }

  // Calculate paginated data
  const offset = currentPage * rowsPerPage;
  const currentRows = scheduleTable.slice(offset, offset + rowsPerPage);
  const pageCount = Math.ceil(scheduleTable.length / rowsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="header__content sm:px-6 lg:px-8 mb-5">
          <h2 className="text-5xl font-bold ">
            Amortization for mortgage loan
          </h2>
          <p className="text-gray-500 text-xl font-medium mt-4">
            Amortization is paying off debt over time in equal installments. As
            the term of your mortgage loan progresses, a larger share of your
            payment goes toward paying down the principal until the loan is paid
            in full at the end of your term.
          </p>
        </div>

        {

        }
        
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left  font-semibold text-white sm:pl-3 bg-[#124E66] "
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left  font-semibold text-white sm:pl-3 bg-[#124E66]"
                >
                  Principal Amount
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left  font-semibold text-white sm:pl-3 bg-[#124E66]"
                >
                  Interest
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left  font-semibold text-white sm:pl-3 bg-[#124E66]"
                >
                  Remaining Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-blue-50 className="even:bg-gray-50"`}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3  font-medium text-gray-900 sm:pl-3">
                    {new Date(row.Data).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                    })}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3  font-medium text-gray-900 sm:pl-3">
                    ${parseFloat(row.PrincipalAmount).toFixed(2)}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3  font-medium text-gray-900 sm:pl-3">
                    {row.InterestRate}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3  font-medium text-gray-900 sm:pl-3">
                    ${parseFloat(row["Remaining Balance"]).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Controls */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex  mt-4 space-x-2 justify-end"
        pageClassName="relative z-10 inline-flex items-center bg-[#124E66] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        pageLinkClassName="text-gray-700"
        previousClassName="relative z-10 inline-flex items-center bg-[#124E66] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        nextClassName="relative z-10 inline-flex items-center bg-[#124E66] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
        disabledClassName="opacity-50 pointer-events-none"
        activeClassName="bg-blue-500 text-white"
        breakLabel={"..."}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
      />

    <Csv data={data}/>
    </div>
  );
};

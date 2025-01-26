import { CSVLink } from "react-csv";

export const Csv = ({ data }) => {
  if (!data) {
    return <p className="text-red-500">No data available</p>;
  }

  // Find scheduleTable from the provided data
  const scheduleTable = data.find((item) => item.name === "scheduleTable")?.value;

  if (!scheduleTable || scheduleTable.length === 0) {
    return <p className="text-red-500">No schedule data available</p>;
  }

  // Prepare the CSV headers and data
  const headers = ["Date", "PrincipalAmount", "InterestAmount", "Remaining Balance"];
  const csvData = [headers, ...scheduleTable.map((row) => Object.values(row))];

  return (
    <div>
      <CSVLink data={csvData} filename="scheduleTable.csv" className="text-blue-500 underline">
        Download Schedule Table
      </CSVLink>
    </div>
  );
};

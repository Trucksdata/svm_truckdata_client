import React from "react";

const renderOptionValues = (rowData, optionKey) => {
  const optionValues = Array.isArray(rowData[optionKey])
    ? rowData[optionKey].map((item) => item?.value)
    : [];

  return optionValues.join(", ");
};

const CompareDataTable = ({ hasVariant, tableData }) => {
  const isClient = typeof window !== "undefined";
  const screenWidth = isClient ? window.innerWidth : null;
  const isMobScreen = screenWidth < 576;

  return (
    <div className="overflow-scroll scroll-bar-1">
      <table className="table-3 -border-bottom col-12">
        {hasVariant && (
          <thead className="bg-light-2">
            <tr>
              <th></th>
              {hasVariant && <th>Vehicle 1</th>}
              {hasVariant && <th>Vehicle 2</th>}
              {hasVariant && !isMobScreen && <th>Vehicle 3</th>}
            </tr>
          </thead>
        )}

        <tbody>
          {tableData?.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.item}</td>
                <td>{renderOptionValues(row, "option_one")}</td>
                <td>{renderOptionValues(row, "option_two")}</td>
                {!isMobScreen && (
                  <td>{renderOptionValues(row, "option_three")}</td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CompareDataTable;

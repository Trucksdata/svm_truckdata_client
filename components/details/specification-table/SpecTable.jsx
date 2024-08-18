import { getHighestDigit } from "../../../utils/getHighestNum";

function generateNumberArray(n) {
  return Array.from({ length: n }, (_, index) => index + 1);
}

const SpecTable = ({ hasVariant, tableData, vehicleSpecs, specId }) => {
  const specification = vehicleSpecs?.filter(
    (item) => item?.specification?.specification_category_id === specId
  );

  function getCounts(data) {
    return data.map((item) => {
      if (item.option_five !== "-") {
        return 5;
      }
      if (item.option_four !== "-") {
        return 4;
      } else if (item.option_three !== "-") {
        return 3;
      } else if (item.option_two !== "-") {
        return 2;
      } else if (item.option_one !== "-") {
        return 1;
      } else {
        return 0; // Return 0 if none of the options have a value
      }
    });
  }

  const counts = getCounts(tableData);
  const highest = getHighestDigit(counts);
  const numArray = generateNumberArray(highest);

  const resultArray = numArray;

  return (
    <div className="overflow-scroll scroll-bar-1">
      <table className="table-3 -border-bottom col-12">
        {hasVariant && (
          <thead className="bg-light-2">
            <tr>
              <th></th>
              {resultArray?.map((item, i) => {
                return <th key={i}>Option {i + 1}</th>;
              })}
            </tr>
          </thead>
        )}

        <tbody>
          {tableData?.map((row, index) => {
            const optionsRow = hasVariant
              ? [
                  row?.option_one,
                  row?.option_two,
                  row?.option_three,
                  row?.option_four,
                  row?.option_five,
                ]
                  ?.filter(Boolean)
                  .filter((item) => item !== undefined && item !== "-")
              : [row?.option_one]?.filter(Boolean);

            return (
              <tr key={index}>
                <td>{row.item}</td>
                {optionsRow.map((item) => {
                  return Array.isArray(item) ? (
                    item?.map((val) => {
                      return <td key={val}>{val.value ?? "-"}</td>;
                    })
                  ) : (
                    <td key={item}>{item ?? "-"}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SpecTable;

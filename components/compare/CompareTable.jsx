import React, { useState } from "react";
import CompareDataTable from "./CompareDataTable";
import { getSpecCompareData } from "../../utils/getSpecCompareData";
import useGetSpecificationCategories from "../../services/specs/useGetSpecCategories";

const CompareTable = ({ compareData, compared }) => {
  const { data: categories } = useGetSpecificationCategories();
  const specCategory = categories?.data?.data || [];

  const specContent = getSpecCompareData(compareData, specCategory, false);
  const [expand, setExpand] = useState(false);
  return (
    <>
      <div className="accordion lg:lh-1" id="accordionExample">
        <div className="accordion-item border-top-0 border-start-0 border-end-0">
          <h2 className="accordion-header text-wrap" id="headingOne">
            <div className="d-flex shadow-none bg-white text-black title_fontsize justify-content-between px-20 py-20">
              <div>Compare Result</div>
              <button
                className="bg-white text-black"
                onClick={() => setExpand(!expand)}
              >
                {!expand ? <u>Expand all</u> : <u>Collapse all</u>}
              </button>
            </div>
          </h2>
        </div>
        {specContent?.map((item, i) => (
          <div
            key={i}
            className={
              i === specContent.length - 1
                ? "accordion-item border-top-0 border-start-0 border-end-0 border-bottom-0"
                : "accordion-item border-top-0 border-start-0 border-end-0"
            }
          >
            <h2 className="accordion-header text-wrap " id="headingOne">
              <button
                className="d-flex accordion-button shadow-none bg-white text-black title_fontsize"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${item.collapseTarget}`}
                aria-expanded="true"
                // aria-controls="collapseOne"
              >
                <div className="me-0" style={{ width: "50px" }}>
                  <img src={item.icon} alt={item.id} width="50px" />
                </div>
                <div className="mx-50 w-75" style={{ paddingLeft: "5%" }}>
                  {item.title}
                </div>
              </button>
            </h2>
            <div
              id={item.collapseTarget}
              className={`accordion-collapse collapse ${expand ? "show" : ""}`}
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                <div className="w-100">
                  <CompareDataTable
                    tableData={item.tableData}
                    hasVariant={item.hasVariant}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompareTable;

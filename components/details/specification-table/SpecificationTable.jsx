import React from "react";
import SpecTable from "./SpecTable";
import { getSpecData } from "../../../utils/getSpecData";
import { getSpecCompareData } from "../../../utils/getSpecCompareData";
import useGetSpecificationCategories from "../../../services/specs/useGetSpecCategories";

const SpecificationTable = ({ vehicleData, expand, showingOption }) => {
  // const specContent = getSpecData();
  const { data: categories } = useGetSpecificationCategories();
  const categoriesData = categories?.data?.data || [];
  const specContent = getSpecCompareData([vehicleData], categoriesData, true);

  return (
    <>
      <div class="accordion lg:lh-1" id="accordionExample">
        {specContent?.map((item, i) => {
          let _tableData = [];
          if (item.title == "Vehicle Dimensions") {
            _tableData = item.tableData.map((x) => {
              return { item: x.item, option_1: x[showingOption] };
            });
          }
          return (
            <div
              key={i}
              class={
                i === specContent.length - 1
                  ? "accordion-item border-top-0 border-start-0 border-end-0 border-bottom-0"
                  : "accordion-item border-top-0 border-start-0 border-end-0"
              }
            >
              <h2 class="accordion-header text-wrap " id="headingOne">
                <button
                  className="d-flex accordion-button shadow-none bg-white text-black title_fontsize"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${item.collapseTarget}`}
                  aria-expanded="true"
                >
                  <div className="me-0" style={{ width: "50px" }}>
                    <img src={item.icon} alt={item.id} />
                  </div>
                  <div className="mx-50 w-75" style={{ paddingLeft: "5%" }}>
                    {item.title}
                  </div>
                </button>
              </h2>
              <div
                id={item.collapseTarget}
                // class="accordion-collapse collapse"
                className={`accordion-collapse collapse ${
                  expand ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body ">
                  <div className="w-100">
                    <SpecTable
                      tableData={
                        item.title == "Vehicle Dimensions"
                          ? _tableData
                          : item.tableData
                      }
                      hasVariant={item.hasVariant}
                      vehicleSpecs={vehicleData?.vehicle_specs}
                      specId={item.specId}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SpecificationTable;

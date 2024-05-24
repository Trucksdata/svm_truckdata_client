import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const VariantFilter = ({ sideParams, setSideParams, options, specId }) => {
  const variantData = options?.map((option) => {
    return {
      label: option?.option,
      value: option?.option,
    };
  });

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Variant Options</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          filters={variantData}
          setSideParams={setSideParams}
          sideParams={sideParams}
          label={"variant_options"}
          specId={specId}
        />
      </div>
    </div>
  );
};

export default VariantFilter;

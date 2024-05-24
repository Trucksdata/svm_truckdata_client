import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";



const AxelFilter = ({ sideParams, setSideParams, options, specId }) => {
  const axelData = options?.map((option) => {

    return {
      label: option?.option,
      value: option?.option
    }
  }) || []


  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Axle Configuration</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          setSideParams={setSideParams}
          sideParams={sideParams}
          filters={axelData}
          label={"axle_configuration"}
          specId={specId}
        />
      </div>
    </div>
  );
};

export default AxelFilter;

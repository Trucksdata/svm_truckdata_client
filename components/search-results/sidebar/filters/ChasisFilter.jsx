import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

const ChasisFilter = ({ sideParams, setSideParams, options,specId }) => {
  const chasisData = options?.map((option) => {
    return {
      label: option?.option,
      value: option?.option,
    };
  });

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Chassis Options</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          sideParams={sideParams}
          setSideParams={setSideParams}
          filters={chasisData}
          label={"chassis_option"}
          specId={specId}
        />
      </div>
    </div>
  );
};

export default ChasisFilter;

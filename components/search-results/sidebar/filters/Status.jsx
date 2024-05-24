import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";

function Status({ sideParams, setSideParams, options, specId }) {
  const statusData = options?.map((option) => {
    return {
      value: option?.option,
      label: option?.option,
    };
  });

  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Status</h5>
      <div className="sidebar-checkbox">
        <ButtonFilter
          setSideParams={setSideParams}
          sideParams={sideParams}
          filters={statusData}
          label={"status"}
          specId={specId}
        />
      </div>
    </div>
  );
}

export default Status;

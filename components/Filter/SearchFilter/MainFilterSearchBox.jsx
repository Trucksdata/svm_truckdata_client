import { useState } from "react";
import FilterTabs from "./FilterTabs";

const MainFilterSearchBox = (props) => {
  const { manufacturerData, vehicleData } = props;

  return (
    <>
      <div className="pl-2 bg-white mainSearch col-2 -w-1070 mx-auto pl-20 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1">
        <div className="ps-7 bg-blue pt-6">
          <FilterTabs 
          manufacturerData={manufacturerData}
          vehicleData={vehicleData}
          />
        </div>
      </div>
    </>
  );
};

export default MainFilterSearchBox;

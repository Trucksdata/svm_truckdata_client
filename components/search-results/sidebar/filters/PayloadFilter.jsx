import React from "react";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";
import PriceSlider from "./PriceSlider";
import PayloadSlider from "./PayloadSlider";


const PayloadFilter = ({sideParams,setSideParams, specId}) => {
  return (
    <div className="sidebar__item">
      <h5 className="text-18 fw-500 mb-10">Payload (Range)(Kg)</h5>
      <div className="sidebar-checkbox">
        <PayloadSlider sideParams={sideParams} setSideParams={setSideParams} specId={specId} label={'payload_range'} />
      </div>
    </div>
  );
};

export default PayloadFilter;

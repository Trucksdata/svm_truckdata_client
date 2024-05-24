import React from "react";
import FilterCheckbox from "./FilterCheckbox";
import ButtonFilter from "../../../Filter/SearchFilter/FilterButtons";
import InputRange from "react-input-range";
import { useState } from "react";

const LoadingSlider = ({ sideParams, setSideParams, label, specId }) => {
  const [loading, setLoading] = useState({
    value: { min: 0, max: 40 },
  });

  const handleOnChange = (value) => {
    setLoading({ value });
    setSideParams({
      ...sideParams,
      [label]: value,
      loading_capacity_spec_id: specId,
    });
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">{loading.value.min}</span>-
          <span className="js-upper mx-1">{loading.value.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={0}
          maxValue={40}
          value={loading.value}
          step={2}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

const LoadingSpanFilters = ({ sideParams, setSideParams, options, specId }) => {
  return (
    <div className="sidebar__item pb-30">
      <h5 className="text-18 fw-500 mb-10">
        Loading Span (ft) / Loading Capacity (Cu.M)
      </h5>
      <div className="row x-gap-10 y-gap-30">
        <div className="col-12">
          <LoadingSlider
            sideParams={sideParams}
            setSideParams={setSideParams}
            label={"loading_capacity"}
            specId={specId}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpanFilters;

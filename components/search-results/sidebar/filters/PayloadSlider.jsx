import React, { useState } from "react";
import InputRange from "react-input-range";

function PayloadSlider({ sideParams, setSideParams, label, specId }) {
  const [payload, setPayload] = useState({
    value: { min: 60, max: 60000 },
  });

  const handleOnChange = (value) => {
    setPayload({ value });
    setSideParams({
      ...sideParams,
      [label]: value,
      [`${label}_spec_id`]: specId,
    });
  };
  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">{payload.value.min}</span>-
          <span className="js-upper mx-1">{payload.value.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={60}
          maxValue={60000}
          step={10000}
          value={payload.value}
          onChange={(value) => handleOnChange(value)}
         
        />
      </div>
    </div>
  );
}

export default PayloadSlider;

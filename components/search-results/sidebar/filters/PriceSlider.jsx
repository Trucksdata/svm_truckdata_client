import React from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import numeral from "numeral";

const PriceSlider = ({ sideParams, setSideParams, label }) => {
  const [price, setPrice] = useState({
    value: { min: 10000, max: 9500000 },
  });

  const handleOnChange = (value) => {
    setPrice({ value });
    setSideParams({ ...sideParams, [label]: value });
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">
            ₹{numeral(price.value.min / 100000).format("0,0.00") + " lakh"}
          </span>
          -
          <span className="js-upper mx-1">
            ₹{numeral(price.value.max / 100000).format("0,0.00") + " lakh"}
          </span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ``}
          minValue={100000}
          maxValue={9500000}
          step={200000}
          value={price.value}
          onChange={(value) => handleOnChange(value)}
        />
      </div>
    </div>
  );
};

export default PriceSlider;

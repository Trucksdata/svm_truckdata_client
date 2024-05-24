import React, { useState } from "react";
import CompareInput from "./CompareInput";
import CompareInputSeperate from "./CompareSelectField";
import CompareMobileBodyField from "./mobile/CompareMobileBodyField";
import CompareFields from "./CompareFields";

const CompareBoxMobile = ({
  vehicle,
  setVehicle,
  handleCompare,
  isFetched,
}) => {
  const vehicleNames = vehicle
    ?.map((item) => item?.vehicle?.title)
    ?.filter(Boolean);
  const defaultCompareText = `Compare two trucks of your choice with the best truck comparison tool in India . You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`;
  const customCompareText = `Compare ${vehicleNames?.join(
    " vs "
  )} variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more`;

  const compareText = vehicleNames?.length
    ? customCompareText
    : defaultCompareText;
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: compareText,
    delayAnimation: "300",
  };

  return (
    <div
      className="col-lg-12    d-md-none"
      key={item.id}
      data-aos="fade"
      data-aos-delay={300}
    >
      <div className="rounded-4 layout-pt-md  layout-pb-md   view_bordershadow bg-white  ">
        <h5 className="pl-10">Select two vehicle models to compare.</h5>
        <div className="d-flex  y-gap-15 d-xs-none d-md-block ">
          {vehicle?.map((obj, index) => {
            return (
              <CompareFields
                key={index}
                item={obj}
                setVehicle={setVehicle}
                vehicle={vehicle}
                isFetched={isFetched}
              />
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button onClick={handleCompare} className="btn btn-primary w-50  ">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareBoxMobile;

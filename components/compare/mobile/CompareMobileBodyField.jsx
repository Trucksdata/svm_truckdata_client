import React from "react";
import CompareInput from "../CompareInput";

const CompareMobileBodyField = ({ index, vehicle, setVehicle }) => {
  return (
    <div className="rounded-4  ">
      <CompareInput
        index={index}
        setVehicle={setVehicle}
        vehicle={vehicle}
      />
    </div>
  );
};

export default CompareMobileBodyField;

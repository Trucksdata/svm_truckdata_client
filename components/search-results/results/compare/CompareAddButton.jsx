import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCompare,
  removeFromCompare,
} from "../../../../features/compare/compareSlice";

const CompareAddButton = ({ vehicle, showError, setShow }) => {
  const compareItems = useSelector((store) => store.compare.vehicles);
  const isVehicleExists = compareItems.some((item) => item.id === vehicle.id);

  const dispatch = useDispatch();

  const handleToggle = () => {
    if (isVehicleExists) {
      dispatch(removeFromCompare(vehicle.id));
    } 
    else if (typeof window !== "undefined" && window.innerWidth >= 992 && compareItems.length <= 2) {
      dispatch(addToCompare(vehicle));
    }
    else if (typeof window !== "undefined" && window.innerWidth < 992 && compareItems.length <= 1) {
      dispatch(addToCompare(vehicle));
    } 
    else {
      showError();
    }
    setShow(compareItems.length !== 0);
  };

  return (
    <button className="btn border-primary text-blue-1 " onClick={handleToggle}>
      <div className="custom-radio">
        {isVehicleExists ? (
          <span>&#10003; Added to Compare</span>
        ) : (
          <span>Add to Compare</span>
        )}
      </div>
    </button>
  );
};

export default CompareAddButton;

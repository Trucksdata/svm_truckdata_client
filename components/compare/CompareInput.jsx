import React, { useState } from "react";
import ComparePlusButton from "./ComparePlusButton";
import Image from "next/image";
import useVehicleTypes from "../../services/useVehicleTypes";
import { useGetVehiclesInfinite } from "../../services/vehicles/useGetVehicles";
import getFlatData from "../../utils/getFlatData";
import { useInView } from "react-intersection-observer";
import { useReloadOnPageScroll } from "../../hooks/useReloadOnPageScroll";

const CompareInput = ({ index, isManufacturer, vehicle, setVehicle }) => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { data: vehicleTypes } = useVehicleTypes();
  const vehicleData = vehicleTypes?.data?.data;

  const dataToMap = vehicleData;


  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
   
  };

  const currentItem = vehicle?.find((item) => item.index === index);
  const logo = currentItem?.vehicle
    ? currentItem?.vehicle?.images?.[0]?.thumbnail
    : "";

  return (
    <></>
  );
};

export default CompareInput;

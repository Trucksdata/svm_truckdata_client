import React, { useEffect, useState } from "react";
import { CompareModelInput } from "./CompareModelInputs";
import ComparePlusButton from "./ComparePlusButton";
import CompareInputSeperate from "./CompareSelectField";
import CompareMfgSelectField from "./CompareMfgSelectField";
import { useRouter } from "next/router";

const CompareFields = ({ item, vehicle, setVehicle, isFetched }) => {
  const [vehicleId, setVehicleId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchModelValue, setSearchModelValue] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [selectedMfg, setSelectedMfg] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  const router = useRouter();
  const { vehicle_one, vehicle_two, vehicle_three } = router?.query || {};
  const hasIds =
    Boolean(vehicle_one) || Boolean(vehicle_two) || Boolean(vehicle_three);

  useEffect(() => {
    if (hasIds && isFetched) {
      setSearchModelValue(vehicle[item.index - 1]?.vehicle?.title ?? "");
      setSelectedModel(vehicle[item.index - 1]?.vehicle?.title ?? "");
      setSearchValue(
        vehicle[item.index - 1]?.vehicle?.vehicle_type?.name ?? ""
      );
      setSelectedBodyType(
        vehicle[item.index - 1]?.vehicle?.vehicle_type?.name ?? ""
      );
    }
  }, [hasIds, isFetched, item.index, vehicle]);

  function handleClear() {
    setVehicle((prevVehicle) => {
      const updatedVehicle = prevVehicle.map((prev) => {
        if (prev.index === item.index) {
          return { ...prev, vehicle: [] };
        } else {
          return prev;
        }
      });

      return updatedVehicle;
    });
    setSearchValue("");
    setSearchModelValue("");
  }

  return (
    <div className="d-flex gap-1 flex-column justify-center h-full compare_padding py-20 ">
      <div className="rounded-4">
        <ComparePlusButton
          index={item.index}
          vehicle={vehicle}
          handleClear={handleClear}
        />
      </div>
      <div className="rounded-4 ">
        <CompareInputSeperate
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          className="body-type"
          setVehicleId={setVehicleId}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedItem={selectedBodyType}
          setSelectedItem={setSelectedBodyType}
        />
      </div>
      <div className="rounded-4 ">
        <CompareMfgSelectField
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          className="body-type"
          setVehicleId={setVehicleId}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          selectedItem={selectedMfg}
          setSelectedItem={setSelectedMfg}
        />
      </div>
      <div className="rounded-4 ">
        <CompareModelInput
          index={item.index}
          vehicle={vehicle}
          setVehicle={setVehicle}
          vehicleId={vehicleId}
          className="vehicle-select"
          searchModelValue={searchModelValue}
          setSearchModelValue={setSearchModelValue}
          selectedItem={selectedModel}
          setSelectedItem={setSelectedModel}
          selectedMfg={selectedMfg}
        />
      </div>
    </div>
  );
};

export default CompareFields;

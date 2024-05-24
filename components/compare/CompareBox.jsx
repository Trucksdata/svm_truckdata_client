import React, { useEffect, useRef, useState } from "react";
import CompareVehicles from "./CompareVehicles";
import CompareTable from "./CompareTable";
import toast, { useToaster } from "react-hot-toast";
import Spinner from "../loading/Spinner";
import { useRouter } from "next/router";
import CompareFields from "./CompareFields";
import CompareBoxMobile from "../compare/CompareBoxMobile";
import useGetMultipleVehicleToCompare from "../../services/compare/useGetMultipleVehicleToCompare";

const toastStyles = {
  icon: "🚚",
  position: "top-right",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

const CompareBox = ({ vehicle, setVehicle }) => {
  const item = {
    id: 3,
    img: "/img/backgrounds/3.png",
    title: "Compare Trucks",
    text: `Compare two trucks of your choice with the best truck comparison tool in India on TrucksDekho. You can compare variant-wise prices, GVW, number of tyres, specifications, mileage, performance and more of as many as 3 trucks at one go to help you make the right choice.`,
    delayAnimation: "300",
  };
  const [comparisonInitiated, setComparisonInitiated] = useState(false);
  const compareTableRef = useRef(null);
  const [ids, setIds] = useState([]);

  const [compared, setCompared] = useState(false);

  function handleCompare() {
    const idsToCall = vehicle?.map((item) => {
      if (item.vehicle) {
        return item.vehicle.id;
      } else {
        return;
      }
    });

    const idCollection =
      idsToCall &&
      idsToCall
        ?.filter(Boolean)
        ?.filter((id) => id !== null && id !== undefined);

    if (idCollection?.length >= 2) {
      setCompared(true);
      setIds(idCollection);

      setComparisonInitiated(true);
    } else {
      setCompared(false);
      toast.error("Select Atleast 2 Vehicle Models To Compare", {
        ...toastStyles,
      });
    }
  }

  useEffect(() => {
    if (comparisonInitiated && compareTableRef.current) {
      compareTableRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [comparisonInitiated]);

  // vehicleId set
  const router = useRouter();

  const { vehicle_one, vehicle_two, vehicle_three } = router?.query || {};

  const { data, isLoading, isFetched } = useGetMultipleVehicleToCompare(ids);
  // setting to prefill popular compares
  useEffect(() => {
    if (vehicle_one || vehicle_two || vehicle_three) {
      const idsToCall = [vehicle_one, vehicle_two, vehicle_three]
        ?.filter(Boolean)
        ?.filter((id) => id !== null && id !== undefined);
      setIds(idsToCall);
    }
  }, [vehicle_one, vehicle_two, vehicle_three]);
  const hasVehicleKeys = vehicle_one && vehicle_two;
  const vehicleCount = vehicle.reduce((accumulator, currentValue) => {
    return (
      accumulator +
      (currentValue.vehicle?.length !== 0 &&
      Object.keys(currentValue.vehicle ?? {})?.length
        ? 1
        : 0)
    );
  }, 0);

  useEffect(() => {
    if (isFetched && (vehicle_one || vehicle_two || vehicle_three)) {
      setVehicle((vehicle) => {
        return vehicle?.map((item) => {
          return {
            ...item,
            vehicle: data?.[item.index - 1],
          };
        });
      });
    }
  }, [isFetched, setVehicle]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div key={item.id} className="col-lg-12 container mt-40">
      <div className="rounded-4 layout-pt-md  layout-pb-md  view_bordershadow bg-white d-lg-block sm:d-none md:d-none">
        <div className="d-flex flex-wrap y-gap-30  d-xs-none d-md-block ">
          <div className="col-auto"></div>
          {vehicle?.map((item, index) => {
            return (
              <div key={item.index} className="col ">
                <CompareFields
                  item={item}
                  vehicle={vehicle}
                  setVehicle={setVehicle}
                  isFetched={isFetched}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center py-20 ">
          <button
            onClick={handleCompare}
            className="btn btn-primary w-25 bg-blue-1  h-50 "
          >
            Compare
          </button>
        </div>
      </div>
      <CompareBoxMobile
        vehicle={vehicle}
        setVehicle={setVehicle}
        handleCompare={handleCompare}
        isFetched={isFetched}
      />

      {isLoading && (
        <div className="mt-5">
          {" "}
          <Spinner />
        </div>
      )}

      {(compared || hasVehicleKeys) && vehicleCount >= 2 && (
        <div
          id={"compareTableSection"}
          className="mt-40 view_bordershadow bg-white    p-2 "
          ref={compareTableRef}
        >
          <CompareTable compareData={data} />
        </div>
      )}

      <div className="mt-40 view_bordershadow mb-40 ">
        <CompareVehicles />
      </div>
    </div>
  );
};

export default CompareBox;

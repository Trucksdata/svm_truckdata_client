import { useState } from "react";
import DownloadForm from "./DownloadForm";
import { downloadFile } from "../../../functions/file-download/download";

const DetailBlock = ({ data, vehicleDetails }) => {
  const isActive = vehicleDetails?.vehicle_type[data.key] === "active";
  const isDiscontinued = data?.value === "Discontinued";

  return (
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      <div>
        <h4 className="text-15 fw-500 ls-2 lh-16">{data.heading}</h4>
        <div
          className={`text-15 text-light-1 ${
            isActive
              ? " text-success"
              : isDiscontinued
              ? "text-bg-danger"
              : "text-black "
          } ls-2 lh-16`}
        >
          {data.key === "vehicle_type" ? (
            <label>
              {vehicleDetails?.vehicle_specs?.find(
                (x) => x.specification.name == "Status"
              )?.values[0]?.value || "-"}
            </label>
          ) : null}
          {data.key === "maximum_Torque" ? (
            <label>
              {vehicleDetails?.vehicle_specs?.find(
                (x) => x.specification.name == "Maximum Torque"
              )?.values[0]?.value || "-"}
            </label>
          ) : null}

          {data.key === "manufacturer_id" ? (
            <label>{vehicleDetails?.manufacturer?.name}</label>
          ) : null}
          {data.key === "energy_source_id" ? (
            <label>{vehicleDetails?.energy_source?.name}</label>
          ) : null}
          {data.key === "category_name" ? (
            <label>{vehicleDetails?.category_name}</label>
          ) : null}
          {data.key === "available_spans" ? (
            <label>
              {vehicleDetails?.vehicle_specs
                ?.find(
                  (x) =>
                    x.specification.name ==
                    "Loading Span (ft) / Loading Capacity (Cu.M)"
                )
                ?.values.map((x) => x.value + ", ") || "-"}
            </label>
          ) : null}
          {data.key === "gross_vehicle_weight" ? (
            <label>
              {vehicleDetails?.vehicle_specs
                ?.find(
                  (x) => x.specification.name === "Gross Vehicle Weight (Kg)"
                )
                ?.values.reduce(
                  (max, current) => Math.max(max, current.value),
                  0
                ) || "-"}
            </label>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    heading: "Manufacturer",
    value: "Bharat Benz",
  },
  {
    heading: "Power Source",
    value: "Diesel",
  },
  {
    heading: "Category of Vehicle",
    value: "N2",
  },
  {
    heading: "Status",
    value: "Active",
  },
  {
    heading: "Available Loading Span(ft) / Cu.M",
    key: "available_spans",
  },
];

const DetailBox = ({ vehicleDetails }) => {
  const details = [
    {
      heading: "Status",
      key: "vehicle_type",
    },
    {
      heading: "Power Source",
      key: "energy_source_id",
    },
    {
      heading: "Power Torque",
      key: "maximum_Torque",
    },
    {
      heading: "Gross Vehicle Weight",
      key: "gross_vehicle_weight",
    },

    {
      heading: "Available Loading Span(ft) / Cu.M",
      key: "available_spans",
    },
  ];
  const [click, setClick] = useState(false);
  const isClient = typeof window !== "undefined";
  const hasData = isClient ? localStorage.getItem("hasUserData") : false;

  function handleClick() {
    if (hasData) {
      return downloadFile(vehicleDetails?.brochure, handleClose);
    }
    setClick(!click);
  }

  function handleClose() {
    setClick(false);
  }

  return (
    <>
      {details.map((obj) => {
        return (vehicleDetails && vehicleDetails[obj.key]) ||
          (vehicleDetails && vehicleDetails[obj.key]?.status) ? (
          <div key={obj.heading} className="col-12">
            <DetailBlock data={obj} vehicleDetails={vehicleDetails} />
          </div>
        ) : null;
      })}
    </>
  );
};

export default DetailBox;

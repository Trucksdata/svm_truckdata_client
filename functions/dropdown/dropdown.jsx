import React from "react";
import { BiSolidFactory } from "react-icons/bi";
import { FaTruckMoving } from "react-icons/fa";

function getManufacturerByVehicleType(currentTab, filterParam, bodyTypes) {
  const isManufacturer =
    currentTab?.item?.tabItem === "Manufacturer" ||
    currentTab === undefined ||
    currentTab?.item?.name === "Manufacturer";

  if (isManufacturer) {
    const bodyType = filterParam?.option1;
    const selected = bodyTypes?.find(
      (manufacturer) => manufacturer?.name === bodyType?.name
    );

    return selected?.manufacturers || [];
  }

  return [];
}

function getChildApps({ currTab, filterParam, parentApps }) {
  const isApplication =
    currTab?.item?.tabItem === "Application" ||
    currTab?.item?.name === "Application";
  if (isApplication) {
    const parentObj = filterParam?.option2;
    const selected = parentApps?.find(
      (parent) => parent.option === parentObj?.option
    );

    return selected?.child_options || [];
  }
}

function getPowerSources({ currTab, filterParam, bodyTypes }) {
  const isPower =
    currTab?.item?.tabItem === "Power Source" ||
    currTab?.item?.name === "Power Source";
  if (isPower) {
    const vehicleObj = filterParam?.option1;
    const selected = bodyTypes?.find((type) => type.name === vehicleObj?.name);

    return selected?.energy_sources || [];
  }
}

function getDropDown({
  manufacturers,
  bodyTypes,
  currTab,
  filterParam,
  specifications,
  queryValues,
}) {
  const manufacturer = getManufacturerByVehicleType(
    currTab,
    filterParam,
    bodyTypes
  );

  const application = specifications?.find(
    (spec) => spec?.name === "Applications"
  );
  const { options } = application || {};
  const parentApps = options?.filter((option) => !option?.parent_option_id);

  const gvw = specifications?.find(
    (spec) => spec?.name === "Gross Vehicle Weight (Kg)"
  );

  const gvwOptions = [
    { id: 1, name: "Less than 1.5 Ton", value: [0, 1.5] },
    { id: 2, name: "1.5 - 2.5 Ton", value: [1.5, 2.5] },
    { id: 3, name: "2.5 - 3.0 Ton", value: [2.5, 3.0] },
    { id: 4, name: "3.0 - 4.0 Ton", value: [3.0, 4.0] },
    { id: 5, name: "4.0 - 8.0 Ton", value: [4.0, 8.0] },
    { id: 6, name: "8.0 - 12 Ton", value: [8.0, 12] },
    { id: 7, name: "12 - 14 Ton", value: [12, 14] },
    { id: 8, name: "14 - 16 Ton", value: [14, 16] },
    { id: 9, name: "16 - 20 Ton", value: [16, 20] },
    { id: 10, name: "20 - 26 Ton", value: [20, 26] },
    { id: 11, name: "26 - 28 Ton", value: [26, 28] },
    { id: 12, name: "28 - 35 Ton", value: [28, 35] },
    { id: 13, name: "35 - 42 Ton", value: [35, 42] },
    { id: 14, name: "42 - 48 Ton", value: [42, 48] },
    { id: 15, name: "Above 48", value: [48] },
  ];

  const childApps = getChildApps({
    currTab,
    filterParam,
    parentApps,
  });

  const powerSources = getPowerSources({
    currTab,
    filterParam,
    bodyTypes,
  });

  const dropdown = [
    {
      id: 0,
      tabItem: "Manufacturer",
      icon: "/icons/manufacture.png",
      iconWidth: "35px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "body_type",
          placeholder: "Select Body Type",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Manufacturer",
          name: "manufacturer",
          placeholder: "Select Manufacturer",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: manufacturer || [],
        },
      ],
    },
    {
      id: 1,
      tabItem: "Application",
      icon: "/icons/pick-up-truck.png",
      iconWidth: "45px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Application",
          name: "model",
          placeholder: "Select Application",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items:
            parentApps?.map((parent) => {
              return {
                ...parent,
                name: parent?.option,
              };
            }) || [],
        },
        {
          optionId: 3,
          title: "Sub-application",
          name: "model",
          placeholder: "Select Sub-application",
          icon: <FaTruckMoving style={{ fontSize: "2.2em" }} />,
          items:
            childApps?.map((child) => {
              return {
                ...child,
                name: child?.option,
              };
            }) || [],
        },
      ],
    },
    {
      id: 2,
      tabItem: "G V W",
      icon: "/icons/weight.png",
      iconWidth: "45px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "G V W option",
          name: "gvw",
          placeholder: "Select Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: gvwOptions,
          // gvw?.options?.map((item) => {
          //   return {
          //     ...item,
          //     name: item?.option,
          //   };
          // }) || [],
        },
      ],
    },
    {
      id: 3,
      tabItem: "Power Source",
      icon: "/icons/diesel.png",
      name: "powersource",
      iconWidth: "25px",
      dropdownItem: [
        {
          optionId: 1,
          title: "Body Type",
          name: "bodytype",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: bodyTypes || [],
        },
        {
          optionId: 2,
          title: "Power Source",
          placeholder: "Select Body Type",
          icon: <BiSolidFactory style={{ fontSize: "2.2em" }} />,
          items: powerSources || [],
        },
      ],
    },
  ];

  return dropdown || [];
}

export default getDropDown;

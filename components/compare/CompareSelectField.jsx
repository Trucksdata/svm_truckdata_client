import { useState } from "react";
import useVehicleTypes from "../../services/useVehicleTypes";

const CompareInputSeperate = ({
  index,
  setVehicleId,
  setSearchValue,
  searchValue,
  selectedItem,
  setSelectedItem,
}) => {
  const { data: vehicleTypes } = useVehicleTypes();
  const vehicleData = vehicleTypes?.data?.data;

  const dataToMap = vehicleData;
  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setVehicleId(item?.id);
  };

  return (
    <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">{"Select Body Type"}</h4>
        <div className="text-15 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
          <div>
            <input
              autoComplete="off"
              type="search"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* End location Field */}

      <div className="shadow-2 dropdown-menu min-width-400 position-absolute custom-dropdown-menu ">
        <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
          <ul className="y-gap-5 js-results">
            {dataToMap?.map((item) => (
              <li
                className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                  selectedItem && selectedItem.id === item.id ? "active" : ""
                }`}
                key={item.id}
                role="button"
                onClick={() => handleOptionClick(item)}
              >
                <div className="d-flex">
                  {/* <div className="icon-car text-light-1 text-20 pt-4" /> */}
                  <div className="ml-10">
                    <div className="text-15  fw-500 js-search-option-target">
                      {item.name}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompareInputSeperate;

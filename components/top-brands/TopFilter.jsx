import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentBrandTab,
  setCurrentCompareTab,
  setCurrentPopularTab,
  setCurrentUpcomingTab,
} from "../../features/topFilter/topFilterSlice";

const TopFilter = ({ vehicleData, flag }) => {
  const dispach = useDispatch();
  const filterOption = useSelector(
    // (store) => store.topfilter[flag]?.currentTab
    (store) => store.topfilter
  );
  const mainStore = useSelector((store) => store.topfilter);
  const handleFilter = (id, vehicle, flag) => {
    const filter = { id, vehicle };
    const filters = { [flag]: { id, vehicle } };
    if (flag === "popular") {
      dispach(setCurrentPopularTab(filters));
    }
    if (flag === "brands") {
      dispach(setCurrentBrandTab(filters));
    }
    if (flag === "upcoming") {
      dispach(setCurrentUpcomingTab(filters));
    }
    if (flag === "compare") {
      dispach(setCurrentCompareTab(filters));
    }
  };
  return (
    <div className="tabs__controls tabs__controls_buttons d-flex x-gap-15  js-tabs-controls">
      {/* {filterOptions.map((option) => (
        <div className="col-auto" key={option.value}>
          <button
            className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 ${
              filterOption === option.value ? "is-tab-el-active" : ""
            }`}
            onClick={() => setFilterOption(option.value)}
          >
            {option.label}
          </button>
        </div>
      ))} */}
      {vehicleData?.map((vehicleType) => (
        <div className="col-auto" key={vehicleType["id"]}>
          {flag === "popular" && (
            <>
              {vehicleType["status"] === "active" ? (
                <button
                  className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 
              ${
                filterOption?.popular?.currentTab === vehicleType["name"] &&
                flag === "popular"
                  ? "is-tab-el-active"
                  : ""
              }`}
                  onClick={() =>
                    handleFilter(
                      vehicleType["id"],
                      vehicleType["name"],
                      "popular"
                    )
                  }
                >
                  {vehicleType["name"]}
                </button>
              ) : null}
            </>
          )}
          {flag === "brands" && (
            <>
              {vehicleType["status"] === "active" ? (
                <button
                  className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 
              ${
                filterOption?.brands?.currentTab === vehicleType["name"] &&
                flag === "brands"
                  ? "is-tab-el-active"
                  : ""
              }`}
                  onClick={() =>
                    handleFilter(
                      vehicleType["id"],
                      vehicleType["name"],
                      "brands"
                    )
                  }
                >
                  {vehicleType["name"]}
                </button>
              ) : null}
            </>
          )}
          {flag === "compare" && (
            <>
              {vehicleType["status"] === "active" ? (
                <button
                  className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 
              ${
                filterOption?.compare?.currentTab === vehicleType["name"] &&
                flag === "compare"
                  ? "is-tab-el-active"
                  : ""
              }`}
                  onClick={() =>
                    handleFilter(
                      vehicleType["id"],
                      vehicleType["name"],
                      "compare"
                    )
                  }
                >
                  {vehicleType["name"]}
                </button>
              ) : null}
            </>
          )}
          {flag === "upcoming" && (
            <>
              {vehicleType["status"] === "active" ? (
                <button
                  className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button mb-10 
              ${
                filterOption?.upcoming?.currentTab === vehicleType["name"] &&
                flag === "upcoming"
                  ? "is-tab-el-active"
                  : ""
              }`}
                  onClick={() =>
                    handleFilter(
                      vehicleType["id"],
                      vehicleType["name"],
                      "upcoming"
                    )
                  }
                >
                  {vehicleType["name"]}
                </button>
              ) : null}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopFilter;

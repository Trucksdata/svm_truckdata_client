import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentTab } from "../../features/hero/findPlaceSlice";
import { handleTabChange } from "../../functions/filter/handleTabChange";
const MobileTab = ({
  setCurrTab,
  specifications,
  setDefaultIndex,
  setTabChanged,
  handleTableChange,
  dropdown,
}) => {
  const { tabs, currentTab } = useSelector((state) => state.hero) || {};
  const dispatch = useDispatch();
  function handleTab(tab, i) {
    dispatch(addCurrentTab(tab?.name));
    handleTabChange(tab, i, setCurrTab, specifications);
    setDefaultIndex(i);
    setTabChanged((tabChanged) => tabChanged + 1);
    handleTableChange(i);
  }

  return (
    <div className="tabs -bookmark js-tabs d-md-none ">
      <div className="tabs__controls d-flex items-center js-tabs-controls">
        {dropdown?.map((tab, i) => {
          return (
            <button
              key={tab?.id}
              className={`d-flex justify-content-center flex-column tabs__button px-15 py-10 rounded-4 fw-600 text-black js-tabs-button ${
                tab?.tabItem === currentTab ? "is-tab-el-active" : ""
              }`}
              onClick={() => handleTab(tab, i)}
            >
              <div className="filter_icons">
                <img src={tab?.icon} alt="icons" />
              </div>
              <div>{tab?.tabItem}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTab;

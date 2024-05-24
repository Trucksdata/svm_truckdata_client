import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SearchButton from "./SearchButton";
import DropInput from "./DropInput";
import { dropdown } from "./DropdownItems";
import MobileTab from "../../search-filter/MobileTab";
import { useSelector } from "react-redux";
import getDropDown from "../../../functions/dropdown/dropdown";
import useGetSpecification from "../../../services/useGetSpecification";
import { useRouter } from "next/router";
import { handleTabChange } from "../../../functions/filter/handleTabChange";

function FilterTabs(props) {
  const { manufacturerData, vehicleData } = props;
  const tab = useSelector((store) => store.hero);

  const [filterParam, setFilterParam] = useState({});
  const [tabChanged, setTabChanged] = useState(false);

  const [currTab, setCurrTab] = useState();
  const router = useRouter();
  const { data: specs, isFetched } = useGetSpecification();
  const specifications = specs?.data?.data;
  const queryItems = router?.query;
  const { tab: tabs, option1, option2, option3 } = queryItems;
  const opt1 = option1 ? JSON.parse(option1) : null;
  const opt2 = option2 ? JSON.parse(option2) : null;
  const opt3 = option3 ? JSON.parse(option3) : null;
  const tabsValue = tabs ? JSON.parse(tabs) : null;
  const queryValues = {
    opt1,
    tabs: tabsValue,
  };
  console.log(opt1, "oneOption");
  const dropdown = getDropDown({
    manufacturers: manufacturerData,
    bodyTypes: vehicleData,
    currTab,
    filterParam,
    specifications,
    queryValues,
  });

  const dropdownComponent = (dropdowns, screen) => {
    const selectedTab = tab.currentTab;

    return dropdowns?.dropdownItem?.map((dropdownDetails) => {
      return (
        <DropInput
          key={dropdownDetails?.id}
          dropdownDetails={dropdownDetails}
          manufacturerData={manufacturerData}
          vehicleData={vehicleData}
          setFilterParams={setFilterParam}
          filterParams={filterParam}
          selectedTab={selectedTab}
          optOne={opt1}
          optTwo={opt2}
          optThree={opt3}
          tabChanged={tabChanged}
        />
      );
    });
  };
  function handleSearch() {
    const query = {
      tab: JSON.stringify({
        name: currTab?.item?.tabItem || currTab?.item?.name || "Manufacturer",
        id: currTab?.item?.id || 1,
        spec_id: currTab?.item?.spec_id || null,
      }),
      option1: JSON.stringify({
        id: filterParam?.option1?.id ? filterParam?.option1?.id : opt1?.id,
        name: filterParam?.option1?.name
          ? filterParam?.option1?.name
          : opt1?.name,
      }),
      option2: JSON.stringify({
        id: filterParam?.option2?.id ? filterParam?.option2?.id : opt2?.id,
        name: filterParam?.option2?.name
          ? filterParam?.option2?.name
          : opt2?.name,
        value: filterParam?.option2?.value ? filterParam?.option2?.value : "",
      }),
      ...(filterParam?.option3 && {
        option3: JSON.stringify({
          id: filterParam?.option3?.id ? filterParam?.option3?.id : opt3?.id,
          name: filterParam?.option3?.name
            ? filterParam?.option3?.name
            : opt3?.name,
        }),
      }),
    };

    const cleanQuery = Object.fromEntries(
      Object.entries(query).filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
    );

    router.push({
      pathname: "/search-results",
      query: cleanQuery,
    });
  }

  const [defaultIndex, setDefaultIndex] = useState(0);

  useEffect(() => {
    if (tabs && option1 && option2 && isFetched) {
      const index = tabsValue?.name === "Manufacturer" ? 0 : tabsValue?.id;
      setDefaultIndex(index);
      handleTabChange(tabsValue, tabsValue?.id, setCurrTab, specifications);
    }
  }, [isFetched]);

  function handleTableChange(index) {
    setDefaultIndex(index);
    setTabChanged(tabChanged + 1);
  }

  const defaultId = defaultIndex;

  return (
    <div>
      <Tabs
        selectedIndex={defaultId}
        onSelect={(index) => handleTableChange(index)}
        className="tabs -underline-2 js-tabs"
      >
        <TabList className="sm:d-none md:d-none tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 pb-30 js-tabs-controls">
          {dropdown.map((item, i) => {
            return (
              <Tab
                onClick={() =>
                  handleTabChange(item, i, setCurrTab, specifications)
                }
                className="col-auto"
                key={i}
              >
                <button className="pb-2 tabs__button text-light-1 fw-500 js-tabs-button d-flex">
                  <div className="w-25">
                    <img src={item?.icon} alt="icons" width={item?.iconWidth} />
                  </div>
                  <div className="ps-2">{item.tabItem}</div>
                </button>
              </Tab>
            );
          })}
        </TabList>
        <MobileTab
          setCurrTab={setCurrTab}
          specifications={specifications}
          setDefaultIndex={setDefaultIndex}
          setTabChanged={setTabChanged}
          handleTableChange={handleTableChange}
          defaultIndex={defaultIndex}
          dropdown={dropdown}
        />
        <div className="tabs__content js-tabs-content">
          {dropdown.map((item) => (
            <TabPanel key={item.id}>
              <div className="d-flex p-2 bd-highlight justify-content-between sm:d-block md:d-block">
                {typeof window !== "undefined" && window.innerWidth >= 992
                  ? dropdownComponent(item, "lg")
                  : dropdownComponent(item, "sm")}
                <SearchButton handleSearch={handleSearch} />
              </div>
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

export default FilterTabs;

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import usePowerSource from "../../../services/usePowerSource";
import { useRouter } from "next/router";

function DropInput(props) {
  const {
    dropdownDetails,
    title,
    placeHolder,
    setFilterParams,
    filterParams,
    optOne,
    optTwo,
    optThree,
    tabChanged,
  } = props;
  const [searchValue, setSearchValue] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOptionClick = (item, id) => {
    setFilterParams({ ...filterParams, [`option${id}`]: item });
    setSearchValue({ ...searchValue, [`option${id}`]: item?.name });
    setSelectedItem(item);

    if (id === 2) {
      setFilterParams({
        ...filterParams,
        [`option${id}`]: item,
        [`option${id + 1}`]: {},
      });
      setSearchValue({
        ...searchValue,
        [`option${id}`]: item?.name,
        [`option${id + 1}`]: "",
      });
      setSelectedItem(item);
    }
  };
  const dropdown = {
    1: optOne,
    2: optTwo,
    3: optThree,
  };
  const selected = dropdown[dropdownDetails.optionId];

  useEffect(() => {
    if (!tabChanged) {
      setFilterParams({
        ...filterParams,
        [`option${dropdownDetails.optionId}`]: selected,
      });
      setSearchValue({
        ...searchValue,
        [`option${dropdownDetails.optionId}`]: selected?.name,
      });
      setSelectedItem(selected);
    } else {
      setFilterParams({
        ...filterParams,
        [`option${dropdownDetails.optionId}`]: "",
      });
      setSearchValue({
        ...searchValue,
        [`option${dropdownDetails.optionId}`]: "",
      });
      setSelectedItem({});
    }
  }, [dropdownDetails.optionId, setFilterParams, tabChanged]);

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">
                {title || dropdownDetails.title}
              </h4>
              <div className="text-15 text-light-1 ls-2 lh-16">
                <input
                  autoComplete="off"
                  type="search"
                  placeholder={placeHolder || dropdownDetails.placeholder}
                  className="js-search js-dd-focus"
                  value={searchValue["option" + dropdownDetails.optionId]}
                  name={dropdownDetails.optionId}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
          <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {dropdownDetails?.items?.map((item, i) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item + i}
                  role="button"
                  onClick={() =>
                    handleOptionClick(item, dropdownDetails.optionId)
                  }
                >
                  <div className="d-flex">
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item?.name}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropInput;

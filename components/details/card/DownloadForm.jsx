import React, { useState } from "react";
import { states } from "../../../data/states";
import { useAddUserData } from "../../../services/vehicles/useAddUserData";
import toast from "react-hot-toast";
import { downloadFile } from "../../../functions/file-download/download";

const DownloadForm = ({ handleClick, click, url }) => {
  const [searchValue, setSearchValue] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const handleOptionClick = (item) => {
    setSearchValue(item.state);
    setSelectedItem(item);
  };

  const handleDistrict = (item) => {
    setDistrictValue(item);
    setSelectedDistrict(item);
  };

  const create = useAddUserData();
  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      phone_number: phone,
      district: districtValue,
      state: selectedItem?.state,
    };

    create.mutate(data, {
      onSuccess: () => downloadFile(url, handleClick),
      onError: () => toast.error("Something Unexpected Occurred!!"),
    });
  }

  return (
    <div className={`langMenu js-langMenu  ${click ? "" : "is-hidden"}`}>
      <div className="currencyMenu__bg" onClick={handleClick}></div>
      <div className="langMenu__content-form  bg-white rounded-4">
        <div className="d-flex items-center justify-between px-30 py-20 sm:px-15 border-bottom-light">
          <div className="text-20 fw-500 lh-15">
            Please provide the following details to continue.
          </div>
          {/* End title */}
          <button className="pointer" onClick={handleClick}>
            <i className="icon-close" />
          </button>
          {/* End colse button */}
        </div>
        <form onSubmit={handleSubmit} className="row y-gap-20 p-5">
          <div className="col-12 col-lg-6">
            <div className="form-input ">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="lh-1 text-14 text-light-1">Name</label>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="form-input ">
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="lh-1 text-14 text-light-1">Phone</label>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
              <div
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                data-bs-offset="0,22"
              >
                <label className="lh-1 text-14 text-light-1">State</label>
                <div className="text-15 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
                  <div>
                    <input
                      autoComplete="off"
                      type="search"
                      className="js-search js-dd-focus"
                      value={searchValue}
                      required
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
                <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                  <ul className="y-gap-5 js-results">
                    {states?.map((item) => (
                      <li
                        className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                          selectedItem && selectedItem.state === item.state
                            ? "active"
                            : ""
                        }`}
                        key={item.state}
                        role="button"
                        onClick={() => handleOptionClick(item)}
                      >
                        <div className="d-flex">
                          <div className="icon-location text-light-1 text-20 pt-4" />
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                              {item.state}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="shadow-2 dropdown-menu min-width-400 overflow-scroll  position-absolute ">
                <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                  <ul className="y-gap-5 js-results">
                    {states?.map((item) => (
                      <li
                        className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                          selectedItem && selectedItem.state === item.state
                            ? "active"
                            : ""
                        }`}
                        key={item.state}
                        role="button"
                        onClick={() => handleOptionClick(item)}
                      >
                        <div className="d-flex">
                          <div className="icon-location text-light-1 text-20 pt-4" />
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                              {item.state}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="searchMenu-loc px-20 py-10 border-light rounded-4 js-form-dd js-liverSearch">
              <div
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                data-bs-offset="0,22"
              >
                <label className="lh-1 text-14 text-light-1">District</label>
                <div className="text-15 text-light-1 ls-2 lh-16 d-flex  justify-content-between ">
                  <div>
                    <input
                      autoComplete="off"
                      type="search"
                      className="js-search js-dd-focus"
                      value={districtValue}
                      required
                      onChange={(e) => setDistrictValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="shadow-2 dropdown-menu min-width-400 filter_contents">
                <div className="px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                  <ul className="y-gap-5 js-results">
                    {selectedItem?.districts?.map((item) => {
                      return (
                        <li
                          className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                            selectedDistrict && selectedDistrict === item
                              ? "active"
                              : ""
                          }`}
                          key={item}
                          role="button"
                          onClick={() => handleDistrict(item)}
                        >
                          <div className="d-flex">
                            <div className="icon-location text-light-1 text-20 pt-4" />
                            <div className="ml-10">
                              <div className="text-15 lh-12 fw-500 js-search-option-target">
                                {item}
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="shadow-2 dropdown-menu min-width-400 overflow-scroll  position-absolute ">
                <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
                  <ul className="y-gap-5 js-results">
                    {selectedItem?.district?.map((item) => (
                      <li
                        className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                          selectedDistrict && selectedDistrict === item
                            ? "active"
                            : ""
                        }`}
                        key={item}
                        role="button"
                        onClick={() => handleOptionClick(item)}
                      >
                        <div className="d-flex">
                          <div className="icon-location text-light-1 text-20 pt-4" />
                          <div className="ml-10">
                            <div className="text-15 lh-12 fw-500 js-search-option-target">
                              {item}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              href="#"
              className="button py-20 -dark-1 bg-blue-1 text-white w-100"
            >
              Download <div className=" ml-15" />
            </button>
          </div>
        </form>
      </div>
      {/* End langMenu */}
    </div>
  );
};

export default DownloadForm;

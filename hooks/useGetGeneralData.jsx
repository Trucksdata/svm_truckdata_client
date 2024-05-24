import React, { useEffect } from "react";
import { axiosInstance } from "../axios/AxiosInstance";
import { useDispatch } from "react-redux";
import { setGeneralDetails } from "../features/general-settings/generalSlice";

async function fetchGeneralData() {
  try {
    const response = await axiosInstance.get("home-page-settings");
    return response.data;
  } catch (error) {
    throw error;
  }
}

const useGetGeneralData = () => {
  useEffect(() => {
    const general = fetchGeneralData();
    general.then((res) => {
      const generalData = res?.data?.[0];
      const generalString = JSON.stringify(generalData);
      localStorage.setItem("general-data", generalString);
    });
  }, []);
};

export default useGetGeneralData;

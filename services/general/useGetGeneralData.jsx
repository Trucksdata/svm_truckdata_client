import { useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getGeneralData() {
  const response = await axiosInstance.get("home-page-settings");
  return response
}

export default function useGetGeneralData() {
  return useQuery(["general-data"], getGeneralData, {
    staleTime: Infinity,
  });
}

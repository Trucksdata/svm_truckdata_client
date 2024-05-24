import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getManufacturer() {
  const response = await axiosInstance.get("manufacturers");
  return response;
}

export default function useManufactures() {
  return useQuery("manufacturer", getManufacturer, {
    staleTime: Infinity,
  });
}

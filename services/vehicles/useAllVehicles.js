import { useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getAllVehicles() {
  const response = await axiosInstance.get("vehicles");
  return response;
}

export default function useAllVehicles() {
  return useQuery("allVehicles", getAllVehicles, {
    staleTime: Infinity,
  });
}
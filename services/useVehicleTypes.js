import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getVehicleTypes() {
    const response = await axiosInstance.get("vehicle-types");
    return response;
  }

export default function useVehicleTypes() {
    return useQuery("vehicletypes", getVehicleTypes, {
      staleTime: Infinity,
    });
  }
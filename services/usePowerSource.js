import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getPowerSource() {
  const response = await axiosInstance.get("energy-sources");
  return response;
}

export default function usePowerSource() {
  return useQuery("powersource", getPowerSource, {
    staleTime: Infinity,
  });
}

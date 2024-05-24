import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getSpecifications() {
  const response = await axiosInstance.get("specifications");
  return response;
}

export default function useGetSpecification() {
  return useQuery(["specs"], getSpecifications, {
    staleTime: Infinity,
  });
}

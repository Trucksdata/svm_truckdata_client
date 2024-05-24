import { useQuery } from "react-query";
import { axiosInstance } from "../axios/AxiosInstance";

async function getBrand(id) {
  const response = await axiosInstance.get(`manufacturers/${id}`);
  return response;
}

export default function useBrand(id) {

  return useQuery(
    ["brandDetails",id],
    ()=>getBrand(id),
    {
      staleTime: Infinity,
    }
  );
}
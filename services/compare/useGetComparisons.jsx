import { useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getComparisons(params) {
  const filterParams = {
    ...params,
  };

  const response = await axiosInstance.get(`compare/vehicles`, {
    params: filterParams,
  });
  return response;
}

export default function useGetComparisons(params) {
  return useQuery(["comparisons", params], () =>  getComparisons(params), {
    staleTime: Infinity,
  });
}

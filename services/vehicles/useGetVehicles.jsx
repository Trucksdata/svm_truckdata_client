import { useInfiniteQuery, useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getVehicles(params) {
  const filterParams = {
    ...params,
  };

  const response = await axiosInstance.get("vehicles", {
    params: filterParams,
  });
  return response;
}

export default function useGetVehicles(params) {
  return useQuery(["vehicles", params], getVehicles, {
    staleTime: Infinity,
  });
}

export const useGetVehiclesInfinite = (params) => {
  return useInfiniteQuery(
    ["vehicles-infinity", params],
    ({ pageParam = 1 }) => getVehicles({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const currPage = lastPage?.data?.current_page || 1;
        const last_page = lastPage?.data?.last_page || 1;
        return currPage < last_page ? currPage + 1 : undefined;
      },
      initialPageParam: 1,
      staleTime: Infinity,
    }
  );
};

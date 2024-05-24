import { useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getSpecificationCat() {
  const response = await axiosInstance.get("specification-categories");
  return response;
}

export default function useGetSpecificationCategories() {
  return useQuery(["spec-cat"], getSpecificationCat, {
    staleTime: Infinity,
  });
}

import { useQueries } from "react-query";
import { getVehicleData } from "../useViewVehicle";

function useGetMultipleVehicleToCompare(ids) {
  const queries = useQueries(
    ids.map((id) => ({
      queryKey: ["vehicle-multiple", id],
      queryFn: () => getVehicleData(id),
    }))
  );
      console.log(ids,'idsToCheck')
  const vehicleCollectedData = queries.map((query) => query?.data?.data);
  const isLoading = queries.some((query) => query.isLoading);
  const isFetched = queries.every((query) => query.isFetched);

  return {
    data: vehicleCollectedData,
    isLoading,
    isFetched,
  };
}

export default useGetMultipleVehicleToCompare;

import { useMutation } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

export const useAddUserData = () => {
  return useMutation((values) => {
    return axiosInstance.post("data-collection", values);
  });
};

import { useInfiniteQuery, useQuery } from "react-query";
import { axiosInstance } from "../../axios/AxiosInstance";

async function getArticles() {
  const response = await axiosInstance.get("blog");
  return response;
}

export default function useGetArticles() {
  return useQuery(["articles"], getArticles, {
    staleTime: Infinity,
  });
}

async function getArticlesPaginated(params) {
  const filterParams = {
    ...params
  }
  const response = await axiosInstance.get("blog", {
    params: filterParams
  });
  return response;
}

export const useGetArticlesInfinite = (params) => {
  return useInfiniteQuery(
    ["articles-infinity", params],
    ({ pageParam = 1 }) => getArticlesPaginated({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage) => {
        const currPage = lastPage?.data?.current_page || 1;
        const last_page = lastPage?.data?.last_page || 1;
        return currPage < last_page ? currPage + 1 : undefined;
      },
      initialPageParam: 1,
      staleTime: Infinity
    }
  );
};

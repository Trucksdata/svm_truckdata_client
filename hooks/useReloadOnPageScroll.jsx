import { useEffect } from 'react'

export const useReloadOnPageScroll = ({
  inView,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage
}) => {
  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, inView, isFetchingNextPage])
}

import { useInfiniteQuery } from 'react-query';

import api from './getFollowers.api';

const PAGE = 1;
const PAGE_SIZE = 100;

export const flattenEntityPages = pages =>
  pages.reduce((acc, page) => [...acc, ...page], []);

export const queryIds = {
  getFollowers: ({ username, page, pageSize }) => [username, page, pageSize]
};

export const useUserFollowers = (
  { username, page = PAGE, pageSize = PAGE_SIZE },
  options = {}
) => {
  const { data, ...rest } = useInfiniteQuery(
    queryIds.getFollowers({ username, page, pageSize }),
    ({ pageParam = 1 }) =>
      api.getFollowers({
        username,
        page: pageParam,
        pageSize,
        ...options
      }),
    {
      refetchOnWindowFocus: false,
      enabled: !!username, // disable this query from automatically running
      keepPreviousData: true,
      ...options,
      select: response => {
        let followerList = flattenEntityPages(response.pages);
        if (options.select) {
          followerList = options.select(followerList);
        }

        return {
          ...response,
          followerList
        };
      },

      getNextPageParam: lastPageItems => !(lastPageItems.length < pageSize)
    }
  );

  return { followerList: data?.followerList || [], ...rest };
};

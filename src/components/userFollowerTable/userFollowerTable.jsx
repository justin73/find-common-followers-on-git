import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  useRef,
  useCallback,
  useLayoutEffect,
  useState,
  useEffect
} from 'react';

import { useUserFollowers } from '../../queries/getFollowers/getFollowers.queries';

const UserFollowersTable = ({ username }) => {
  const prevUsernameRef = useRef();
  const { isLoading, followerList, isFetching, hasNextPage, fetchNextPage } =
    useUserFollowers({
      username
    });

  const tableEl = useRef();
  const [distanceBottom, setDistanceBottom] = useState(0);

  // to reset scrollTop so that when changing usernames, we don't fetch the same amount of data as the previous user
  useEffect(() => {
    if (prevUsernameRef.current !== username) {
      setDistanceBottom(0);
      tableEl.current.scrollTop = 0;
    }
    return () => {};
  }, [username]);

  const scrollListener = useCallback(() => {
    const bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight;
    // if you want to change distanceBottom every time new data is loaded
    // don't use the if statement
    if (!distanceBottom) {
      // calculate distanceBottom that works for you
      setDistanceBottom(Math.round(bottom * 0.2));
    }

    if (
      tableEl.current.scrollTop > bottom - distanceBottom &&
      hasNextPage &&
      !isFetching
    ) {
      fetchNextPage({ pageParam: followerList.length / 100 + 1 });
    }
  }, [
    distanceBottom,
    fetchNextPage,
    followerList.length,
    hasNextPage,
    isFetching
  ]);

  useLayoutEffect(() => {
    const tableRef = tableEl.current;
    tableRef.addEventListener('scroll', scrollListener);
    return () => {
      tableRef.removeEventListener('scroll', scrollListener);
    };
  }, [scrollListener]);

  return (
    <TableContainer
      style={{ maxWidth: '300px', margin: 'auto', maxHeight: '300px' }}
      ref={tableEl}
    >
      <Table stickyHeader aria-label="user follower table">
        <TableHead>
          <TableRow>
            <TableCell align="center"> {username} followers</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell>
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            <>
              {followerList?.map(follower => (
                <TableRow key={follower.id}>
                  <TableCell align="center">{follower.login}</TableCell>
                </TableRow>
              ))}
              {isFetching && (
                <TableRow>
                  <TableCell align="center">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserFollowersTable;

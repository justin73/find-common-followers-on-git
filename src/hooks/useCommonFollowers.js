import { useMemo, useContext } from 'react';

import UsernamesContext from '../contexts/usernamesContext';
import { useUserFollowers } from '../queries/getFollowers/getFollowers.queries';

const useGetCommonFollowers = () => {
  const { firstUsername, secondUsername } = useContext(UsernamesContext);
  // here we disable the query since the purpose of the query here is only to get the existing data we retrieved
  // and we don't use useQueries cuz we need to get the entire dataset, which is only accessible via useInfiniteQuery
  const { followerList: firstUserFollowers } = useUserFollowers(
    {
      username: firstUsername
    },
    { enabled: false }
  );
  const { followerList: secondUserFollowers } = useUserFollowers(
    {
      username: secondUsername
    },
    { enabled: false }
  );

  const commonFollowers = useMemo(
    () =>
      firstUserFollowers?.filter(firstUserFollower =>
        secondUserFollowers?.some(
          secondUserFollower => secondUserFollower.id === firstUserFollower.id
        )
      ),
    [firstUserFollowers, secondUserFollowers]
  );

  return {
    commonFollowers
  };
};

export default useGetCommonFollowers;

import { Box, Button, Divider } from '@mui/material';
import { useContext, useCallback, useState } from 'react';

import UsernamesContext from '../../contexts/usernamesContext';
import UserFollowersTable from '../userFollowerTable/userFollowerTable';

const UsersFollowersContainer = () => {
  const [isCommonUserListVisible, setIsCommonUserListVisible] = useState(false);

  const { firstUsername, secondUsername } = useContext(UsernamesContext);

  const toggleCommonFollowers = useCallback(() => {
    setIsCommonUserListVisible(!isCommonUserListVisible);
  }, [isCommonUserListVisible]);

  if (!firstUsername || !secondUsername) {
    return null;
  }

  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          marginBottom: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'grey.500'
        }}
      >
        <UserFollowersTable username={firstUsername} />
        <UserFollowersTable username={secondUsername} />
      </Box>
      <Divider />
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button
          onClick={toggleCommonFollowers}
          disabled={!firstUsername || !secondUsername}
        >
          {`${isCommonUserListVisible ? 'Hide' : 'Display'} Common Followers`}
        </Button>
      </Box>
    </>
  );
};
export default UsersFollowersContainer;

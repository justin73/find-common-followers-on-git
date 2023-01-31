import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import useGetCommonFollowers from '../../hooks/useCommonFollowers';

const CommonUserList = () => {
  const { commonFollowers } = useGetCommonFollowers();
  return (
    <Box sx={{ margin: 4 }}>
      <p>
        we have retrieved {commonFollowers.length} followers in common so far
      </p>
      <TableContainer
        style={{ margin: 'auto', maxWidth: '600px', maxHeight: '400px' }}
      >
        <Table stickyHeader aria-label="common follower result table">
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Url</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commonFollowers.map(follower => (
              <TableRow
                key={follower.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar src={follower.avatar_url} alt="avatar" />
                </TableCell>
                <TableCell align="right">{follower.login}</TableCell>
                <TableCell align="right">{follower.url}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default CommonUserList;

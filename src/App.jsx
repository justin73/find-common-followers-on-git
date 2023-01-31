import { Box, Divider } from '@mui/material';

import QueryForm from './components/form/form';
import UsersFollowersContainer from './components/usersFollowersContainer/usersFollowersContainer';
import { UsernamesProvider } from './contexts/usernamesContext';

import './index.css';

function App() {
  return (
    <Box>
      <header className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <h1 className="mt-2 text-lg font-medium uppercase tracking-wide text-gray-600 sm:mt-0">
          SRTX coding test
        </h1>
      </header>

      <UsernamesProvider>
        <QueryForm />
        <Divider />
        <UsersFollowersContainer />
      </UsernamesProvider>
    </Box>
  );
}

export default App;

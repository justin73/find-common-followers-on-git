import { createContext, useState, useMemo } from 'react';

const UsernamesContext = createContext();

export const UsernamesProvider = ({ children }) => {
  const [firstUsername, setFirstUsername] = useState('');
  const [secondUsername, setSecondUsername] = useState('');

  const value = useMemo(
    () => ({
      firstUsername,
      secondUsername,
      setFirstUsername,
      setSecondUsername
    }),
    [firstUsername, secondUsername]
  );

  return (
    <UsernamesContext.Provider value={value}>
      {children}
    </UsernamesContext.Provider>
  );
};

export default UsernamesContext;

import React, { useContext, createContext } from 'react';
import initState from '../store/state';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

function fetchUser() {
  return(JSON.parse(initState).user);
}

export function UserProvider({ children }) {
  const user = fetchUser();
  // console.log({user});

  return(
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
};
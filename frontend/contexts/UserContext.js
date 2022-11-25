import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = { 
    isLoggedIn: false,
    user: {}
  }

  render() { 
    return (
      <UserContext.Provider value={{...this.state}}>

      </UserContext.Provider>
    );
  }
}
 
export default UserContextProvider;
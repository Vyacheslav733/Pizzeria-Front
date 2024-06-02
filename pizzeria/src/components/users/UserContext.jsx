import { createContext, useReducer, useEffect } from 'react';
import { loadUser, saveUser, userReducer } from './userReducer';
import PropTypes from 'prop-types';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, null, loadUser);

  useEffect(() => {
    saveUser(user || null);
  }, [user]);

  return <UserContext.Provider value = {{ user, dispatch }}>
    {children}
  </UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.node,
};

export default UserContext;

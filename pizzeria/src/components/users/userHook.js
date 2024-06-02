import { useContext } from 'react';
import { userLogin, userLogout } from './userReducer.js';
import UserContext from './UserContext.jsx';

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser должен использоваться внутри UserProvider');
  }
  
  const { dispatch } = useContext(UserContext);

  return {
    userLogout: () => dispatch(userLogout()),
    userLogin: (user) => dispatch(userLogin(user)),
  };
};

export default useUser;

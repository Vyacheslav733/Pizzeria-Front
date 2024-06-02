const USER_KEY = 'user';
const USER_LOGIN = 'user/login';
const USER_LOGOUT = 'user/logout';

export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const loadUser = (initialValue = []) => {
  const userData = localStorage.getItem(USER_KEY);
  if (userData) {
    return JSON.parse(userData);
  }
  return initialValue;
};

export const userReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case USER_LOGOUT: {
      return null;
    }
    case USER_LOGIN: {
      return action.user;
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user,
});

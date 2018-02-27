export const actionsList = {
  LOGIN: 'login',
  LOGOUT: 'logout'
};

export const authenticationReducer = (store, action) => {
  switch (action.type) {
    case actionsList.LOGIN:
      return [1];
    default:
      return [];
  }
};

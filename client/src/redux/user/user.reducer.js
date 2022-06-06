import { UserActionTypes } from './user.types';

const initialState = {
  userData: []
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case UserActionTypes.REGISTER_USER:
      return {
        ...state,
        registerSuccess: action.payload
      }  
    case UserActionTypes.LOGIN_USER:
      return {
        ...state,
        userData: action.payload
      }
    case UserActionTypes.LOGOUT_USER:
      return {  
        logoutSuccess: action.payload,      
        userData: []
      }
    default:
      return state;
  }
}

export default userReducer;
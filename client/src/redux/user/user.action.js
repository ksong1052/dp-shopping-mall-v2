// import { UserActionTypes } from './user.types';

// export function registerUser(result) {
//   return {
//     type: UserActionTypes.REGISTER_USER,
//     payload: result
//   }
// }

// export function loginUser(userInfo) {  
//   return {
//     type: UserActionTypes.LOGIN_USER,
//     payload: userInfo 
//   }
// }

// export function logoutUser(result) {
//   return {
//     type: UserActionTypes.LOGOUT_USER,
//     payload: result
//   }
// }


// ==================================================================
/* Redux-toolkit */

import { userActions } from './user.reducer';

export function registerUser(dispatch, result) {  
  dispatch(userActions.registerUser(result));  
}

export function loginUser(dispatch, userInfo) { 
  dispatch(userActions.loginUser(userInfo));
}

export function logoutUser(dispatch, result) {
  dispatch(userActions.logoutUser(result));
}

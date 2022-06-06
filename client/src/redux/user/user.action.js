import { UserActionTypes } from './user.types';

export function registerUser(result) {
  // const request = axios.post(`${USER_SERVER}/register`, userInfo)
  //       .then(response => response.data)   
  // return {
  //     type: UserActionTypes.REGISTER_USER,
  //     payload: request
  // }

  return {
    type: UserActionTypes.REGISTER_USER,
    payload: result
  }
}

export function loginUser(userInfo) {  
  return {
    type: UserActionTypes.LOGIN_USER,
    payload: userInfo
  }
}

export function logoutUser(result) {
  return {
    type: UserActionTypes.LOGOUT_USER,
    payload: result
  }
}
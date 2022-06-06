// import { UserActionTypes } from './user.types';

// const initialState = {
//   userData: []
// };

// function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case UserActionTypes.REGISTER_USER:
//       return {
//         ...state,
//         registerSuccess: action.payload
//       }  
//     case UserActionTypes.LOGIN_USER:
//       return {
//         ...state,
//         userData: action.payload
//       }
//     case UserActionTypes.LOGOUT_USER:
//       return {  
//         logoutSuccess: action.payload,      
//         userData: []
//       }
//     default:
//       return state;
//   }
// }

// export default userReducer;

/* 
  Redux-Toolkit 적용 
  createSlice 안에는 받드시 3개의 parameters를 받아야 한다.  
*/


import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  userData: [],
  success: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => { },
    loginUser: (state, action) => {
      state.userData = action.payload;
    },
    logoutUser: (state, action) => { 
      state.userData = [];
    } 
  }
})

export const userActions = userSlice.actions;
export default userSlice.reducer;
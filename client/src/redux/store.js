// import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import { rootReducer } from './root.reducer';

// // redux-devtools-extension를 이용하면 Webpage에서 store의 state를 확인할 수 있다.
// import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = [ logger ];

// // Uncaught Error: "reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers
// // https://stackoverflow.com/questions/71983312/uncaught-error-reducer-is-a-required-argument-and-must-be-a-function-or-an-o
// const store = configureStore(
//   { reducer: rootReducer },
//   composeWithDevTools(applyMiddleware(middleware))
// );


// ==========================================================================================================

/* 
  기존의 redux에서는 아래의 것들을 각각 선언해 줘야 했다.  
  하지만, Redux-toolkit에서는 모두 포함되어 있다.
*/ 
// combineReducers
// thunk 
// applyMiddleware
// composeWithDevTools

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './root.reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [ logger ]
})

export default store;


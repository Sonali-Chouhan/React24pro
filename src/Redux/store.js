import { configureStore } from "@reduxjs/toolkit";
// import LoginSlice from "./Reducer/SingupSlice";
//import DataReducer from "./DataReducer";
import rootreducer from "./Reducer/index"


export const store = configureStore({
  reducer:rootreducer
  // reducer: {
  //   // count: DataReducer,
    
  // },
});

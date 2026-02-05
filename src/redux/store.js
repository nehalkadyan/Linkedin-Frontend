// Redux Global Store

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"

const rootReducer = combineReducers({
    user : userReducer
})

// code for creating and exporting store using configureStore
export const store = configureStore({
    // reducers
  reducer: rootReducer,
  // middleware 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    // devtools - redux store (present)
  devTools: process.env.NODE_ENV !== "production",
});




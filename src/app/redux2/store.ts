import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import countergenReducer from "./countergen";

export const store = configureStore({
  reducer: {
    counterReducer,
    countergenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
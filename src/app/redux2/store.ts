import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter";
import countergenReducer from "./countergen";

const counterPersistConfig = {
  key: "counter",
  storage,
};

const countergenPersistConfig = {
  key: "countergen",
  storage,
};

const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

const persistedCountergenReducer = persistReducer(
  countergenPersistConfig,
  countergenReducer
);

export const store = configureStore({
  reducer: {
    counterReducer: persistedCounterReducer,
    countergenReducer: persistedCountergenReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
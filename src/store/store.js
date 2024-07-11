import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketReducer";
import counterSlice from "./reducers/counterSlice";

const rootReducer = {
  basket: basketReducer,
  counter: counterSlice,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };

import { useDispatch } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart/slice";
import pizzaSlice from "./pizza/slice";
import filterSlice from "./filter/slice";

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://632d885f519d17fb53c044bc.mockapi.io/items?page=${currentPage}&limit=3&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return data;
  }
);

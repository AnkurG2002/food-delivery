import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../../App";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products = [...action.payload.data];
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { getProducts } = productsSlice.actions;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${url}/api/products-by-categories`);
    return response.data;
  }
);

export const selectAllProducts = (state) => state.products;

export default productsSlice.reducer;

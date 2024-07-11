import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:8080";

const initialState = {
  products: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  isLoading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "basket/fetch",
  async function (_, { rejectWithValue }) {
    try {
      const { data: products } = await axios.get(`${URL}/pastry`);
      return products;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action) {
      const product = action.payload;
      const matchedProduct = state.basket.find(
        (productItem) => productItem.id === product.id
      );

      if (matchedProduct) {
        matchedProduct.items++;
      } else {
        state.basket = [...state.basket, { ...product, items: 1 }];
      }

      console.log(JSON.parse(localStorage.getItem("basket")));

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Произошла ошибка";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export const { addToBasket } = basket.actions;
export default basket.reducer;

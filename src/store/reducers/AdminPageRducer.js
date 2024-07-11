import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:8080";

const initialState = {
  prducts: [],
  isLoading: false,
  error: null,
};

export const deleteProduct = (id) => {
  return {
    type: "DELETE_PRODUCT",
    payload: id,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT':
        
      const updatedProducts = state.products.filter((product) => product.id !== action.payload);

      return {
        ...state,
        products: updatedProducts,
      };

    default:
      return state;
  }
};

export default rootReducer;
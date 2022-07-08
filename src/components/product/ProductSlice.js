import { createSlice } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products };

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    displayAll: (state) => {
      state.products = products;
    },
    filterByCategory: (state, action) => {
      const filteredProducts = products.filter(
        (product) => product.productCategory === action.payload
      );
      state.products = filteredProducts;
    },
  },
});

export const { displayAll, filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;

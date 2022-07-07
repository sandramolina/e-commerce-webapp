import { createSlice } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products };

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      const filteredProducts = products.filter(
        (product) => product.productCategory === action.payload
      );
      state.products = filteredProducts;
    },
  },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;

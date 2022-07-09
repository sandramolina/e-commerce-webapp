import { createSlice } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products, faves: [] };

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
    updateFavourites: ({ faves }, { payload }) => {
      const foundProductIndex = faves.findIndex(
        (fave) => fave.id === payload.id
      );
      if (foundProductIndex === -1) {
        faves.push(payload);
      } else {
        faves.splice(foundProductIndex, 1);
      }
    },
  },
});

export const { displayAll, filterByCategory, updateFavourites } =
  productsSlice.actions;
export default productsSlice.reducer;

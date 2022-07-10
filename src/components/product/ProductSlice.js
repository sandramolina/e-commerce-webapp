import { createSlice, createSelector } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products, faves: [] };

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
    displayFaves: (state) => {
      state.products = state.faves;
    },
  },
});

export const selectAllProducts = (state) => state.products;
export const selectByProductId = createSelector(
  [selectAllProducts, (state, productId) => productId],
  (productsList, productId) =>
    productsList.find((product) => product.id === productId)
);

export const { displayFaves, filterByCategory, updateFavourites } =
  productsSlice.actions;
export default productsSlice.reducer;

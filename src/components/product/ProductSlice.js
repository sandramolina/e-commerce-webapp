import { createSlice, createSelector } from '@reduxjs/toolkit';

import products from '../../mock';

const initialState = { products, faves: [], filteredBy: undefined };

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    displayAll: (state) => {
      state.products = products;
      state.filteredBy = undefined;
    },
    filterByCategory: (state, action) => {
      state.filteredBy = action.payload;
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

// Products
export const selectAllProducts = (state) => state.products;
export const selectByProductId = createSelector(
  [selectAllProducts, (state, productId) => productId],
  (productsList, productId) =>
    productsList.find((product) => product.id === productId)
);
export const selectByProductFilter = createSelector(
  [selectAllProducts, (state) => state.filteredBy],
  (productsList, filteredBy) => {
    const prod = !filteredBy
      ? productsList
      : productsList.filter(
          (product) => product.productCategory === filteredBy
        );
    return prod;
  }
);

export const { displayAll, displayFaves, filterByCategory, updateFavourites } =
  productsSlice.actions;
export default productsSlice.reducer;

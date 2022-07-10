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

// Products
export const selectAllProducts = (state) => state.products;
export const selectByProductId = createSelector(
  [selectAllProducts, (state, productId) => productId],
  (productsList, productId) =>
    productsList.find((product) => product.id === productId)
);

// Favourite Products
// export const selectAllFavouriteProducts = createSelector(
//   [selectAllProducts, (state) => state],
//   (productsList) => productsList.find((product) => product.isFavourite === true)
// );

// export const  = (state) => {
//   const faves = state.products.filter((e) => e.isFavourite === true);
//   console.log(faves);
// };

export const { displayFaves, filterByCategory, updateFavourites } =
  productsSlice.actions;
export default productsSlice.reducer;

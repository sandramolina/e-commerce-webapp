import { createSlice } from '@reduxjs/toolkit';

const initialState = { faves: [] };

export const favouriteProductsSlice = createSlice({
  name: 'favesState',
  initialState,
  reducers: {
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

export const { updateFavourites } = favouriteProductsSlice.actions;
export default favouriteProductsSlice.reducer;

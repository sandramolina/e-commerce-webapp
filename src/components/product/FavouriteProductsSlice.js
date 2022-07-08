import { createSlice } from '@reduxjs/toolkit';

const faves = [];
const initialState = { faves };

export const favouriteProductsSlice = createSlice({
  name: 'favesState',
  initialState,
  reducers: {
    updateFavourites: (state, action) => {
      const foundProductIndex = state.faves.findIndex(
        (fave) => fave.id === action.payload.id
      );
      if (foundProductIndex === -1) {
        state.faves.push(action.payload);
      } else {
        state.faves.splice(foundProductIndex, 1);
      }
    },
  },
});

export const { updateFavourites } = favouriteProductsSlice.actions;
export default favouriteProductsSlice.reducer;

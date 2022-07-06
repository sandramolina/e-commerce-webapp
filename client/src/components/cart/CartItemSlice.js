import { createSlice } from '@reduxjs/toolkit';

const items = [];
const initialState = { items };

export const cartItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state) => {
      state.mockCartItems.pop();
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;

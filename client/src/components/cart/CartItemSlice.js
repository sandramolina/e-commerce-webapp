import { createSlice } from '@reduxjs/toolkit';

const items = [];
const initialState = { items };

export const cartItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const arrayOfCartItems = state.items;
      const foundCartItemIndex = arrayOfCartItems.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );
      if (foundCartItemIndex !== -1) {
        arrayOfCartItems[foundCartItemIndex].count += action.payload.count;
      } else {
        arrayOfCartItems.push(action.payload);
      }
    },
    removeItemFromCart: (state) => {
      state.mockCartItems.pop();
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;

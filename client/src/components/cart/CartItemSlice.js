import { createSlice } from '@reduxjs/toolkit';

const items = [];
const initialState = { items };

export const cartItemsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // const isProductInCart = state.items.filter(cartItem => cartItem.product === action.payload.product)
      // const foundProductObject = state.items.find(cartItem => cartItem.product === action.payload.product)
      // console.log(state.items);
      console.log(action.payload.product);
      const foundCartItemIndex = state.items.findIndex(
        (cartItem) => cartItem.product.id === action.payload.product.id
      );
      console.log(foundCartItemIndex);
      if (foundCartItemIndex !== -1) {
        state.items[foundCartItemIndex].count += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemFromCart: (state) => {
      state.mockCartItems.pop();
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;

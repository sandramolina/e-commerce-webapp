import { configureStore } from '@reduxjs/toolkit';

import products from '../components/product/ProductSlice';
import cartIsOpen from '../components/cart/CartModalSlice';

const store = configureStore({
  reducer: {
    products,
    cartIsOpen,
  },
});

export default store;

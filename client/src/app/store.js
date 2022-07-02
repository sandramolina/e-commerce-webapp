import { configureStore } from '@reduxjs/toolkit';

import products from '../components/product/ProductSlice';

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;

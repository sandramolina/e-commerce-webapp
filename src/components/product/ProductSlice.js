import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductData = createAsyncThunk(
  'getProductsData',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  products: [],
  isSuccess: false,
  message: '',
  loading: false,
  faves: [],
  filteredBy: undefined,
};

export const productsSlice = createSlice({
  name: 'productsState',
  initialState,
  reducers: {
    displayAll: (state) => {
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
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.loading = true;
    },
    [getProductData.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.isSuccess = true;
    },
    [getProductData.rejected]: (state, action) => {
      state.loading = false;
      state.message = action.payload;
      state.isSuccess = false;
    },
  },
});

// Products Selectors
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

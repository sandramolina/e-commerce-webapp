import store from '../../../src/app/store';

describe('ProductSlice redux state tests', () => {
  //This first test checks that we can connect to our store and the ProductSlice
  it('Should initially set product items to an existing array of products in stock', () => {
    const state = store.getState().productsState;
    expect(state.products).toEqual([]);
  });
});

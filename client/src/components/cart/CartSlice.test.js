import store from '../../../src/app/store';

//This first test checks that we can connect to our store and the CartSlice
describe('Cart redux state tests', () => {
  it('Should initially set cart items to an empty array', () => {
    const state = store.getState().cart;
    expect(state.items).toEqual([]);
  });
});

//This test checks that we can add a new item to the cart

//This test checks that we can increase the count of an existing item to the cart

//This test checks that we can remove an specific item from the cart

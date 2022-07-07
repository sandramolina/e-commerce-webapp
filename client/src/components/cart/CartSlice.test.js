import store from '../../../src/app/store';

import mockCartItems from '../../mockCart';

import reducer, {
  addItemToCart,
  clearCart,
  removeItemFromCart,
} from './CartItemSlice';

describe('CartSlice redux state tests', () => {
  //This first test checks that we can connect to our store and the CartSlice
  it('Should initially set cart items to an empty array', () => {
    const state = store.getState().cart;
    expect(state.items).toEqual([]);
  });

  it('should handle a cartItem being added to an empty list', () => {
    const previousState = store.getState().cart;
    const newState = reducer(previousState, addItemToCart(mockCartItems[0]));
    expect(newState.items.length).toEqual(1);
  });

  it('should handle a cartItem being added to an existing list', () => {
    const previousState = store.getState().cart;
    let newState = reducer(previousState, addItemToCart(mockCartItems[0]));
    newState = reducer(newState, addItemToCart(mockCartItems[1]));
    expect(newState.items.length).toEqual(2);
  });

  //This test checks that we can increase the count of an existing item to the cart
  it('should increase the count if same product exist in the list', () => {
    const previousState = store.getState().cart;
    let newState = reducer(previousState, addItemToCart(mockCartItems[0]));
    newState = reducer(newState, addItemToCart(mockCartItems[0]));
    expect(newState.items[0].count).toEqual(4);
  });

  //This test checks that we can remove an specific item from the cart when passing the itemCart id to be removed
  it('should remove itemCart from the list', () => {
    const previousState = store.getState().cart;
    let newState = reducer(previousState, addItemToCart(mockCartItems[0]));
    newState = reducer(newState, removeItemFromCart(1));
    expect(newState.items).toEqual([]);
  });

  it('should clear list completely', () => {
    const previousState = store.getState().cart;
    let newState = reducer(previousState, addItemToCart(mockCartItems[0]));
    newState = reducer(newState, addItemToCart(mockCartItems[1]));
    newState = reducer(newState, clearCart());
    expect(newState.items).toEqual([]);
  });
});

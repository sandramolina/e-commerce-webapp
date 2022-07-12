import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../cart/CartItemSlice';

const Checkout = ({ product }) => {
  // Setting itemCart object that will be added to the cart:
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const itemCount = Number(count);

    const id = Math.floor(Math.random() * 100 + 1);
    const itemCartObject = {
      id,
      product,
      count: itemCount,
    };
    dispatch(addItemToCart(itemCartObject));
  };

  const handleCountSelection = (event) => setCount(event.target.value);
  return (
    <div>
      {' '}
      <form onSubmit={handleFormSubmit}>
        <select name='count' onChange={handleCountSelection}>
          <option value='0' defaultValue>
            -Chose quantity-
          </option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <Button type='submit' size='sm' className='colour-dd-tt'>
          Add to Cart
        </Button>
      </form>
    </div>
  );
};

export default Checkout;

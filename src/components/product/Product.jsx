import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../cart/CartItemSlice';
import '../../css/main.min.css';
import './Product.css';
import { ReactComponent as Heart } from '../../images/icons/heart-fill.svg';

import { updateFavourites } from './ProductSlice';

const Product = ({ product }) => {
  // Setting itemCart object that will be added to the cart:
  const [count, setCount] = useState(0);

  const handleCountSelection = (event) => setCount(event.target.value);

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

  // Checking if certaing product is included in the favourite list:
  const favesArray = useSelector(({ productsState }) => productsState.faves);
  let isFave = false;
  const foundFave = favesArray.find((fave) => fave.id === product.id);
  if (foundFave !== undefined) {
    isFave = true;
  }

  return (
    <div>
      <Card style={{ width: '10rem' }}>
        <Card.Img
          alt={`beautiful representation for the product ${product.title}`}
          className='.img-fluid. max-width: 50%'
          variant='top'
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rating: {product.rating.averageRate}</Card.Text>
          <Card.Text>
            {product.price.currencyUnit.symbol} {product.price.amount}
          </Card.Text>
          <form onSubmit={handleFormSubmit}>
            <select name='count' onChange={handleCountSelection}>
              <option value='0' defaultValue>
                -Chose quantity-
              </option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            <input type='submit' value='addToCart' />
          </form>
          <Heart
            className={isFave ? 'heart-faved' : 'heart'}
            onClick={() => dispatch(updateFavourites(product))}
          />
          <Nav.Link as={Link} to={`/${product.id}`}>
            SHOP
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

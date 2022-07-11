import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../css/main.min.css';
import './Product.css';
import { ReactComponent as Heart } from '../../images/icons/heart-fill.svg';

import { updateFavourites } from './ProductSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

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
          <Heart
            className={isFave ? 'heart-faved' : 'heart'}
            onClick={() => dispatch(updateFavourites(product))}
          />
          <Nav.Link as={Link} to={`/blahs/${product.id}`}>
            SHOP
          </Nav.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

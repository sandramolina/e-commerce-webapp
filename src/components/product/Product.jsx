import React from 'react';

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../css/main.min.css';
import './Product.css';
import { ReactComponent as Heart } from '../../images/icons/heart-fill.svg';

const Product = ({ product }) => (
  <div>
    <Card style={{ width: '10rem', height: '23rem' }}>
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
        <div className='card-bottom'>
          <Heart
          // className={isFave ? 'heart-faved' : 'heart'}
          // onClick={() => dispatch(updateFavourites(product))}
          />
          <Button as={Link} to={`/${product.id}`} className='shop-text'>
            SHOP
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>
);
export default Product;

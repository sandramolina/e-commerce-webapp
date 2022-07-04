import React from 'react';

import { Button, Card } from 'react-bootstrap';

import '../../css/main.min.css';

const Product = ({ product }) => (
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
        <Card.Text>Rating: {product.rating}</Card.Text>
        <Card.Text>
          {product.price.currencyUnit.symbol} {product.price.amount}
        </Card.Text>
        <Button variant='primary' size='sm'>
          SHOP
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default Product;

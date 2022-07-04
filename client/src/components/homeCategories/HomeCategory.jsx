import React from 'react';

import { Button, Card } from 'react-bootstrap';

import './HomeCategories.css';

function HomeCategory({ category }) {
  return (
    <div>
      <Card className='category-card'>
        <Card.Img
          className='category-img'
          alt='Category avatar'
          src='https://wwd.com/wp-content/uploads/2021/12/best-makeup-kits.jpg?w=911'
        />
        <Card.Title>{category.title}</Card.Title>
        <Button variant='primary' size='sm'>
          <p className='shop-text'>SHOP</p>
        </Button>
      </Card>
    </div>
  );
}

export default HomeCategory;

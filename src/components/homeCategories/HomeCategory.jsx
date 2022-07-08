import React from 'react';

import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { filterByCategory } from '../product/ProductSlice';

import './HomeCategories.css';

function HomeCategory({ category }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterByCategory(category.title));
  };

  return (
    <div>
      <Card className='category-card'>
        <Card.Img
          className='category-img'
          alt='Category avatar'
          src='https://wwd.com/wp-content/uploads/2021/12/best-makeup-kits.jpg?w=911'
        />
        <Card.Title>{category.title}</Card.Title>
        <Link to={`/products/${category.title.toLowerCase()}`}>
          <Button
            variant='primary'
            size='sm'
            type='submit'
            onClick={handleClick}
          >
            <p className='shop-text'>SHOP</p>
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default HomeCategory;

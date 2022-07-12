import React from 'react';

import { useDispatch } from 'react-redux';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { filterByCategory } from '../product/ProductSlice';

import './HomeCategories.css';

function HomeCategory({ category }) {
  const { t } = useTranslation();
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
          src={category.imageUrl}
        />
        <Card.Title>{category.string}</Card.Title>
        <Link to={`/products/${category.title.toLowerCase()}`}>
          <Button
            variant='primary'
            size='sm'
            type='submit'
            onClick={handleClick}
          >
            <p className='shop-text'>{t('shop')}</p>
          </Button>
        </Link>
      </Card>
    </div>
  );
}

export default HomeCategory;

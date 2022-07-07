import React from 'react';

import { useSelector } from 'react-redux';

import Product from '../components/product/Product';

import './ProductGrid.css';

const ProductGrid = () => {
  const productsToShow = useSelector((state) => state.productsState.products);
  const productNodes = productsToShow.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <ul>
      <div className='products'>{productNodes} </div>
    </ul>
  );
};

export default ProductGrid;

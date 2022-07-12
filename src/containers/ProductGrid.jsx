import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectByProductFilter } from '../components/product/ProductSlice';
import Product from '../components/product/Product';

import './ProductGrid.css';

const ProductGrid = () => {
  const { category } = useParams();
  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }
  const categoryTitle = titleCase(category);

  const productsToShow = useSelector((state) =>
    selectByProductFilter(state.productsState)
  );
  // useSelector((state) => state.productsState.products);
  const productNodes = productsToShow.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <div className='product-grid'>
      <h1 className='product-title'> {categoryTitle} Products</h1>
      {productNodes.length !== 0 ? (
        <div className='products'>{productNodes} </div>
      ) : (
        <h3>No products to show</h3>
      )}
    </div>
  );
};

export default ProductGrid;

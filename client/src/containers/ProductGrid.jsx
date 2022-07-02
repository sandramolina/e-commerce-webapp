import React from 'react';

import { useSelector } from 'react-redux';

import Product from '../components/product/Product';

const ProductGrid = () => {
  const products = useSelector((state) => state.products);
  const productNodes = products.map((product) => (
    <Product product={product} key={product.id} />
  ));
  return (
    <ul>
      <div>{productNodes} </div>
    </ul>
  );
};

export default ProductGrid;

import React from 'react';

import products from '../mock';
import Product from '../components/product/Product';

const ProductGrid = () => {
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

import React from 'react';

import HomeCategory from '../components/homeCategories/HomeCategory';

import './CategoriesBox.css';

function CategoriesBox() {
  const categories = [
    { id: 1, title: 'EYES' },
    { id: 2, title: 'FACE' },
    { id: 3, title: 'LIPS' },
    { id: 4, title: 'NAILS' },
  ];
  const categoryNodes = categories.map((category) => (
    <HomeCategory category={category} key={category.id} />
  ));
  return <div>{categoryNodes}</div>;
}

export default CategoriesBox;

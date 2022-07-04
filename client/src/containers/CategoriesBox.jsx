import React from 'react';

import HomeCategory from '../components/homeCategories/HomeCategory';

import './CategoriesBox.css';

function CategoriesBox() {
  const categories = [
    { title: 'EYES' },
    { title: 'FACE' },
    { title: 'LIPS' },
    { title: 'NAILS' },
  ];
  const categoryNodes = categories.map((category) => (
    <HomeCategory category={category} />
  ));
  return <div>{categoryNodes}</div>;
}

export default CategoriesBox;

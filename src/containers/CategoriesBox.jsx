import React from 'react';

import { useTranslation } from 'react-i18next';

import HomeCategory from '../components/homeCategories/HomeCategory';

import './CategoriesBox.css';

function CategoriesBox() {
  const { t } = useTranslation();
  const categories = [
    {
      id: 1,
      title: 'EYES',
      string: t('eyes'),
      imageUrl:
        'https://raw.githubusercontent.com/sandramolina/assets/main/other/home-eyes.png',
    },
    {
      id: 2,
      title: 'FACE',
      string: t('face'),
      imageUrl:
        'https://raw.githubusercontent.com/sandramolina/assets/main/other/home-face.png',
    },
    {
      id: 3,
      title: 'LIPS',
      string: t('lips'),
      imageUrl:
        'https://raw.githubusercontent.com/sandramolina/assets/main/other/home-lips.png',
    },
    {
      id: 4,
      title: 'NAILS',
      string: t('nails'),
      imageUrl:
        'https://raw.githubusercontent.com/sandramolina/assets/main/other/home-nails.png',
    },
  ];
  const categoryNodes = categories.map((category) => (
    <HomeCategory category={category} key={category.id} />
  ));
  return <div className='category-box'>{categoryNodes}</div>;
}

export default CategoriesBox;

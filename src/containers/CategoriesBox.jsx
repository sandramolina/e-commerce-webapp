import React from 'react';

import { useTranslation } from 'react-i18next';

import HomeCategory from '../components/homeCategories/HomeCategory';

import './CategoriesBox.css';

function CategoriesBox() {
  const { t } = useTranslation();
  const categories = [
    { id: 1, title: 'EYES', string: t('eyes') },
    { id: 2, title: 'FACE', string: t('face') },
    { id: 3, title: 'LIPS', string: t('lips') },
    { id: 4, title: 'NAILS', string: t('nails') },
  ];
  const categoryNodes = categories.map((category) => (
    <HomeCategory category={category} key={category.id} />
  ));
  return <div>{categoryNodes}</div>;
}

export default CategoriesBox;

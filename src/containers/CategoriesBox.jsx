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
        'https://cdn.mos.cms.futurecdn.net/o2sQWDyqqjFDXhFfrQSqH6-1920-80.jpg.webp',
    },
    {
      id: 2,
      title: 'FACE',
      string: t('face'),
      imageUrl:
        'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/02/22/20/istock-855759398.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
    },
    {
      id: 3,
      title: 'LIPS',
      string: t('lips'),
      imageUrl:
        'https://i0.wp.com/www.beautybucketeer.com/wp-content/uploads/2016/02/Rimmel-The-Only-1-Lipstick-Rectangle-1.jpg?resize=1080%2C810',
    },
    {
      id: 4,
      title: 'NAILS',
      string: t('nails'),
      imageUrl:
        'https://glaminati.com/wp-content/uploads/2018/02/tp-shellac-nails-1.jpg',
    },
  ];
  const categoryNodes = categories.map((category) => (
    <HomeCategory category={category} key={category.id} />
  ));
  return <div className='category-box'>{categoryNodes}</div>;
}

export default CategoriesBox;

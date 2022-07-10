const products = [
  {
    id: 1,
    title: 'Super Lip Gloss',
    stock: 550,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 13.87,
      amountMajor: 13,
      amountMajorLong: 13,
      amountMajorInt: 13,
      amountMinor: 1387,
      amountMinorLong: 1387,
      amountMinorInt: 1387,
      minorPart: 87,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'LIPS',
    image:
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/lipBalm.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 4.5,
      count: 1500,
    },
    ingredientsLists: [
      {
        ingredient: 'Fragrance',
        vegan: true,
        noAlcohol: true,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-red.png',
      },
      {
        colourName: 'React Blue',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-react-blue.png',
      },
      {
        colourName: 'Emerald',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-emerald.png',
      },
    ],
    isFavourite: false,
  },
  {
    id: 2,
    title: 'Super Lip Gloss STAR',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'LIPS',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
  {
    id: 3,
    title: 'Super Mascara',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'EYES',
    image:
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/mascara.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: true,
  },
  {
    id: 4,
    title: 'The Foundation',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'FACE',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
  {
    id: 5,
    title: 'HEY HEY',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'NAILS',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
  {
    id: 6,
    title: 'Eyeshadow Milenium',
    stock: 1650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'EYES',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
  {
    id: 7,
    title: 'HEY HEY',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'NAILS',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
  {
    id: 8,
    title: 'HEY YOUUUUUU',
    stock: 650,
    price: {
      currencyUnit: {
        code: 'GBP',
        numericCode: 826,
        decimalPlaces: 2,
        numeric3Code: '826',
        countryCodes: ['GG', 'IM', 'GB', 'JE'],
        pseudoCurrency: false,
        symbol: '£',
      },
      amount: 18.99,
      amountMajor: 18,
      amountMajorLong: 18,
      amountMajorInt: 18,
      amountMinor: 1899,
      amountMinorLong: 1899,
      amountMinorInt: 1899,
      minorPart: 99,
      positiveOrZero: true,
      negativeOrZero: false,
      positive: true,
      scale: 2,
      zero: false,
      negative: false,
    },
    productCategory: 'NAILS',
    image:
      'https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB_HOL2021_I_T2PRODUCT_CONCRETE_GLOSS_BOMB_HEAT_CLOSED_LAVENDER_SAVAGE_1200x1500_d9cf3fcb-3888-4bf9-8ce8-a333017a95cc.jpg?v=1646689585',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredientsLists: [
      {
        ingredient: 'Oil',
        vegan: true,
        noAlcohol: false,
      },
      {
        ingredient: 'Water',
        vegan: true,
        noAlcohol: true,
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage: 'url',
      },
    ],
    isFavourite: false,
  },
];

export default products;

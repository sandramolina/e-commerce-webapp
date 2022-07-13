const products = [
  {
    id: 1,
    title: 'Lip Glossy',
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
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in four creamy squirrels',
    rating: {
      averageRate: 4.5,
      count: 1500,
    },
    ingredients: [
      {
        ingredient: 'Fragrance',
      },
      {
        ingredient: 'Water',
      },
      {
        ingredient: 'Argan Oil',
      },
      {
        ingredient: 'Mr Blobby',
      },
    ],
    colours: [
      {
        colourName: 'Passion Red',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-red.png',
      },
      {
        colourName: 'Hot Pink',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-hot-pink.png',
      },
      {
        colourName: 'Get Nude',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-getnude.png',
      },
      {
        colourName: 'Emerald',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-emerald.png',
      },
    ],
    isFavourite: false,
    secondSlide:
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/lipBalm-02.png',
  },
  {
    id: 2,
    title: 'Mr Bloggy',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/lipstick_01.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy bananas',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
        colourName: 'Hot Pink',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-hot-pink.png',
      },
      {
        colourName: 'Get Nude',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-getnude.png',
      },
      {
        colourName: 'Rosy Maeve',
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-rosy-maeve.png',
      },
    ],
    isFavourite: false,
    secondSlide: '',
  },
  {
    id: 3,
    title: 'Bad Gal',
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
    ingredients: [
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
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-red.png',
      },
    ],
    isFavourite: true,
    secondSlide: '',
  },
  {
    id: 4,
    title: 'mOist',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/foundation-01.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
        colourImage:
          'https://raw.githubusercontent.com/sandramolina/assets/main/colors/color-red.png',
      },
    ],
    isFavourite: false,
    secondSlide: '',
  },
  {
    id: 5,
    title: 'HEY Shine',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/nails-01.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
    secondSlide: '',
  },
  {
    id: 6,
    title: 'Aye Mascara',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/mascara-b.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
    secondSlide: '',
  },
  {
    id: 7,
    title: 'Sparkly!',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/nails-02.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
    secondSlide: '',
  },
  {
    id: 8,
    title: 'Hello Holo',
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
      'https://raw.githubusercontent.com/sandramolina/assets/main/products/nails-03.png',
    shortDescription:
      'Our #1 gloss—now with pure, creamy color and incredible shine. Lips are instantly smoother and more voluminous-looking.',
    longDescription:
      'Your favorite feel-good, look-great lip gloss, now with medium to full-coverage color—and zero shimmer. Universally-flattering, shimmer-free color, in seven creamy shades',
    rating: {
      averageRate: 3.5,
      count: 100,
    },
    ingredients: [
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
    secondSlide: '',
  },
];

export default products;

const mockCartItems = [
  {
    id: 1,
    product: {
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
          colourImage: 'url',
        },
        {
          colourName: 'Ruby Woo',
          colourImage: 'url',
        },
        {
          colourName: 'Emerald',
          colourImage: 'url',
        },
      ],
    },
    count: 2,
  },
  {
    id: 2,
    product: {
      id: 2,
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
        'https://raw.githubusercontent.com/sandramolina/assets/main/products/mascara.png',
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
          colourImage: 'url',
        },
        {
          colourName: 'Ruby Woo',
          colourImage: 'url',
        },
        {
          colourName: 'Emerald',
          colourImage: 'url',
        },
      ],
    },
    count: 1,
  },
];

//console.log(mockCartItems[0].count);

export default mockCartItems;

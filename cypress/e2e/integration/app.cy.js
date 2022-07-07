// import React from 'react';

// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';

// import { store } from '../../../src/app/store';
// import App from '../../../src/App';

// test('renders navBar', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );

//   expect(getByText(/learn/i)).toBeInTheDocument();
// });

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays app', () => {
    cy.get('.App div').should('be.visible');
  });

  it('displays navBar', () => {
    cy.get('nav').should('be.visible');
  });

  it('displays image carousel', () => {
    cy.get('.carousel div').should('be.visible');
  });

  it('displays category cards', () => {
    cy.get('.category-card div').should('be.visible');
  });

  it('displays footer', () => {
    cy.get('.footer div').should('be.visible');
  });
});

describe('Products Page', () => {
  beforeEach(() => {
    cy.visit('/products');
  });

  it('displays products container', () => {
    cy.get('.products div').should('be.visible');
  });

  it('displays product card', () => {
    cy.get('.card div').should('be.visible');
  });
});

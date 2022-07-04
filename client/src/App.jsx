import React from 'react';

import './App.css';
import NavBar from './components/navBar/NavBar';
import ProductGrid from './containers/ProductGrid';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ProductGrid />
    </div>
  );
}

export default App;

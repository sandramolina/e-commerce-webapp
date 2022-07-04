import React from 'react';

import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeCarousel from './components/homeCarousel/HomeCarousel';
import CategoriesBox from './containers/CategoriesBox';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <CategoriesBox />
    </div>
  );
}

export default App;

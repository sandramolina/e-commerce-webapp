import React from 'react';

import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeCarousel from './components/homeCarousel/HomeCarousel';
import CategoriesBox from './containers/CategoriesBox';
import Footer from './components/footer/Footer';
import Offc from './components/product/Offc';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <Offc />
      <CategoriesBox />
      <Footer />
    </div>
  );
}

export default App;

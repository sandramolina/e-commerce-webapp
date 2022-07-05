import React from 'react';

import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeCarousel from './components/homeCarousel/HomeCarousel';
import CategoriesBox from './containers/CategoriesBox';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
      <CategoriesBox />
      <Footer />
    </div>
  );
}

export default App;

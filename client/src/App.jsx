import React from 'react';

import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeCarousel from './components/homeCarousel/HomeCarousel';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <HomeCarousel />
    </div>
  );
}

export default App;

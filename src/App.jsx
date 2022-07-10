import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/navBar/NavBar';
import HomeCarousel from './components/homeCarousel/HomeCarousel';
import CategoriesBox from './containers/CategoriesBox';
import Footer from './components/footer/Footer';
import CartModal from './components/cart/CartModal';
import ProductGrid from './containers/ProductGrid';
import DetailedProduct from './components/product/detailedProduct/DetailedProduct';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HomeCarousel />
                <CategoriesBox />
              </>
            }
          />
          <Route path='products' element={<ProductGrid />}>
            <Route path=':category' element={<ProductGrid />} />
          </Route>
          <Route path=':id' element={<DetailedProduct />} />
        </Routes>
        <NavBar />
        <CartModal />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

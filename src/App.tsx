import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';

import './App.scss';

const App: React.FC = () => {
  return (
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
};

export default App;

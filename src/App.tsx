import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import './App.scss';


const App: React.FC = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/product/:id" element={<Product/>} />
                  <Route path="/cart" element={<Cart/>} />
                  <Route path="*" element={<Error/>} />
                </Routes>
                <Footer/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from  './components/Header'
import { CartContext } from './CartContext';
import { StoreData } from './StoreData';

// Import pages from the pages folder
import Home from './pages/Home';
import Category from './pages/Catageory';
import Product from './pages/Product';
import Cart from './pages/Cart';

import './App.css';

function App() {
  // Initialize StoreData and state management
  const storeData = useMemo(() => new StoreData(), []);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(storeData.getCart());

  // Fetch categories on component mount
  useEffect(() => {
    storeData.getCategories().then(data => setCategories(data));
  }, [storeData]);

  // Update the cart state
  const updateCart = (cart) => {
    storeData.setCart(cart);
    setCart(cart);
  };

  return (
    <CartContext.Provider value={{ cart, setCart: updateCart }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home categories={categories} />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
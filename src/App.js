import './App.css';
import { Navbar } from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';

import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

//pages
import Homepage from './pages/homepage';
import About from './pages/about';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Products />

      <Footer />
    </>
  );
}

export default App;

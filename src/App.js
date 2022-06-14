import './App.css';
import { Navbar } from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';

import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
//pages
import Homepage from './pages/homepage';
import About from './pages/about';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterComplete from './components/RegisterComplete';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/register/complete" element={<RegisterComplete />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

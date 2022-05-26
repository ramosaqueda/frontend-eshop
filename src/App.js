import './App.css';
import { Navbar } from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Homepage from './pages/homepage';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails'; 
import AddProduct from './components/AddProduct'; 
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} /> 
        <Route path="/add-product" element={<AddProduct />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;


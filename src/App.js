import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Profile from './Pages/Profile';
import Products from './Pages/Products';
import Footer from './Components/Footer/Footer';
import Page404 from './Pages/Page404';
import Header from './Components/Header/Header';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
      <div className='APP_bg'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Page404 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/productdetails' element={<ProductDetails />} />
          <Route path='/home/productdetails' element={<ProductDetails />} />
          <Route path='/shop/productdetails' element={<ProductDetails />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;

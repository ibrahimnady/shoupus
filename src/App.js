import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/ProductDetails';
import Profile from './Pages/Profile';

function App() {
  return (
    <>
      <div className='APP_bg'>
        <Header />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='home' element={<Home />} />
          <Route path='home/productdetails' element={<ProductDetails />} />
          <Route path='home/profile' element={<Profile />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

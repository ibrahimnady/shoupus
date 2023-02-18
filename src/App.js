import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <div className='APP_bg'>
        <Header />
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </div>

    </>
  );
}

export default App;

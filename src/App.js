import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import { ArrowRight, ArchiveFill, Router } from "react-bootstrap-icons"
import { Routes, Route } from 'react-router-dom'
import ProductAll from './page/ProductAll';
import LoginPage from './page/LoginPage';
import ProductDetail from './page/ProductDetail';
import Navbar from './page/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './page/PrivateRoute';

function App() {
  //false는 로그인 안된 상태, true는 로그인한 상태
  const [authenticate, setauthenticate] = useState(false);
  
  useEffect(() => {
    console.log("로그인 상태 확인", authenticate);
  }, [authenticate]);
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductAll />} />
      <Route path='/login' element={<LoginPage setauthenticate = {setauthenticate} />} />
      <Route path='/productdetail' element={<ProductDetail />} />
      <Route path='/product/:id' element={<PrivateRoute authenticate = {authenticate} />} />
    </Routes>
   </>
  );
}

export default App;


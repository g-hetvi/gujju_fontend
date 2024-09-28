import React from "react";
import Slideshow from './components/Slideshow';
import './index.css'; 
import Home from "./home/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./categories/Cart";
import UserProfile from "./components/UserProfile";
import PaymentOptions from "./categories/PaymentOptions";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import OrderForm from "./categories/OrderForm";
import Breakfast from "./categories/breakfast"; 
import Thali from "./categories/Thali";
import Roti from "./categories/Roti";
import Drinks from "./categories/Drinks";
import Sweet from "./categories/Sweet";
import Custmization from "./categories/Custmization";
import All from "./categories/All"; 
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  const [authUser, setAuthUser] = useAuth();
  const location = useLocation(); 

  return (
    <>
      <Navbar /> {/* Place Navbar here so it's visible on all pages */}
      <div className="App">
        <div className="relative">
          {/* Slideshow */}
          {location.pathname === '/' && <Slideshow />}
        </div>
      </div>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />  
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/orderform" element={<OrderForm />} /> 
          <Route path="/userprofile" element={<UserProfile />} />       
          <Route path="/breakfast" element={<Breakfast />} /> 
          <Route path="/thali" element={<Thali />} /> 
          <Route path="/roti" element={<Roti />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/drinks" element={<Drinks />} /> 
          <Route path="/sweet" element={<Sweet />} /> 
          <Route path="/custmization" element={<Custmization />} />  
          <Route path="/paymentoptions" element={<PaymentOptions />} />  
          <Route path="/all" element={<All />} /> 
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths */}
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

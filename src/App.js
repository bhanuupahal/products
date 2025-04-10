import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from './Components/NavbarSection/Navbar';
import Footer from './Components/FooterSection/Footer';
import Home from './Components/HomeSection/Home';
import Login from './Components/LoginSection/Login';
import Register from './Components/LoginSection/Register';
import Categories from './Components/CategoriesSection/Categories';
import ForgotPassword from './Components/LoginSection/ForgotPassword';
import WordPress from './Components/CategoriesSection/WordPress';
import PHP from './Components/CategoriesSection/PHP';
import HTML from './Components/CategoriesSection/HTML';
import JavaScript from './Components/CategoriesSection/JavaScript';
import MobileAppDevelopment from './Components/CategoriesSection/MobileAppDevelopment';
import Plugins from './Components/CategoriesSection/Plugins';
import AdminLayout from './Components/AdminPanelSection/AdminDashboard/AdminLayout';
import AdminDashboard from './Components/AdminPanelSection/AdminDashboard/AdminDashboard';
import AddProduct from './Components/AdminPanelSection/AdminDashboard/AddProduct';
import ProductList from './Components/AdminPanelSection/AdminDashboard/ProductList';
import TransactionHistory from './Components/AdminPanelSection/AdminDashboard/TransactionHistory';
import PaymentSettings from './Components/AdminPanelSection/AdminDashboard/PaymentSettings';
import UserManagement from './Components/AdminPanelSection/AdminDashboard/UserManagement';
import CartList from './Components/HomeSection/CartList';
import CheckoutPage from './Components/HomeSection/CheckoutPage';

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'React Complete Guide',
      price: 4999,
      quantity: 1,
      image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
      instructor: 'manoj bhati',
      duration: '15 hours',
      students: 1500,
    },
    {
      id: 2,
      name: 'Python Masterclass',
      price: 3499,
      quantity: 1,
      image: 'https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png',
      instructor: 'manoj',
      duration: '20 hours',
      students: 2200,
    }
  ]);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="App">
      <Toaster position="top-right" />
      <Routes>
        {/* Public Routes - with Navbar and Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                  path="/cart" 
                  element={
                    <CartList 
                      cartItems={cartItems} 
                      setCartItems={setCartItems}
                      calculateTotal={calculateTotal}
                    />
                  } 
                />
                <Route 
                  path="/checkout" 
                  element={
                    <CheckoutPage 
                      cartItems={cartItems} 
                      calculateTotal={calculateTotal}
                    />
                  } 
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/wordpress" element={<WordPress />} />
                <Route path="/php" element={<PHP />} />
                <Route path="/html" element={<HTML />} />
                <Route path="/javascript" element={<JavaScript />} />
                <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
                <Route path="/plugins" element={<Plugins />} />
              </Routes>
              <Footer />
            </>
          }
        />

        {/* Admin Routes - without Navbar and Footer */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<ProductList />} />
          <Route path="transactions" element={<TransactionHistory />} />
          <Route path="payment-settings" element={<PaymentSettings />} />
           <Route path="user-management" element={<UserManagement />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;










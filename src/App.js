import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/FooterSection/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Categories from './Components/Categories';
import ForgotPassword from './Components/ForgotPassword';
import WordPress from './Components/CategoriesSection/WordPress';
import PHP from './Components/CategoriesSection/PHP';
import HTML from './Components/CategoriesSection/HTML';
import JavaScript from './Components/CategoriesSection/JavaScript';
import MobileAppDevelopment from './Components/CategoriesSection/MobileAppDevelopment';
import Plugins from './Components/CategoriesSection/Plugins';
import AdminLayout from './Components/Dashboard/AdminDashboard/AdminLayout';
import AdminDashboard from './Components/Dashboard/AdminDashboard/AdminDashboard';
import AddProduct from './Components/Dashboard/AdminDashboard/AddProduct';
import ProductList from './Components/Dashboard/AdminDashboard/ProductList';
import TransactionHistory from './Components/Dashboard/AdminDashboard/TransactionHistory';
import PaymentSettings from './Components/Dashboard/AdminDashboard/PaymentSettings';
import UserManagement from './Components/Dashboard/AdminDashboard/UserManagement';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes - with Navbar and Footer */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
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



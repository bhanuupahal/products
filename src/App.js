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


function App() {
  return (
    <div className="App">
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
        
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

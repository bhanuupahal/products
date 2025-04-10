import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const isAdmin = localStorage.getItem('isAdmin');
    
    if (token && isAdmin === 'true') {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!identifier.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(identifier.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    localStorage.setItem('adminToken', 'dummy-jwt-token');
    localStorage.setItem('isAdmin', 'true');
    navigate('/admin/dashboard');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300
      ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-purple-50'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm
          ${isDarkMode ? 'bg-gray-800 shadow-gray-700/30' : 'bg-white/80'}`}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className={`hidden md:flex w-1/2 bg-cover bg-center items-center justify-center
            ${isDarkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
            <div className="text-center p-8">
              <div className="mb-4 flex justify-center">
                <div className={`p-4 rounded-full 
                  ${isDarkMode ? 'bg-gray-600' : 'bg-white/20'}`}>
                  <ShieldCheck className="w-16 h-16 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Admin Portal
              </h3>
              <p className="text-gray-200">
                This portal is restricted to authorized administrators only.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="mb-8 text-center">
              <h2 className={`text-2xl font-bold mb-2
                ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Admin Login
              </h2>
              <p className={`text-sm
                ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Please enter your credentials to continue
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 bg-red-100 dark:bg-red-900/30 text-red-500 dark:text-red-400 px-4 py-3 rounded-lg text-sm text-center"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold mb-2 text-left
                  ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className={`h-5 w-5 
                      ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type="email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className={`w-full pl-10 pr-3 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200
                      ${isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'}`}
                    placeholder="Enter admin email"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 text-left
                  ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className={`h-5 w-5 
                      ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-10 pr-12 py-2.5 rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200
                      ${isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'}`}
                    placeholder="Enter password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm
                      ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-2.5 rounded-lg font-semibold shadow-lg transition-all duration-300
                  ${isDarkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/30' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'}`}
              >
                Sign in
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;

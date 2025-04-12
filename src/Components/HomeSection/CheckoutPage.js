import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Globe, ShieldCheck, Lock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useTheme } from '../../context/ThemeContext';

const CheckoutPage = ({ cartItems = [], calculateTotal }) => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Redirect to cart if no items
    if (!cartItems || cartItems.length === 0) {
      toast.error('Your cart is empty!');
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e) => {
    setBillingInfo({
      ...billingInfo,
      [e.target.name]: e.target.value
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const validateForm = () => {
    if (!billingInfo.fullName.trim()) {
      toast.error('Please enter your full name');
      return false;
    }
    if (!billingInfo.email.trim() || !billingInfo.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!billingInfo.phone.trim() || billingInfo.phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear cart after successful payment
      localStorage.setItem('cart', JSON.stringify([]));
      
      // Show success message
      toast.success('Payment successful! Redirecting to courses...', {
        duration: 3000
      });

      // Redirect to courses page after delay
      setTimeout(() => {
        navigate('/');
      }, 3000);

    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={`min-h-screen ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    } py-12 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-extrabold p-16 ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
              : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
          } bg-clip-text text-transparent`}>
            Secure Checkout
          </h1>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            You're just a few steps away from accessing your courses
          </p>
        </div>

        {cartItems && cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Information */}
            <div className={`${
              isDarkMode 
                ? 'bg-gray-800 shadow-xl' 
                : 'bg-white shadow-xl'
            } rounded-2xl p-8`}>
              <h2 className={`text-2xl font-bold mb-8 flex items-center gap-2 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-900'
              }`}>
                <Lock className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                Billing Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    required
                    value={billingInfo.fullName}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-2.5 text-sm ${
                      isDarkMode
                        ? 'text-gray-100 bg-gray-700 border-gray-600 focus:border-blue-400 hover:border-gray-500'
                        : 'text-gray-900 bg-transparent border-gray-200 focus:border-blue-600 hover:border-gray-300'
                    } rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer shadow-sm transition-colors`}
                    placeholder=" "
                  />
                  <label 
                    htmlFor="fullName"
                    className={`absolute text-sm ${
                      isDarkMode
                        ? 'text-gray-400 bg-gray-800 peer-focus:text-blue-400'
                        : 'text-gray-500 bg-white peer-focus:text-blue-600'
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className={`block w-full px-4 py-2.5 text-sm ${
                      isDarkMode
                        ? 'text-gray-100 bg-gray-700 border-gray-600 focus:border-blue-400 hover:border-gray-500'
                        : 'text-gray-900 bg-transparent border-gray-200 focus:border-blue-600 hover:border-gray-300'
                    } rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer shadow-sm transition-colors`}
                    placeholder=" "
                  />
                  <label 
                    htmlFor="email"
                    className={`absolute text-sm ${
                      isDarkMode
                        ? 'text-gray-400 bg-gray-800 peer-focus:text-blue-400'
                        : 'text-gray-500 bg-white peer-focus:text-blue-600'
                    } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                  >
                    Email Address *
                  </label>
                </div>

                <div className="relative mb-6">
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={billingInfo.phone}
                      onChange={handleInputChange}
                      className={`block w-full px-4 py-2.5 text-sm ${
                        isDarkMode
                          ? 'text-gray-100 bg-gray-700 border-gray-600 focus:border-blue-400 hover:border-gray-500'
                          : 'text-gray-900 bg-transparent border-gray-200 focus:border-blue-600 hover:border-gray-300'
                      } rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer shadow-sm transition-colors`}
                      placeholder=" "
                    />
                    <label 
                      htmlFor="phone"
                      className={`absolute text-sm ${
                        isDarkMode
                          ? 'text-gray-400 bg-gray-800 peer-focus:text-blue-400'
                          : 'text-gray-500 bg-white peer-focus:text-blue-600'
                      } duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
                    >
                      Phone Number *
                    </label>
                  </div>
                  <div className="absolute -bottom-6 left-0">
                  
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                  } text-white py-3 rounded-lg transition-all duration-200 font-medium 
                  flex items-center justify-center gap-2 shadow-lg mt-8
                  ${isProcessing ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  {isProcessing ? 'Processing...' : 'Place Secure Order'}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className={`${
                isDarkMode 
                  ? 'bg-gray-800 shadow-xl' 
                  : 'bg-white shadow-xl'
              } rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold mb-8 ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}>Order Summary</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className={`flex items-start space-x-4 p-4 ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                    } rounded-lg`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className={`font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>{item.name}</h3>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Quantity: {item.quantity}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-xs ${
                            isDarkMode
                              ? 'bg-blue-900/50 text-blue-300'
                              : 'bg-blue-100 text-blue-800'
                          } px-2 py-1 rounded-full`}>
                            {item.duration}
                          </span>
                          <span className={`text-xs ${
                            isDarkMode
                              ? 'bg-purple-900/50 text-purple-300'
                              : 'bg-purple-100 text-purple-800'
                          } px-2 py-1 rounded-full`}>
                            {item.instructor}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`font-medium ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className={`border-t ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  } pt-6 mt-6`}>
                    <div className="flex justify-between items-center mb-4">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Subtotal</span>
                      <span className={`font-medium ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>{formatPrice(calculateTotal())}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Platform Fee</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span className={`font-medium ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-900'
                      }`}>Total Amount</span>
                      <span className={`text-2xl font-bold ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                  </div>

                  <div className={`${
                    isDarkMode
                      ? 'bg-blue-900/20 text-blue-300'
                      : 'bg-blue-50 text-blue-800'
                  } p-4 rounded-lg mt-6`}>
                    <div className="flex items-center gap-2 text-sm">
                      <ShieldCheck className="w-5 h-5" />
                      <span>Your payment is secured by industry-leading encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className={`${
              isDarkMode ? 'text-gray-300' : 'text-gray-500'
            } text-lg mb-4`}>Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className={`${
                isDarkMode
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white px-8 py-3 rounded-lg transition-colors`}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
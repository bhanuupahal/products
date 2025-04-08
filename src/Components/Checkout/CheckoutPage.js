import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Globe, ShieldCheck, Lock } from 'lucide-react';

const CheckoutPage = ({ cartItems = [], calculateTotal }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to cart if no items
    if (!cartItems || cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const [billingInfo, setBillingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: ''
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with Cashfree payment gateway here
    console.log('Processing payment:', billingInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold  text-gray-900  p-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Secure Checkout
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You're just a few steps away from accessing your courses
          </p>
        </div>

        {cartItems && cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Billing Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                Billing Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={billingInfo.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
               
                {/* <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition duration-200 group">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <Smartphone className="w-5 h-5 ml-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="ml-3 group-hover:text-blue-600">UPI Payment</span>
                    </label>

                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition duration-200 group">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <CreditCard className="w-5 h-5 ml-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="ml-3 group-hover:text-blue-600">Credit/Debit Card</span>
                    </label>

                    <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50 transition duration-200 group">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="netbanking"
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600"
                      />
                      <Globe className="w-5 h-5 ml-3 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      <span className="ml-3 group-hover:text-blue-600">Net Banking</span>
                    </label>
                  </div>
                </div> */}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Place Secure Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {item.duration}
                          </span>
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            {item.instructor}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-medium text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-6 mt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(calculateTotal())}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Platform Fee</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium">Total Amount</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(calculateTotal())}
                      </span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mt-6">
                    <div className="flex items-center gap-2 text-sm text-blue-800">
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
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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


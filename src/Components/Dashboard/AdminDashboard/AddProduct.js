import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Link as LinkIcon, X, Image as ImageIcon, FileText, DollarSign, Sparkles, Package, Eye } from 'lucide-react';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    thumbnailImage: null,
    productInfo: '',
    price: '',
    tutorialLink: '',
    productFile: null
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showPreview, setShowPreview] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        thumbnailImage: file
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        productFile: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const removeImage = () => {
    setImagePreview(null);
    setFormData(prev => ({
      ...prev,
      thumbnailImage: null
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header Section with Creative Design */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-3xl" />
        <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Package className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Create New Product</h1>
              <p className="text-gray-600 mt-2">Craft an amazing product experience for your customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-bl-full" />
              
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Basic Information
              </h2>
              
              {/* Product Name with floating label */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder=" "
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pt-6"
                  required
                />
                <label className="absolute text-sm text-gray-500 top-1 left-4 transition-all duration-200">
                  Product Name
                </label>
              </div>

              {/* Enhanced Thumbnail Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Thumbnail Image
                </label>
                <div className={`group border-2 border-dashed rounded-xl transition-all duration-300 
                  ${imagePreview 
                    ? 'border-blue-200 bg-blue-50/50' 
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/30'}`}
                >
                  <input
                    type="file"
                    id="thumbnailImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="thumbnailImage"
                    className="cursor-pointer block p-6"
                  >
                    {imagePreview ? (
                      <div className="relative group">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="mx-auto max-h-48 object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                          <p className="text-white text-sm">Click to change image</p>
                        </div>
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute -top-2 -right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 shadow-lg"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center py-8">
                        <div className="mb-3 p-3 bg-blue-100 rounded-full">
                          <ImageIcon className="w-8 h-8 text-blue-500" />
                        </div>
                        <span className="text-gray-700 font-medium">Drop your image here, or browse</span>
                        <span className="text-sm text-gray-500 mt-1">Recommended: 600x400px</span>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              {/* Improved Product Info textarea */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Product Information
                </label>
                <textarea
                  name="productInfo"
                  value={formData.productInfo}
                  onChange={handleInputChange}
                  placeholder="Describe your product in detail..."
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>
            </motion.div>

            {/* Pricing & Resources Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-transparent rounded-bl-full" />
              
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                Pricing & Resources
              </h2>

              {/* Enhanced Price Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price (in ₹)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-400">₹</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="1999"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                    min="0"
                    step="1"
                  />
                </div>
              </div>

              {/* Improved Tutorial Link */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tutorial Link</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    name="tutorialLink"
                    value={formData.tutorialLink}
                    onChange={handleInputChange}
                    placeholder="https://example.com/tutorial"
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Enhanced File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product File</label>
                <div className={`group border-2 border-dashed rounded-xl transition-all duration-300
                  ${formData.productFile 
                    ? 'border-green-200 bg-green-50/50' 
                    : 'border-gray-200 hover:border-green-300 hover:bg-green-50/30'}`}
                >
                  <input
                    type="file"
                    id="productFile"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="productFile"
                    className="cursor-pointer block p-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3 p-3 bg-green-100 rounded-full">
                        <FileText className={`w-8 h-8 ${formData.productFile ? 'text-green-500' : 'text-green-400'}`} />
                      </div>
                      {formData.productFile ? (
                        <>
                          <span className="text-gray-700 font-medium">{formData.productFile.name}</span>
                          <span className="text-sm text-gray-500 mt-1">Click to change file</span>
                        </>
                      ) : (
                        <>
                          <span className="text-gray-700 font-medium">Upload your product file</span>
                          <span className="text-sm text-gray-500 mt-1">Supported formats: ZIP, RAR, PDF</span>
                        </>
                      )}
                    </div>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Creative Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl 
                hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-medium text-lg 
                shadow-lg shadow-blue-500/30 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Create Product
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 translate-y-full 
                group-hover:translate-y-0 transition-transform duration-300" />
            </motion.button>
          </form>
        </div>

        {/* Enhanced Preview Section */}
        {showPreview && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-96"
          >
            <div className="sticky top-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-500" />
                Live Preview
              </h2>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  <img
                    src={imagePreview || "https://placehold.co/600x400/e2e8f0/64748b/png?text=Product+Preview"}
                    alt="Product preview"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  {formData.thumbnailImage && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                      <span className="text-xs text-white font-medium">Preview</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {formData.name || "Product Name"}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {formData.productInfo || "Product information will appear here"}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {formData.price ? new Intl.NumberFormat('en-IN', {
                      style: 'currency',
                      currency: 'INR',
                      maximumFractionDigits: 0,
                    }).format(formData.price) : '₹0'}
                  </span>
                </div>

                {formData.tutorialLink && (
                  <div className="border-t pt-4">
                    <a 
                      href={formData.tutorialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 flex items-center group"
                    >
                      <LinkIcon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="group-hover:underline">View Tutorial</span>
                    </a>
                  </div>
                )}

                {formData.productFile && (
                  <div className="mt-4 bg-gray-50 p-3 rounded-lg flex items-center group hover:bg-gray-100 transition-colors duration-200">
                    <FileText className="w-5 h-5 text-gray-500 mr-2 group-hover:text-gray-700" />
                    <span className="text-sm text-gray-600 truncate group-hover:text-gray-800">{formData.productFile.name}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
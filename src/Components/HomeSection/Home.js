import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Play, Users, Clock, Star, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const [popularProducts] = useState([
    {
      id: 1,
      title: "WordPress Theme Development",
      description: "Master WordPress theme development from scratch. Learn PHP, WordPress hooks, custom post types, and theme customization.",
      thumbnail: "https://placehold.co/600x400/21759b/FFFFFF/png?text=WordPress",
      price: 49.99,  // Will be converted to ₹4,149
      originalPrice: 199.99,  // Will be converted to ₹16,599
      rating: 4.8,
      duration: "20h",
      students: 15000,
      // badge: "Bestseller",
      techStack: [
        { name: "WordPress", icon: "https://placehold.co/30x30/21759b/FFFFFF/png?text=WP" },
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "MySQL", icon: "https://placehold.co/30x30/4479A1/FFFFFF/png?text=SQL" }
      ]
    },
    {
      id: 2,
      title: "PHP & MySQL Development",
      description: "Complete PHP programming course with MySQL database integration. Build dynamic web applications from ground up.",
      thumbnail: "https://placehold.co/600x400/777BB3/FFFFFF/png?text=PHP+Course",
      price: 59.99,
      originalPrice: 149.99,
      rating: 4.7,
      duration: "25h",
      students: 12000,
      // badge: "New",
      techStack: [
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "MySQL", icon: "https://placehold.co/30x30/4479A1/FFFFFF/png?text=SQL" },
        { name: "Laravel", icon: "https://placehold.co/30x30/FF2D20/FFFFFF/png?text=LV" }
      ]
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Learn to build cross-platform mobile apps using React Native and Flutter. Deploy to iOS and Android.",
      thumbnail: "https://placehold.co/600x400/61DAFB/000000/png?text=Mobile+Dev",
      price: 79.99,
      originalPrice: 299.99,
      rating: 4.9,
      duration: "40h",
      students: 8000,
      // badge: "Popular",
      techStack: [
        { name: "React Native", icon: "https://placehold.co/30x30/61DAFB/000000/png?text=RN" },
        { name: "Flutter", icon: "https://placehold.co/30x30/02569B/FFFFFF/png?text=FL" },
        { name: "Firebase", icon: "https://placehold.co/30x30/FFCA28/000000/png?text=FB" }
      ]
    }
  ]);

  const [latestProducts] = useState([
    {
      id: 4,
      title: "HTML5 & CSS3 Mastery",
      description: "Complete guide to modern HTML5, CSS3, and responsive web design. Build beautiful, responsive websites.",
      thumbnail: "https://placehold.co/600x400/E34F26/FFFFFF/png?text=HTML5",
      price: 44.99,
      originalPrice: 129.99,
      rating: 4.6,
      duration: "15h",
      students: 20000,
      // badge: "Hot",
      techStack: [
        { name: "HTML5", icon: "https://placehold.co/30x30/E34F26/FFFFFF/png?text=H5" },
        { name: "CSS3", icon: "https://placehold.co/30x30/1572B6/FFFFFF/png?text=CSS" },
        { name: "Sass", icon: "https://placehold.co/30x30/CC6699/FFFFFF/png?text=SASS" }
      ]
    },
    {
      id: 5,
      title: "JavaScript Advanced Concepts",
      description: "Deep dive into advanced JavaScript concepts, ES6+, async programming, and modern JS frameworks.",
      thumbnail: "https://placehold.co/600x400/F7DF1E/000000/png?text=JavaScript",
      price: 54.99,
      originalPrice: 179.99,
      rating: 4.8,
      duration: "25h",
      students: 11000,
      // badge: "Advanced",
      techStack: [
        { name: "JavaScript", icon: "https://placehold.co/30x30/F7DF1E/000000/png?text=JS" },
        { name: "TypeScript", icon: "https://placehold.co/30x30/3178C6/FFFFFF/png?text=TS" },
        { name: "Node.js", icon: "https://placehold.co/30x30/339933/FFFFFF/png?text=NJ" }
      ]
    },
    {
      id: 6,
      title: "WordPress Plugin Development",
      description: "Learn to create custom WordPress plugins. Master plugin architecture, security, and best practices.",
      thumbnail: "https://placehold.co/600x400/21759b/FFFFFF/png?text=WP+Plugins",
      price: 49.99,
      originalPrice: 159.99,
      rating: 4.7,
      duration: "18h",
      students: 9000,
      // badge: "Featured",
      techStack: [
        { name: "WordPress", icon: "https://placehold.co/30x30/21759b/FFFFFF/png?text=WP" },
        { name: "PHP", icon: "https://placehold.co/30x30/777BB3/FFFFFF/png?text=PHP" },
        { name: "JavaScript", icon: "https://placehold.co/30x30/F7DF1E/000000/png?text=JS" }
      ]
    }
  ]);

  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Expert-Led Courses",
      description: "Learn from industry veterans with years of practical experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lifetime Access",
      description: "Study at your own pace with unlimited access to course content"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn verified certificates upon course completion"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Added pt-20 md:pt-24 to account for fixed navbar height */}
      <div className="pt-20 md:pt-24">
        {/* Enhanced Hero Section */}
        <div className={`
          relative overflow-hidden mb-12 py-24 rounded-3xl
          ${isDarkMode 
            ? 'bg-gray-800 text-white' // Dark bg and white text in dark mode
            : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white'
          }
          transition-colors duration-200
        `}>
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute transform -right-20 -top-20 w-96 h-96 rounded-full
                ${isDarkMode ? 'bg-gray-900' : 'bg-white'}
              `}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute -left-20 -bottom-20 w-96 h-96 rounded-full
                ${isDarkMode ? 'bg-gray-900' : 'bg-white'}
              `}
            />
          </div>

          {/* Animated Gradient Overlay */}
          <div className={`absolute inset-0 
            ${isDarkMode 
              ? 'bg-gradient-to-b from-transparent via-gray-100/20 to-gray-200/30' 
              : 'bg-gradient-to-b from-transparent via-purple-600/20 to-blue-900/30'
            }
          `} />

          <div className="relative z-10 container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="text-left lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`inline-block px-4 py-2 rounded-full backdrop-blur-lg mb-6
                    ${isDarkMode 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-white/10 text-white'
                    }
                  `}
                >
                  <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-yellow-300'}`}>
                    🎉 New:
                  </span>
                  <span className="ml-2">Advanced TypeScript Course Launch</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Master Modern
                  <span className={`block mt-2 bg-clip-text text-transparent
                    ${isDarkMode 
                      ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400' 
                      : 'bg-gradient-to-r from-yellow-300 via-pink-300 to-yellow-300'
                    }
                  `}>
                    Web Development
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`text-xl mb-8 leading-relaxed
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-100'}
                  `}
                >
                  Join our comprehensive learning platform and transform your career. 
                  Get hands-on experience with real-world projects and learn from industry experts.
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/register')}
                    className={`px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300
                      ${isDarkMode 
                        ? 'bg-blue-500 text-white hover:bg-blue-600' 
                        : 'bg-white text-purple-600'
                      }
                    `}
                  >
                    Start Learning Now
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300
                      ${isDarkMode 
                        ? 'border-2 border-gray-300 text-white hover:bg-gray-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                      }
                    `}
                  >
                    Watch Demo
                    <Play className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { icon: <Users className="w-6 h-6" />, number: "50K+", label: "Students" },
                    { icon: <Clock className="w-6 h-6" />, number: "100+", label: "Courses" },
                    { icon: <Star className="w-6 h-6" />, number: "4.8", label: "Rating" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                      className="text-center text-white"
                    >
                      <div className={`mb-2 inline-flex justify-center items-center w-12 h-12 rounded-full
                        ${isDarkMode 
                          ? 'bg-gray-700 text-blue-400' 
                          : 'bg-white/10 text-white'
                        }
                      `}>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className={`text-sm
                        ${isDarkMode ? 'text-gray-300' : 'text-gray-200'}
                      `}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Content - Interactive Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2 relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { name: 'React', icon: '/images/react.png', delay: 0, color: '#61DAFB' },
                      { name: 'Node.js', icon: '/images/nodejs.webp', delay: 0.2, color: '#339933' },
                      { name: 'MongoDB', icon: '/images/mongodb.png', delay: 0.4, color: '#47A248' },
                      { name: 'JavaScript', icon: '/images/javascript.png', delay: 0.6, color: '#F7DF1E' },
                      { name: 'TypeScript', icon: '/images/typescript.webp', delay: 0.8, color: '#3178C6' },
                      { name: 'Python', icon: '/images/python.webp', delay: 1, color: '#3776AB' }
                    ].map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ delay: tech.delay }}
                        className="flex flex-col items-center p-4 bg-white/5 rounded-xl hover:bg-white/20 transition-all duration-300"
                      >
                        <div className="w-16 h-16 mb-4 relative">
                          <img 
                            src={tech.icon} 
                            alt={tech.name} 
                            className="w-full h-full object-contain"
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            animate={{
                              boxShadow: [
                                `0 0 0 0px ${tech.color}20`,
                                `0 0 0 10px ${tech.color}00`
                              ]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                        <span className="font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Feature Carousel */}
                  <div className="mt-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-center p-4"
                      >
                        {features[activeFeature].icon}
                        <h3 className="text-xl font-semibold mt-2">
                          {features[activeFeature].title}
                        </h3>
                        <p className="text-gray-300 mt-1">
                          {features[activeFeature].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                    <div className="flex justify-center gap-2 mt-4">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeFeature ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full backdrop-blur-lg"
                />
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full backdrop-blur-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Popular Products Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Courses</h2>
            <a href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Latest Products Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Latest Courses</h2>
            <a href="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;





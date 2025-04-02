import React, { useState } from "react";
import { motion } from "framer-motion";import {
  Search,  BookOpen,
  Users,  Star,
  Clock,  ChevronRight,
  Layout,  Smartphone,
  PenTool,  Code,
  Globe,  CheckCircle,
} from "lucide-react";
const HTMLPage = () => {  const [searchQuery, setSearchQuery] = useState("");
  const htmlCourses = [
    {      id: 1,
      title: "HTML5 & CSS3 Fundamentals",      category: "Frontend Development",
      level: "Beginner",      duration: "15 Hours",
      students: 25000,      rating: 4.9,
      price: 49.99,      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Emma Thompson",      instructorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      highlights: ["Semantic HTML5", "Modern CSS3", "Responsive Design"]    },
    {      id: 2,
      title: "Responsive Web Design Mastery",      category: "Web Design",
      level: "Intermediate",      duration: "18 Hours",
      students: 12000,      rating: 4.7,
      price: 59.99,      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Michael Chen",      instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      highlights: ["Flexbox", "CSS Grid", "Media Queries"]    },
    {      id: 3,
      title: "Web Accessibility & SEO",      category: "Web Development",
      level: "Advanced",      duration: "12 Hours",
      students: 8000,      rating: 4.8,
      price: 69.99,      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      instructor: "Lisa Anderson",      instructorImage: "https://randomuser.me/api/portraits/women/67.jpg",
      highlights: ["ARIA Labels", "SEO Best Practices", "Screen Readers"]    }
  ];
  const features = [    {
      title: "Modern HTML5 Features",      description: "Learn semantic elements, forms, multimedia, and canvas",
      icon: <Code className="w-6 h-6" />,      color: "from-blue-500 to-blue-600"
    },    {
      title: "Responsive Design",      description: "Create websites that work perfectly on all devices",
      icon: <Smartphone className="w-6 h-6" />,      color: "from-purple-500 to-purple-600"
    },    {
      title: "Web Standards",      description: "Follow best practices and W3C standards",
      icon: <CheckCircle className="w-6 h-6" />,      color: "from-green-500 to-green-600"
    }  ];
  const filteredCourses = htmlCourses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())  );
  return (
    <div className="min-h-screen bg-gray-50">      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">            <motion.h1 
              initial={{ opacity: 0, y: 20 }}              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"            >
              Master HTML5 Development            </motion.h1>
            <motion.p               initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}              transition={{ delay: 0.2 }}
              className="text-xl mb-8"            >
              Build modern, responsive, and accessible websites with HTML5            </motion.p>
                        {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">              <input
                type="text"                placeholder="Search HTML courses..."
                value={searchQuery}                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"              />
              <Search className="absolute right-4 top-4 text-gray-400" />            </div>
          </div>        </div>
      </div>
      {/* Stats Section */}      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[              { number: "50K+", label: "Students", icon: <Users className="w-6 h-6" /> },
              { number: "100+", label: "Video Lessons", icon: <BookOpen className="w-6 h-6" /> },              { number: "4.8", label: "Average Rating", icon: <Star className="w-6 h-6" /> }
            ].map((stat, index) => (              <motion.div
                key={index}                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}                className="text-center p-6 bg-gray-50 rounded-xl"
              >                {stat.icon}
                <h3 className="text-3xl font-bold mt-4">{stat.number}</h3>                <p className="text-gray-600">{stat.label}</p>
              </motion.div>            ))}
          </div>        </div>
      </div>
      {/* Features Grid */}      <div className="py-16">
        <div className="container mx-auto px-4">          <h2 className="text-3xl font-bold text-center mb-12">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">            {features.map((feature, index) => (
              <motion.div                key={index}
                initial={{ opacity: 0, y: 20 }}                whileInView={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-r ${feature.color} p-6 rounded-xl text-white`}              >
                {feature.icon}                <h3 className="text-xl font-semibold my-4">{feature.title}</h3>
                <p>{feature.description}</p>              </motion.div>
            ))}          </div>
        </div>      </div>
      {/* Courses Section */}
      <div className="py-16 bg-white">        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured HTML Courses</h2>          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (              <motion.div
                key={course.id}                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"              >
                <div className="relative">                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">                    {course.level}
                  </div>                </div>
                                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>                  <div className="flex items-center mb-4">
                    <img                       src={course.instructorImage} 
                      alt={course.instructor}                       className="w-10 h-10 rounded-full mr-3"
                    />                    <div>
                      <p className="text-sm font-medium">{course.instructor}</p>                      <p className="text-xs text-gray-500">Course Instructor</p>
                    </div>                  </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                    {course.highlights.map((highlight, index) => (                      <span 
                        key={index}                        className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                      >                        {highlight}
                      </span>                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6">                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-gray-400 mr-1" />                      <span className="text-sm text-gray-600">{course.duration}</span>
                      <Users className="w-4 h-4 text-gray-400 ml-4 mr-1" />                      <span className="text-sm text-gray-600">{course.students}</span>
                    </div>                    <span className="text-lg font-bold text-blue-600">${course.price}</span>
                  </div>                </div>
              </motion.div>            ))}
          </div>        </div>
      </div>
      {/* Why Learn HTML Section */}      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">          <h2 className="text-3xl font-bold text-center mb-12">Why Learn HTML?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">            {[
              {                icon: <Globe className="w-6 h-6" />,
                title: "Universal Language",                description: "HTML is the foundation of all websites"
              },              {
                icon: <Layout className="w-6 h-6" />,                title: "Easy to Learn",
                description: "Simple syntax and structure for beginners"              },
              {                icon: <PenTool className="w-6 h-6" />,
                title: "High Demand",                description: "Essential skill for web developers"
              },              {
                icon: <Code className="w-6 h-6" />,                title: "Future Proof",
                description: "Constantly evolving with modern features"              }
            ].map((item, index) => (              <motion.div
                key={index}                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}                className="text-center p-6"
              >                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>                <p className="text-gray-600">{item.description}</p>
              </motion.div>            ))}
          </div>        </div>
      </div>    </div>
  );};

export default HTMLPage;

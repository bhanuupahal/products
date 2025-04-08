import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Users,
  Star,
  Clock,
  ChevronRight,
  Code,
  Terminal,
  Globe,
  CheckCircle,
  Zap,
  Award,
  TrendingUp,
  Coffee,
  Brain,
  Layout
} from "lucide-react";

const JavaScriptPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const jsCourses = [
    {
      id: 1,
      title: "Modern JavaScript from Scratch",
      category: "Fundamentals",
      level: "Beginner",
      duration: "20 Hours",
      students: 15000,
      rating: 4.8,
      price: 49.99,
      image: "/images/js-fundamentals.jpg",
      instructor: "John Smith",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: ["ES6+ Features", "Async/Await", "DOM Manipulation"],
      tag: "Bestseller"
    },
    {
      id: 2,
      title: "React.js Complete Guide",
      category: "Framework",
      level: "Intermediate",
      duration: "25 Hours",
      students: 12000,
      rating: 4.9,
      price: 59.99,
      image: "/images/react-course.jpg",
      instructor: "Sarah Johnson",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      highlights: ["Hooks", "Context API", "Redux"],
      tag: "Hot"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      category: "Backend",
      level: "Advanced",
      duration: "30 Hours",
      students: 8000,
      rating: 4.7,
      price: 69.99,
      image: "/images/nodejs-course.jpg",
      instructor: "Mike Wilson",
      instructorImage: "https://randomuser.me/api/portraits/men/45.jpg",
      highlights: ["Express.js", "MongoDB", "REST APIs"],
      tag: "New"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on exercises and real projects"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Earn industry-recognized certificates upon completion"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "Build skills that employers are actively seeking"
    }
  ];

  const learningPath = [
    {
      level: "Beginner",
      topics: ["JavaScript Basics", "DOM Manipulation", "ES6+ Features"],
      icon: <Coffee className="w-6 h-6" />,
      color: "from-green-400 to-green-600"
    },
    {
      level: "Intermediate",
      topics: ["Async Programming", "Error Handling", "Modern JS Concepts"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600"
    },
    {
      level: "Advanced",
      topics: ["Design Patterns", "Testing", "Performance Optimization"],
      icon: <Layout className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600"
    }
  ];

  const filteredCourses = jsCourses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (activeTab === "all" || course.category.toLowerCase() === activeTab)
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Master JavaScript Development
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              From basics to advanced concepts - become a JavaScript expert
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-xl mx-auto"
            >
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-3 text-gray-400" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-xl shadow-lg"
              >
                <div className="text-blue-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          {["all", "fundamentals", "framework", "backend"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
            >
              {course.tag && (
                <div className="absolute top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded-full text-sm z-10">
                  {course.tag}
                </div>
              )}
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full mr-3 border-2 border-blue-700"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{course.instructor}</p>
                    <p className="text-xs text-gray-500">Course Instructor</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                  {course.title}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded-full">
                    <Star className="w-5 h-5 text-blue-700 mr-1" />
                    <span className="text-blue-700 font-medium">{course.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <div className="flex items-center bg-gray-50 px-2 py-1 rounded-full">
                    <Users className="w-5 h-5 text-gray-500 mr-1" />
                    <span className="text-gray-700">{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-blue-700">
                      ₹{(course.price * 83).toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-gray-500">
                      {course.duration} of content
                    </span>
                  </div>
                  <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors flex items-center gap-2 group">
                    Enroll Now
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPath.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-r p-6 rounded-xl text-white ${
                  index === 0
                    ? "from-blue-600 to-blue-800"
                    : index === 1
                    ? "from-purple-600 to-purple-800"
                    : "from-indigo-600 to-indigo-800"
                }`}
              >
                <div className="mb-4">{path.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{path.level}</h3>
                <ul className="space-y-2">
                  {path.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8">Join thousands of students already learning JavaScript</p>
          <button className="bg-yellow-600 text-blue-700 px-8 py-3 rounded-full font-semibold  transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPage;




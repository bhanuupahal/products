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
  Package,
  Settings,
  Shield,
  ShoppingCart,
  Globe,
  CheckCircle,
} from "lucide-react";
const PluginsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const pluginCourses = [
    {
      id: 1,
      title: "WordPress Plugin Development Masterclass",
      category: "Development",
      level: "Intermediate",
      duration: "22 Hours",
      students: 12000,
      rating: 4.8,
      price: 59.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      instructor: "Alex Johnson",
      instructorImage: "https://randomuser.me/api/portraits/men/42.jpg",
      highlights: [
        "Plugin Architecture",
        "WordPress APIs",
        "Security Best Practices",
      ],
    },
    {
      id: 2,
      title: "WooCommerce Plugin Development",
      category: "E-commerce",
      level: "Advanced",
      duration: "25 Hours",
      students: 8000,
      rating: 4.7,
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
      instructor: "Sarah Wilson",
      instructorImage: "https://randomuser.me/api/portraits/women/42.jpg",
      highlights: [
        "Custom Extensions",
        "Payment Gateways",
        "Product Management",
      ],
    },
    {
      id: 3,
      title: "SEO Plugin Development",
      category: "Marketing",
      level: "Intermediate",
      duration: "18 Hours",
      students: 15000,
      rating: 4.9,
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      instructor: "Mike Brown",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: ["SEO Optimization", "Analytics Integration", "Performance"],
    },
  ];
  const features = [
    {
      title: "Plugin Architecture",
      description: "Learn to build scalable and maintainable plugin structures",
      icon: <Package className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "WordPress Integration",
      description: "Master WordPress hooks, filters, and APIs",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Security",
      description: "Implement robust security measures in your plugins",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "E-commerce",
      description: "Build WooCommerce extensions and payment gateways",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Configuration",
      description: "Create user-friendly plugin settings and options",
      icon: <Settings className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Distribution",
      description: "Learn to publish and monetize your plugins",
      icon: <Globe className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];
  const benefits = [
    "Real-world Project Experience",
    "WordPress Plugin Standards",
    "Code Review & Best Practices",
    "Plugin Marketplace Knowledge",
    "Security Implementation",
    "Performance Optimization",
  ];
  const filteredCourses = pluginCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}{" "}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          {" "}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {" "}
              Master Plugin Development
            </h1>{" "}
            <p className="text-xl mb-8">
              Learn to create powerful plugins that extend functionality and
              create new possibilities{" "}
            </p>
            <div className="relative max-w-xl mx-auto">
              {" "}
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-3 text-gray-400" />{" "}
            </div>
          </div>{" "}
        </div>
      </div>
      {/* Features Grid */}{" "}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {" "}
          <h2 className="text-3xl font-bold text-center mb-12">
            What You'll Learn{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-xl bg-gradient-to-r ${feature.color} text-white`}
              >
                {" "}
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>{" "}
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>
      {/* Courses Section */}{" "}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {" "}
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Plugin Courses{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                {" "}
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />{" "}
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {course.category}{" "}
                  </div>
                </div>{" "}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>{" "}
                  <div className="flex items-center mb-4">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full mr-3"
                    />{" "}
                    <div>
                      <p className="text-sm font-medium">{course.instructor}</p>{" "}
                      <p className="text-xs text-gray-500">Course Instructor</p>
                    </div>{" "}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {" "}
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-purple-50 text-purple-600 text-xs px-2 py-1 rounded-full"
                      >
                        {highlight}{" "}
                      </span>
                    ))}{" "}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    {" "}
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />{" "}
                      <span className="ml-1 text-sm font-medium">
                        {course.rating}{" "}
                      </span>
                    </div>{" "}
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </div>{" "}
                    <div className="text-lg font-bold text-purple-600">
                      ${course.price}{" "}
                    </div>
                  </div>{" "}
                </div>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>


      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-4xl font-bold mt-2">
              Why Learn Plugin Development?
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <span className="text-gray-800 ml-4 text-lg font-medium group-hover:text-purple-600 transition-colors duration-300">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PluginsPage;

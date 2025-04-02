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
  Database,
  Server,
  Shield,
  Terminal,
  Globe,
  CheckCircle,
} from "lucide-react";
const PHPPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const phpCourses = [
    {
      id: 1,
      title: "PHP & MySQL Complete Course",
      category: "Backend Development",
      level: "Intermediate",
      duration: "25 Hours",
      students: 18000,
      rating: 4.8,
      price: 59.99,
      image:
        "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg",
      instructor: "David Wilson",
      instructorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      highlights: [
        "Database Integration",
        "REST APIs",
        "Security Best Practices",
      ],
    },
    {
      id: 2,
      title: "Laravel Framework Masterclass",
      category: "Framework",
      level: "Advanced",
      duration: "30 Hours",
      students: 12000,
      rating: 4.9,
      price: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      instructor: "Emily Chen",
      instructorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      highlights: ["MVC Architecture", "Eloquent ORM", "Authentication"],
    },
    {
      id: 3,
      title: "PHP for Beginners 2024",
      category: "Basics",
      level: "Beginner",
      duration: "20 Hours",
      students: 25000,
      rating: 4.7,
      price: 49.99,
      image:
        "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_1280.jpg",
      instructor: "Michael Brown",
      instructorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      highlights: ["Syntax Basics", "Functions", "Object-Oriented PHP"],
    },
  ];
  const filteredCourses = phpCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}{" "}
      
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          {" "}
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              {" "}
              Master PHP Development
            </motion.h1>{" "}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              {" "}
              From basics to advanced concepts, become a professional PHP
              developer
            </motion.p>


            {/* Search Bar */}{" "}

            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search PHP courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />{" "}
              <Search className="absolute right-4 top-4 text-gray-400" />
            </div>{" "}
          </div>
        </div>{" "}
      </div>


      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 text-black"
          >
            PHP By The Numbers
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                value: "78.9%",
                label: "Server-side Websites",
                icon: <Server className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                value: "45M+",
                label: "Websites Using PHP",
                icon: <Globe className="w-8 h-8" />,
                color: "from-indigo-500 to-indigo-600"
              },
              {
                value: "8K+",
                label: "PHP Libraries",
                icon: <Code className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                value: "25K+",
                label: "Active Developers",
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-600 to-indigo-600"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-white shadow-xl border border-blue-50 overflow-hidden"
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${stat.color}`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
                      <div className="text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Courses Section */}
      <div className="py-16">
        {" "}
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured PHP Courses
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative">
                  {" "}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {" "}
                    {course.category}
                  </div>{" "}
                </div>
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
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                      >
                        {" "}
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    {" "}
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" /> {course.duration}
                    </div>{" "}
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />{" "}
                      {course.students.toLocaleString()}
                    </div>{" "}
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />{" "}
                      {course.rating}
                    </div>{" "}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      ${course.price}
                    </span>{" "}
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      Enroll Now{" "}
                    </button>
                  </div>{" "}
                </div>
              </motion.div>
            ))}
          </div>{" "}
        </div>
      </div>


      {/* Why Choose PHP Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Why Choose <span className="text-blue-600">PHP?</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Learn",
                description: "Simple syntax and extensive documentation make PHP perfect for beginners",
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Huge Community",
                description: "Access to vast resources, frameworks, and community support",
                icon: <Users className="w-6 h-6" />,
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Market Demand",
                description: "High demand for PHP developers in the job market",
                icon: <Globe className="w-6 h-6" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Versatility",
                description: "Build anything from simple websites to complex web applications",
                icon: <Code className="w-6 h-6" />,
                color: "from-blue-600 to-indigo-600"
              },
              {
                title: "Database Integration",
                description: "Seamless integration with various database systems",
                icon: <Database className="w-6 h-6" />,
                color: "from-indigo-600 to-purple-600"
              },
              {
                title: "Security Features",
                description: "Built-in security features and regular updates",
                icon: <Shield className="w-6 h-6" />,
                color: "from-purple-600 to-blue-600"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-8 rounded-2xl shadow-xl border border-blue-200 overflow-hidden group"
              >
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${feature.color}`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                      <div className="text-blue-600 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className=" font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-4xl font-bold mt-2 ">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Is PHP still relevant in 2024?",
                answer: "Yes, PHP remains highly relevant with modern frameworks like Laravel and Symfony keeping it competitive in web development.",
                icon: "🚀"
              },
              {
                question: "What can I build with PHP?",
                answer: "PHP is versatile - you can build websites, web applications, APIs, CMS systems, e-commerce platforms, and more.",
                icon: "🛠️"
              },
              {
                question: "Do I need to know MySQL?",
                answer: "While not mandatory to start, learning MySQL alongside PHP is highly recommended as they're commonly used together.",
                icon: "💾"
              },
              {
                question: "What are the job prospects?",
                answer: "PHP developers are in high demand, with opportunities in web development, backend development, and full-stack roles.",
                icon: "💼"
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50"
              >
                <button
                  className="w-full px-8 py-6 text-left font-semibold flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 transform rotate-90 text-blue-600 group-hover:rotate-[270deg] transition-transform duration-300" />
                </button>
                <div className="px-8 pb-6 text-gray-600">
                  <div className="h-px bg-gray-100 mb-4"></div>
                  <p className="leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600">
              Still have questions?{" "}
              <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Contact our support team
              </a>
            </p>
          </motion.div>
        </div>
      </div>


      {/* CTA Section */}{" "}

      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          {" "}
          <h2 className="text-3xl font-bold mb-4 ">
            Ready to Start Your PHP Journey?
          </h2>
          <p className="mb-8">
            Join thousands of students already learning PHP with us
          </p>{" "}
          <button className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
            Get Started Now{" "}
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default PHPPage;

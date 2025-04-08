import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { 
  Package, 
  List, 
  History, 
  CreditCard, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  LayoutDashboard,
  Users,
  Bell,
  Search,
  Menu
} from 'lucide-react';

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/admin/dashboard'
    },
    {
      title: 'Add Product',
      icon: <Package size={20} />,
      path: '/admin/add-product'
    },
    {
      title: 'Product List',
      icon: <List size={20} />,
      path: '/admin/products'
    },
    {
      title: 'Transaction History',
      icon: <History size={20} />,
      path: '/admin/transactions'
    },
    {
      title: 'Payment Settings',
      icon: <CreditCard size={20} />,
      path: '/admin/payment-settings'
    },
    {
      title: 'User Management',
      icon: <Users size={20} />,
      path: '/admin/user-management'
    }
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex"> {/* Removed pt-16 since we no longer have the main navbar */}
        {/* Sidebar - Fixed position */}
        <div 
          className={`fixed top-0 left-0 h-screen bg-gray-900 text-white overflow-y-auto
            ${isCollapsed ? 'w-16' : 'w-64'} 
            ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            transition-all duration-300 z-40`}
        >
          {/* Sidebar Header - Sticky */}
          <div className="sticky top-0 bg-gray-900 z-20">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 hidden md:block"
              >
                {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="mt-6">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200
                  ${location.pathname === item.path ? 'bg-gray-800 text-white' : ''}`}
              >
                <span className="inline-flex items-center justify-center">
                  {item.icon}
                </span>
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}

            {/* Logout Button */}
            <button
              className="flex items-center w-full px-4 py-3 mt-4 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
              onClick={handleLogout}
            >
              <span className="inline-flex items-center justify-center">
                <LogOut size={20} />
              </span>
              {!isCollapsed && <span className="ml-3">Logout</span>}
            </button>
          </nav>
        </div>
        
        {/* Main Content */}
        <div className={`flex-1 ${isCollapsed ? 'md:ml-16' : 'md:ml-64'} transition-all duration-300`}>
          {/* Dashboard Header */}
          <header className="bg-white shadow-sm sticky top-0 z-30">
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
                >
                  <Menu size={20} />
                </button>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search in dashboard..."
                    className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>
              </div>

              {/* Notifications */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className="p-2 rounded-lg hover:bg-gray-100 relative"
                  >
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>

                  {isNotificationsOpen && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 z-30">
                      <h3 className="px-4 py-2 text-sm font-semibold border-b">Notifications</h3>
                      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                        <div className="text-sm font-medium">New Order</div>
                        <div className="text-sm text-gray-600">Someone purchased your course</div>
                        <div className="text-xs text-gray-400 mt-1">5 minutes ago</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="p-6 bg-gray-100">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;

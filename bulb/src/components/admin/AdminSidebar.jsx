import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/admin/products', label: 'Products', icon: '💡' },
    { path: '/admin/subscribers', label: 'Subscribers', icon: '📧' },
    { path: '/admin/pages', label: 'Page Content', icon: '📄' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-yellow-400">Bulb Admin</h2>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-yellow-500 text-black font-semibold'
                : 'hover:bg-gray-800'
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="mt-8 w-full px-4 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default AdminSidebar;

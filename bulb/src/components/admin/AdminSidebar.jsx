import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Package, 
  Users, 
  FileText, 
  LogOut, 
  Zap,
  ChevronRight,
  Settings
} from 'lucide-react';
import { motion } from 'framer-motion';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', label: 'Overview', icon: BarChart3 },
    { path: '/admin/products', label: 'Products', icon: Package },
    { path: '/admin/subscribers', label: 'Subscribers', icon: Users },
    { path: '/admin/pages', label: 'Page Content', icon: FileText },
  ];

  return (
    <div className="h-full bg-black/60 backdrop-blur-xl border-r border-white/5 flex flex-col p-6 shadow-[10px_0_30px_rgba(0,0,0,0.5)]">
      {/* Brand Header */}
      <div className="mb-12 flex items-center gap-3 px-2">
        <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
          <Zap size={22} className="text-black fill-black" />
        </div>
        <div>
          <h2 className="text-xl font-black text-white tracking-tighter">
            Bright<span className="text-amber-500">Admin</span>
          </h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Control Center</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 space-y-1.5">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] mb-4 px-2 font-bold">Main Menu</p>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="group relative"
            >
              <div
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.15)] underline-none'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'stroke-[2.5px]' : 'stroke-2'} />
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </div>
                <ChevronRight 
                  size={14} 
                  className={`transition-transform duration-300 ${isActive ? 'rotate-90 opacity-100' : 'opacity-0 group-hover:opacity-40 group-hover:translate-x-1'}`} 
                />
              </div>
              {isActive && (
                <motion.div 
                  layoutId="activeIndicator"
                  className="absolute left-0 top-2 bottom-2 w-1.5 bg-black rounded-r-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className="pt-6 border-t border-white/5 space-y-2">
         <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-amber-500 transition-colors text-sm font-bold"
          >
            <Settings size={18} />
            <span>Store Settings</span>
          </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl transition-all duration-300 font-bold text-sm"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

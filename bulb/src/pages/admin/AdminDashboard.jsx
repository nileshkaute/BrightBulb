import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Users, 
  Star, 
  Layers, 
  ArrowUpRight, 
  Zap,
  Clock,
  ExternalLink
} from 'lucide-react';
import { productsAPI, subscribersAPI } from '../../services/api';

const StatCard = ({ title, value, icon: Icon, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative group "
  >
    <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200`}></div>
    <div className="relative bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-white/5 text-white shadow-sm border border-white/5`}>
          <Icon size={24} className="stroke-[1.5px]" />
        </div>
        <div className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-500/10 px-2 py-1 rounded-full uppercase tracking-wider">
          <ArrowUpRight size={10} /> +12%
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{title}</p>
        <h3 className="text-3xl font-black text-white tracking-tighter">{value}</h3>
      </div>
    </div>
  </motion.div>
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    featured: 0,
    subscribers: 0,
    pages: 2
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [prodRes, subRes] = await Promise.all([
          productsAPI.getAll(),
          subscribersAPI.getAll()
        ]);
        
        setStats({
          products: prodRes.data.length,
          featured: prodRes.data.filter(p => p.isFeatured).length,
          subscribers: subRes.data.length,
          pages: 2
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-10 uppercase-none">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 text-amber-500 mb-2">
              <Zap size={16} className="fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Real-time Insights</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-2">
              Dashboard
            </h1>
            <p className="text-gray-500 text-sm font-medium">Welcome back, manager. Here's what's happening today.</p>
          </motion.div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-sm font-bold transition">
              <Clock size={16} /> 24 Hours
            </button>
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 border border-amber-600 rounded-xl text-black text-sm font-black transition">
              View Store <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Products" 
            value={loading ? "..." : stats.products} 
            icon={ShoppingBag} 
            color="from-amber-500 to-orange-600"
            delay={0.1}
          />
          <StatCard 
            title="Featured Items" 
            value={loading ? "..." : stats.featured} 
            icon={Star} 
            color="from-blue-500 to-indigo-600"
            delay={0.2}
          />
          <StatCard 
            title="Newsletter Roots" 
            value={loading ? "..." : stats.subscribers} 
            icon={Users} 
            color="from-emerald-500 to-teal-600"
            delay={0.3}
          />
          <StatCard 
            title="Active Pages" 
            value={stats.pages} 
            icon={Layers} 
            color="from-fuchsia-500 to-purple-600"
            delay={0.4}
          />
        </div>

        {/* Recent Activity / Welcome */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 relative group"
          >
             <div className="absolute -inset-0.5 bg-amber-500/10 rounded-3xl blur-xl" />
             <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-white/5 -rotate-12 translate-x-1/4 -translate-y-1/4">
                  <Zap size={200} className="fill-current" />
                </div>
                
                <h2 className="text-3xl font-black text-white mb-6 tracking-tight">System Status: <span className="text-green-500">OPTIMIZED</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                  Your BrightBulb ecosystem is performing brilliantly. 100% of services are operational. All product syncing is active.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <p className="text-gray-600 text-xs font-bold uppercase mb-1">Server Latency</p>
                    <p className="text-white font-black">24ms</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <p className="text-gray-600 text-xs font-bold uppercase mb-1">DB Connection</p>
                    <p className="text-green-400 font-black">Stable</p>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <p className="text-gray-600 text-xs font-bold uppercase mb-1">SSL Status</p>
                    <p className="text-blue-400 font-black">Active</p>
                  </div>
                </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-950 border border-white/5 rounded-3xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Upcoming Tasks</h3>
            <ul className="space-y-4">
              {[
                { label: "Update inventory", type: "Inventory" },
                { label: "Check subscribers list", type: "Marketing" },
                { label: "Edit Home page banner", type: "Content" }
              ].map((task, i) => (
                <li key={i} className="flex gap-4 items-start p-3 hover:bg-white/5 rounded-xl transition cursor-pointer">
                  <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div>
                    <p className="text-sm font-bold text-gray-300">{task.label}</p>
                    <p className="text-[10px] text-gray-600 uppercase font-black">{task.type}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

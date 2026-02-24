import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { subscribersAPI } from '../../services/api';
import { motion } from 'framer-motion';
import { 
  Users, 
  Mail, 
  Trash2, 
  Search, 
  Download, 
  CheckCircle,
  Zap,
  Clock
} from 'lucide-react';

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await subscribersAPI.getAll();
      setSubscribers(response.data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSubscribers = subscribers.filter(s => 
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-8 uppercase-none">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-2">
              <Zap size={16} className="fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Audience Metrics</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-2">
              Subscribers
            </h1>
            <p className="text-gray-500 text-sm font-medium">Monitoring the growth of your bright community.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-black text-sm transition-all duration-300"
          >
            <Download size={18} /> Export CSV
          </motion.button>
        </div>

        {/* Stats Mini Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-950 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Users size={20} />
             </div>
             <div>
                <p className="text-[10px] text-gray-600 uppercase font-black">Total Audience</p>
                <p className="text-white font-black">{subscribers.length}</p>
             </div>
          </div>
          <div className="bg-gray-950 border border-white/5 p-4 rounded-2xl flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                <CheckCircle size={20} />
             </div>
             <div>
                <p className="text-[10px] text-gray-600 uppercase font-black">Active Subs</p>
                <p className="text-white font-black">{subscribers.length}</p>
             </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-950 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-white/20 transition-all"
            placeholder="Search by email..."
          />
        </div>

        {/* List Section */}
        <div className="bg-gray-950 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/2">
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Subscriber</th>
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Joined Date</th>
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Status</th>
                  <th className="px-8 py-5 text-right text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/2">
                {loading ? (
                   <tr>
                    <td colSpan="4" className="py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                         <Mail className="animate-pulse text-amber-500" size={32} />
                         <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Collecting emails...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredSubscribers.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-20 text-center text-gray-500">
                      No subscribers found.
                    </td>
                  </tr>
                ) : (
                  filteredSubscribers.map((sub, i) => (
                    <motion.tr 
                      key={sub._id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-amber-500">
                              <Mail size={16} />
                           </div>
                           <span className="text-white font-bold">{sub.email}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                         <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock size={14} />
                            {new Date(sub.createdAt).toLocaleDateString()}
                         </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-500/20">
                           Verified
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                         <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                            <Trash2 size={18} />
                         </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SubscribersList;

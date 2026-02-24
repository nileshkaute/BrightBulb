import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { pagesAPI } from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Save, 
  Layout, 
  Type, 
  Image as ImageIcon,
  Zap,
  CheckCircle,
  Eye,
  Loader2
} from 'lucide-react';

const PageEditor = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    fetchPageContent();
  }, [selectedPage]);

  const fetchPageContent = async () => {
    setLoading(true);
    try {
      const response = await pagesAPI.getPage(selectedPage);
      setContent(response.data.content || {});
    } catch (error) {
      console.error('Error fetching page content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await pagesAPI.updatePage({
        page: selectedPage,
        content: content,
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  const updateContentField = (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  return (
    <AdminLayout>
      <div className="space-y-8 uppercase-none">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-2">
              <Zap size={16} className="fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Content Engine</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-2">
              Page Editor
            </h1>
            <p className="text-gray-500 text-sm font-medium">Customize the layout and copy of your storefront.</p>
          </div>

          <div className="flex gap-3">
             <a 
              href={selectedPage === 'home' ? '/' : `/${selectedPage}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-black text-sm transition-all duration-300"
             >
                <Eye size={18} /> Preview
             </a>
             <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-10 py-3 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.2)] transition duration-300 disabled:opacity-50"
            >
              {saving ? <Loader2 className="animate-spin" size={18} /> : <><Save size={18} /> Save Changes</>}
            </motion.button>
          </div>
        </div>

        {/* Success Alert */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-500 text-black p-4 rounded-xl flex items-center justify-center gap-3 font-black text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              <CheckCircle size={20} /> Changes Published Successfully!
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Nav */}
          <div className="lg:col-span-1 space-y-2">
             <p className="text-[10px] text-gray-600 uppercase tracking-widest font-black ml-2 mb-4">Select Page</p>
             {['home', 'about', 'contact', 'products'].map(page => (
               <button
                key={page}
                onClick={() => setSelectedPage(page)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                  selectedPage === page 
                  ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' 
                  : 'bg-gray-950 border-white/5 text-gray-500 hover:text-white hover:border-white/10'
                }`}
               >
                 <span className="capitalize font-bold text-sm">{page} Page</span>
                 <Layout size={16} className={selectedPage === page ? 'opacity-100' : 'opacity-20'} />
               </button>
             ))}
          </div>

          {/* Editor Area */}
          <div className="lg:col-span-3">
             <div className="bg-gray-950 border border-white/5 rounded-3xl p-8 min-h-[500px] relative">
               {loading ? (
                 <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <Loader2 className="animate-spin text-amber-500" size={40} />
                    <p className="text-gray-600 font-black text-xs uppercase tracking-widest">Injecting Content...</p>
                 </div>
               ) : (
                 <form className="space-y-8">
                    <div className="flex items-center gap-3 mb-4">
                       <FileText className="text-amber-500" size={24} />
                       <h3 className="text-xl font-black text-white capitalize">{selectedPage} Content Schema</h3>
                    </div>

                    <div className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                               <Type size={12} /> Headline Hero
                            </div>
                            <input
                              type="text"
                              value={content.heroHeadline || ''}
                              onChange={(e) => updateContentField('heroHeadline', e.target.value)}
                              className="w-full bg-black border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-amber-500 transition-all"
                              placeholder="Enter main headline..."
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                               <ImageIcon size={12} /> Hero Background URL
                            </div>
                            <input
                              type="text"
                              value={content.heroBgUrl || ''}
                              onChange={(e) => updateContentField('heroBgUrl', e.target.value)}
                              className="w-full bg-black border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-amber-500 transition-all"
                              placeholder="https://..."
                            />
                          </div>
                       </div>

                       <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                             <Type size={12} /> Hero Sub-description
                          </div>
                          <textarea
                            value={content.heroSubText || ''}
                            onChange={(e) => updateContentField('heroSubText', e.target.value)}
                            className="w-full bg-black border border-white/5 rounded-xl px-4 py-4 text-white outline-none focus:border-amber-500 transition-all h-32 resize-none"
                            placeholder="Describe the mood..."
                          />
                       </div>

                       <div className="bg-white/2 p-6 rounded-2xl border border-dashed border-white/10">
                          <p className="text-gray-600 text-[10px] font-black uppercase mb-4 text-center tracking-widest">Global Page Config</p>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                             <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-bold uppercase block">Meta Title</label>
                                <input type="text" className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-400" placeholder="BrightBulb | Premium" />
                             </div>
                             <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 font-bold uppercase block">Theme accent</label>
                                <div className="flex items-center gap-2 px-3 py-2 bg-black/40 border border-white/5 rounded-lg">
                                   <div className="w-3 h-3 rounded-full bg-amber-500" />
                                   <span className="text-xs text-gray-600">#F59E0B</span>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </form>
               )}
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PageEditor;

import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { productsAPI } from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  Filter, 
  Image as ImageIcon,
  CheckCircle,
  X,
  Zap,
  Star,
  Maximize2
} from 'lucide-react';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    imageUrl: '',
    category: '',
    isFeatured: false,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
      };

      if (editingProduct) {
        await productsAPI.update(editingProduct._id, payload);
      } else {
        await productsAPI.create(payload);
      }

      fetchProducts();
      resetForm();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      category: product.category || '',
      isFeatured: product.isFeatured || false,
    });
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await productsAPI.delete(id);
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      category: '',
      isFeatured: false,
    });
    setEditingProduct(null);
    setShowForm(false);
  };

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-8 uppercase-none">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-white/5">
          <div>
            <div className="flex items-center gap-2 text-amber-500 mb-2">
              <Zap size={16} className="fill-amber-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Inventory System</span>
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none mb-2">
              Products
            </h1>
            <p className="text-gray-500 text-sm font-medium">Manage your brilliant collection of light.</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowForm(!showForm)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all duration-300 ${
              showForm 
              ? 'bg-white/5 text-white hover:bg-white/10 border border-white/10' 
              : 'bg-amber-500 text-black shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:bg-amber-400'
            }`}
          >
            {showForm ? <><X size={18} /> Cancel</> : <><Plus size={18} /> Add Product</>}
          </motion.button>
        </div>

        {/* Form Overlay Section */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-950 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative background for form */}
               <div className="absolute top-0 right-0 p-8 text-amber-500/5 -rotate-12 translate-x-1/4 -translate-y-1/4">
                  <Maximize2 size={160} />
                </div>

              <h2 className="text-2xl font-black text-white mb-8">
                {editingProduct ? 'Update Product ✧' : 'New Product ✧'}
              </h2>

              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <label className="block text-gray-400 text-[10px] uppercase font-black tracking-widest mb-2 ml-1">Product Title</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full bg-black border border-white/5 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-500 transition-all duration-300"
                        placeholder="e.g. Modern Glow Flare"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-[10px] uppercase font-black tracking-widest mb-2 ml-1">Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full bg-black border border-white/5 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-500 transition-all duration-300 h-32 resize-none"
                        placeholder="Describe the brilliance..."
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-400 text-[10px] uppercase font-black tracking-widest mb-2 ml-1">Price (₹)</label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full bg-black border border-white/5 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-500 transition-all duration-300"
                        placeholder="0.00"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-[10px] uppercase font-black tracking-widest mb-2 ml-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-black border border-white/5 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-500 transition-all duration-300 appearance-none"
                      >
                        <option value="">Select Category</option>
                        <option value="LED Bulb">LED Bulb</option>
                        <option value="Table Lamp">Table Lamp</option>
                        <option value="Ceiling Light">Ceiling Light</option>
                        <option value="Wall Light">Wall Light</option>
                        <option value="Decorative">Decorative</option>
                        <option value="Smart Bulb">Smart Bulb</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-[10px] uppercase font-black tracking-widest mb-2 ml-1">Image URL</label>
                      <div className="flex gap-2">
                        <input
                          type="url"
                          value={formData.imageUrl}
                          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                          className="flex-1 bg-black border border-white/5 rounded-xl px-4 py-3.5 text-white outline-none focus:border-amber-500 transition-all duration-300"
                          placeholder="https://..."
                          required
                        />
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                          {formData.imageUrl ? <img src={formData.imageUrl} className="w-full h-full object-cover" alt="Preview" /> : <ImageIcon size={20} className="text-gray-600" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-10 h-6 rounded-full p-1 transition-colors duration-300 ${formData.isFeatured ? 'bg-amber-500' : 'bg-gray-800'}`}>
                      <input
                        type="checkbox"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        className="hidden"
                      />
                      <motion.div 
                        animate={{ x: formData.isFeatured ? 16 : 0 }}
                        className="w-4 h-4 bg-white rounded-full shadow-lg"
                      />
                    </div>
                    <span className="text-gray-300 font-bold text-sm flex items-center gap-2">
                      <Star size={14} className={formData.isFeatured ? 'text-amber-500 fill-amber-500' : 'text-gray-600'} />
                      Highlight as Featured
                    </span>
                  </label>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/5 text-white font-bold rounded-xl transition duration-300"
                    >
                      Dismiss
                    </button>
                    <button
                      type="submit"
                      className="px-10 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.2)] transition duration-300"
                    >
                      {editingProduct ? 'Update Product' : 'Save Brilliance'}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-950 border border-white/5 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-white/20 transition-all"
              placeholder="Search products, categories..."
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-gray-950 border border-white/5 text-gray-400 hover:text-white rounded-2xl transition">
            <Filter size={18} /> Filters
          </button>
        </div>

        {/* Data Table */}
        <div className="bg-gray-950 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/2">
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Visual</th>
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Product Details</th>
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Pricing</th>
                  <th className="px-8 py-5 text-left text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Attributes</th>
                  <th className="px-8 py-5 text-right text-[10px] text-gray-500 uppercase font-black tracking-[0.2em]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/2">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="py-20 text-center">
                      <div className="flex flex-col items-center gap-4">
                         <Zap className="animate-pulse text-amber-500" size={32} />
                         <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Illuminating data...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-20 text-center text-gray-500">
                      No products found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <motion.tr 
                      key={product._id} 
                      layout
                      className="group hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="px-8 py-6">
                        <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                          <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="max-w-xs">
                          <p className="text-white font-black text-sm mb-0.5">{product.title}</p>
                          <p className="text-gray-500 text-xs line-clamp-1">{product.description}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-amber-500 font-black text-lg">₹{product.price?.toLocaleString()}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded w-fit">
                            {product.category || 'Standard'}
                          </span>
                          {product.isFeatured && (
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded w-fit flex items-center gap-1">
                              <Star size={8} className="fill-amber-500" /> Featured
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
                            title="Edit Product"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition duration-300"
                            title="Delete Product"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
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

export default ProductManagement;

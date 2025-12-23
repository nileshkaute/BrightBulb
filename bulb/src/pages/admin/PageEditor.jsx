import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { pagesAPI } from '../../services/api';

const PageEditor = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [formData, setFormData] = useState({
    page: 'home',
    heroTitle: '',
    heroSubtitle: '',
    videoUrl: '',
    ctaText: '',
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchPageContent();
  }, [selectedPage]);

  const fetchPageContent = async () => {
    try {
      const response = await pagesAPI.getPage(selectedPage);
      if (response.data && response.data.page) {
        setFormData(response.data);
      }
    } catch (error) {
      console.error('Error fetching page content:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await pagesAPI.updatePage({ ...formData, page: selectedPage });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Error updating page:', error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Page Content Editor</h1>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Select Page</label>
          <select
            value={selectedPage}
            onChange={(e) => setSelectedPage(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="home">Home Page</option>
            <option value="product">Product Page</option>
          </select>
        </div>

        {saved && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            ✓ Page content saved successfully!
          </div>
        )}

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Hero Title</label>
                <input
                  type="text"
                  value={formData.heroTitle}
                  onChange={(e) => setFormData({ ...formData, heroTitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter hero section title"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Hero Subtitle</label>
                <textarea
                  value={formData.heroSubtitle}
                  onChange={(e) => setFormData({ ...formData, heroSubtitle: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="3"
                  placeholder="Enter hero section subtitle"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Video URL</label>
                <input
                  type="url"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter showcase video URL"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">CTA Text</label>
                <input
                  type="text"
                  value={formData.ctaText}
                  onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  placeholder="Enter call-to-action text"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PageEditor;

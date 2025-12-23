import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <h3 className="text-3xl font-bold text-gray-800">-</h3>
              </div>
              <div className="text-4xl">💡</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Featured</p>
                <h3 className="text-3xl font-bold text-gray-800">-</h3>
              </div>
              <div className="text-4xl">⭐</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Subscribers</p>
                <h3 className="text-3xl font-bold text-gray-800">-</h3>
              </div>
              <div className="text-4xl">📧</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pages</p>
                <h3 className="text-3xl font-bold text-gray-800">2</h3>
              </div>
              <div className="text-4xl">📄</div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Welcome to Bulb Admin Panel</h2>
          <p className="text-gray-600">
            Use the sidebar to manage your products, view subscribers, and edit page content.
          </p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

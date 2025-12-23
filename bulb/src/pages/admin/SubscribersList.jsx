import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { subscribersAPI } from '../../services/api';

const SubscribersList = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Newsletter Subscribers</h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {loading ? (
            <div className="p-6 text-center">Loading...</div>
          ) : subscribers.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No subscribers yet</div>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">#</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">Email</th>
                  <th className="px-6 py-3 text-left text-gray-700 font-semibold">Subscribed On</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub, index) => (
                  <tr key={sub._id} className="border-t">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{sub.email}</td>
                    <td className="px-6 py-4">
                      {new Date(sub.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="mt-4 text-gray-600">
          Total Subscribers: <span className="font-bold">{subscribers.length}</span>
        </div>
      </div>
    </AdminLayout>
  );
};

export default SubscribersList;

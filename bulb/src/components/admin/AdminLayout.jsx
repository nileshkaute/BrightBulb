import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black text-gray-300 font-sans">
      {/* Sidebar - fixed width */}
      <div className="w-72 fixed h-full z-20">
        <AdminSidebar />
      </div>

      {/* Main Content - scrollable */}
      <main className="ml-72 flex-1 min-h-screen p-8 lg:p-12 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-black to-black overflow-x-hidden">
        {/* Decorative subtle background glow */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full -z-10" />
        <div className="fixed bottom-0 left-72 w-[300px] h-[300px] bg-amber-600/5 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto relative">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;

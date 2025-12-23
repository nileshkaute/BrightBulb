import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";

// Admin imports
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import SubscribersList from "./pages/admin/SubscribersList";
import PageEditor from "./pages/admin/PageEditor";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/product" element={<><Navbar /><Product /></>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute><ProductManagement /></ProtectedRoute>} />
        <Route path="/admin/subscribers" element={<ProtectedRoute><SubscribersList /></ProtectedRoute>} />
        <Route path="/admin/pages" element={<ProtectedRoute><PageEditor /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
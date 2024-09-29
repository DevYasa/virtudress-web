import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { Users, Package, ChevronDown, ChevronUp, Upload, ToggleLeft, ToggleRight } from 'lucide-react';

const AdminDashboard = () => {
  const [usersWithProducts, setUsersWithProducts] = useState([]);
  const [stats, setStats] = useState(null);
  const [expandedUsers, setExpandedUsers] = useState({});
  const [selectedFiles, setSelectedFiles] = useState({});
  const [uploadingProductId, setUploadingProductId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersResponse, statsResponse] = await Promise.all([
        api.get('/admin/users-with-products'),
        api.get('/admin/stats')
      ]);
      console.log('Users with products:', usersResponse.data);
      console.log('Stats:', statsResponse.data);
      setUsersWithProducts(usersResponse.data);
      setStats(statsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleUserExpansion = (userId) => {
    setExpandedUsers(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleFileSelect = (productId, event) => {
    setSelectedFiles(prev => ({
      ...prev,
      [productId]: event.target.files[0]
    }));
  };

  const handleUpload = async (productId) => {
    const selectedFile = selectedFiles[productId];
    if (!selectedFile) {
      alert('Please select a file first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('model', selectedFile);
  
    setUploadingProductId(productId);
  
    try {
      console.log('Uploading 3D model for product:', productId);
      const response = await api.put(`/admin/product/${productId}/model`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Upload successful:', response.data);
      alert('3D model uploaded successfully!');
      fetchData(); // Refresh the data
    } catch (error) {
      console.error('Error uploading 3D model:', error);
      alert('Error uploading 3D model. Please try again.');
    } finally {
      setUploadingProductId(null);
      setSelectedFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[productId];
        return newFiles;
      });
    }
  };

  const toggleDashboardAccess = async (userId) => {
    try {
      const response = await api.put(`/admin/toggle-dashboard-access/${userId}`);
      console.log('Dashboard access toggled:', response.data);
      fetchData(); // Refresh the data
    } catch (error) {
      console.error('Error toggling dashboard access:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#13072e] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        {/* Admin Stats section */}
        {stats && (
          <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overall Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Total Users</h3>
                <p className="text-3xl font-bold">{stats.totalUsers}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Total Products</h3>
                <p className="text-3xl font-bold">{stats.totalProducts}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Total Try-ons</h3>
                <p className="text-3xl font-bold">{stats.totalTryOns}</p>
              </div>
            </div>
          </div>
        )}

        {/* Users and Their Products */}
        <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Users className="mr-2" /> Users and Their Products
          </h2>
          {usersWithProducts.length === 0 ? (
            <p>No users or products found.</p>
          ) : (
            usersWithProducts.map(user => (
              <div key={user._id} className="mb-6 bg-[#3d2373] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-300">{user.email}</p>
                  </div>
                  <button
                    onClick={() => toggleDashboardAccess(user._id)}
                    className="flex items-center bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
                  >
                    {user.dashboardAccess ? <ToggleRight className="mr-2" /> : <ToggleLeft className="mr-2" />}
                    {user.dashboardAccess ? 'Disable Access' : 'Enable Access'}
                  </button>
                </div>
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleUserExpansion(user._id)}
                >
                  <p className="text-sm text-gray-300">Products: {user.products.length}</p>
                  {expandedUsers[user._id] ? <ChevronUp /> : <ChevronDown />}
                </div>
                
                {expandedUsers[user._id] && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <Package className="mr-2" /> Products
                    </h4>
                    {user.products.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-[#2a1960] rounded-lg">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left">Product ID</th>
                              <th className="px-4 py-2 text-left">Name</th>
                              <th className="px-4 py-2 text-left">Color</th>
                              <th className="px-4 py-2 text-left">Try-ons</th>
                              <th className="px-4 py-2 text-left">Conversions</th>
                              <th className="px-4 py-2 text-left">3D Model</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.products.map(product => (
                              <tr key={product._id} className="border-t border-[#3d2373]">
                                <td className="px-4 py-2">{product.productId}</td>
                                <td className="px-4 py-2">{product.name}</td>
                                <td className="px-4 py-2">{product.color}</td>
                                <td className="px-4 py-2">{product.tryOns || 0}</td>
                                <td className="px-4 py-2">{product.conversions || 0}</td>
                                <td className="px-4 py-2">
                                  {product.modelUrl ? (
                                    <span>{product.modelUrl}</span>
                                  ) : (
                                    <div>
                                      <input 
                                        type="file" 
                                        onChange={(e) => handleFileSelect(product.productId, e)}
                                        accept=".glb,.gltf"
                                        className="mb-2"
                                      />
                                      <button 
                                        onClick={() => handleUpload(product.productId)}
                                        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300 flex items-center"
                                        disabled={uploadingProductId === product.productId}
                                      >
                                        {uploadingProductId === product.productId ? (
                                          'Uploading...'
                                        ) : (
                                          <>
                                            <Upload className="mr-2" size={16} />
                                            Upload 3D Model
                                          </>
                                        )}
                                      </button>
                                    </div>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-gray-300">No products for this user.</p>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
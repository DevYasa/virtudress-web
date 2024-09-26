import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';
import { Upload, Camera, BarChart2 } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    description: '',
    color: '',
    fabricType: '',
    images: []
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsResponse, productsResponse] = await Promise.all([
        api.get('/user/stats'),
        api.get('/user/products')
      ]);
      setStats(statsResponse.data);
      setProducts(productsResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setCurrentProduct({ ...currentProduct, images: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(currentProduct).forEach(key => {
        if (key === 'images') {
          currentProduct.images.forEach(image => {
            formData.append('images', image);
          });
        } else {
          formData.append(key, currentProduct[key]);
        }
      });

      await api.post('/user/product', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setCurrentProduct({ name: '', description: '', color: '', fabricType: '', images: [] });
      fetchData(); // Refresh products and stats
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#13072e] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Welcome, {user.name}!</h1>
        
        {/* Existing account info section */}
        <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Member since:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Existing subscription section */}
        <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Subscription</h2>
          <p><strong>Plan:</strong> {user.subscriptionPlan || 'No active plan'}</p>
          {user.subscriptionStartDate && (
            <p><strong>Start Date:</strong> {new Date(user.subscriptionStartDate).toLocaleDateString()}</p>
          )}
          {user.subscriptionEndDate && (
            <p><strong>End Date:</strong> {new Date(user.subscriptionEndDate).toLocaleDateString()}</p>
          )}
          <p><strong>Status:</strong> {user.subscriptionStatus}</p>
        </div>

        {/* Product upload section */}
        <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upload New Product</h2>
          <div className="mb-6 bg-[#3d2373] border-[#3d2373] p-4 rounded-lg">
            <Camera className="h-4 w-4 mb-2" />
            <h3 className="text-lg font-semibold">Upload Product Details</h3>
            <p>
              Please provide detailed information and high-quality images for each product to ensure accurate 3D model creation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={currentProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              required
              className="w-full p-2 bg-[#3d2373] border-[#3d2373] text-white rounded"
            />
            <textarea
              name="description"
              value={currentProduct.description}
              onChange={handleInputChange}
              placeholder="Product Description"
              required
              className="w-full p-2 bg-[#3d2373] border-[#3d2373] text-white rounded"
            />
            <input
              type="text"
              name="color"
              value={currentProduct.color}
              onChange={handleInputChange}
              placeholder="Color"
              required
              className="w-full p-2 bg-[#3d2373] border-[#3d2373] text-white rounded"
            />
            <input
              type="text"
              name="fabricType"
              value={currentProduct.fabricType}
              onChange={handleInputChange}
              placeholder="Fabric Type"
              required
              className="w-full p-2 bg-[#3d2373] border-[#3d2373] text-white rounded"
            />
            <div>
              <label htmlFor="images" className="block text-sm font-medium text-gray-300 mb-2">
                Upload Images (multiple angles)
              </label>
              <input
                id="images"
                type="file"
                multiple
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-300
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#3d2373] file:text-white
                  hover:file:bg-[#4d2e8e]"
              />
            </div>
            <button type="submit" className="w-full bg-[#3d2373] hover:bg-[#4d2e8e] p-2 rounded flex items-center justify-center">
              <Upload className="mr-2 h-4 w-4" /> Add Product
            </button>
          </form>
        </div>

        {/* Overall Stats section */}
        {stats && (
          <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overall Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Total Products</h3>
                <p className="text-3xl font-bold">{stats.totalProducts}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Total Try-ons</h3>
                <p className="text-3xl font-bold">{stats.totalTryOns}</p>
              </div>
              <div className="bg-[#3d2373] p-4 rounded-lg">
                <h3 className="text-xl mb-2">Overall Conversion Rate</h3>
                <p className="text-3xl font-bold">{stats.overallConversionRate}%</p>
              </div>
            </div>
          </div>
        )}

        {/* Uploaded products list with individual stats */}
        {products.length > 0 && (
          <div className="bg-[#1f0f47] rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Uploaded Products</h2>
            {products.map((product, index) => (
              <div key={product._id || index} className="bg-[#3d2373] p-4 rounded-lg mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xl">{product.name}</h3>
                    <p className="text-sm text-gray-300">Product ID: {product.productId}</p>
                    <p className="mt-2">{product.description}</p>
                    <p className="mt-1">Color: {product.color}, Fabric: {product.fabricType}</p>
                    <p className="mt-1">{product.images.length} image(s) uploaded</p>
                    <p className="mt-1">3D Model: {product.modelUrl ? 'Available' : 'Not available'}</p>
                    <p className="mt-1">Product Link: {product.productLink ? product.productLink : 'Not available'}</p>
                  </div>
                  <div className="bg-[#2a1960] p-3 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center">
                      <BarChart2 className="h-4 w-4 mr-1" /> Product Stats
                    </h4>
                    <p>Try-ons: {product.tryOns || 0}</p>
                    <p>Conversions: {product.conversions || 0}</p>
                    <p>Conversion Rate: {product.conversionRate || 0}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
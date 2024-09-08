import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';

const PurchasePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    numProducts: '',
    productCategories: '',
    specialRequirements: ''
  });

  const plan = location.state?.plan;

  if (!plan) {
    navigate('/pricing');
    return null;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Here you would integrate with your payment processor (e.g., Stripe)
      // For this example, we'll simulate a successful payment
      const paymentResponse = await simulatePayment(plan.price);

      if (paymentResponse.success) {
        // Payment successful, now save the purchase and additional data
        const purchaseData = {
          userId: user.id,
          planId: plan.id,
          ...formData
        };

        await api.post('/purchases', purchaseData);
        
        // Redirect to a success page or dashboard
        navigate('/dashboard', { state: { purchaseSuccess: true } });
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during the purchase process.');
    } finally {
      setLoading(false);
    }
  };

  // Simulated payment function (replace with actual payment processor integration)
  const simulatePayment = (amount) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true });
      }, 2000);
    });
  };

  return (
    <div className="bg-[#13072e] min-h-screen text-white pt-32">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Complete Your Purchase</h1>
        <div className="bg-[#2a1659] rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">{plan.title} Plan</h2>
          <p className="text-2xl font-bold">${plan.price}/month</p>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="companyName" className="block mb-1">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#13072e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="numProducts" className="block mb-1">Number of Products</label>
            <input
              type="number"
              id="numProducts"
              name="numProducts"
              value={formData.numProducts}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#13072e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="productCategories" className="block mb-1">Product Categories</label>
            <input
              type="text"
              id="productCategories"
              name="productCategories"
              value={formData.productCategories}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-[#13072e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div>
            <label htmlFor="specialRequirements" className="block mb-1">Special Requirements</label>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 bg-[#13072e] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Complete Purchase'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;
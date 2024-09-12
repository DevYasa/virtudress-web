import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log('Location state:', location.state);
    console.log('Current user:', user);
    console.log('Current plan:', plan);

    if (!plan || !user) {
      console.log('Redirecting to pricing page due to missing plan or user');
      navigate('/pricing');
    }
  }, [plan, user, navigate, location.state]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    console.log('Submitting form with user:', user);
    console.log('Submitting form with plan:', plan);

    if (!user || !user._id || !plan || !plan.title) {
      console.log('Missing user or plan information');
      console.log('User:', user);
      console.log('Plan:', plan);
      setError('User or plan information is missing. Please try again.');
      setLoading(false);
      return;
    }

    console.log('Submitting order with:', { 
      userId: user._id, 
      planId: plan.title, 
      amount: plan.price, 
      ...formData 
    });

    try {
      const { data } = await api.post('/create-order', {
        userId: user._id,
        planId: plan.title,
        amount: plan.price,
        ...formData
      });

      console.log('Order created:', data);

      // Redirect to PayHere
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://sandbox.payhere.lk/pay/checkout'; // Use the live URL in production

      const appendInput = (name, value) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      appendInput('merchant_id', process.env.REACT_APP_PAYHERE_MERCHANT_ID);
      appendInput('return_url', `${window.location.origin}/payment-success`);
      appendInput('cancel_url', `${window.location.origin}/payment-cancelled`);
      appendInput('notify_url', `${process.env.REACT_APP_API_URL}/api/payhere-notify`);
      appendInput('order_id', data.orderId);
      appendInput('items', `${plan.title} Plan`);
      appendInput('currency', 'LKR');
      appendInput('amount', plan.price);
      appendInput('first_name', user.name.split(' ')[0]);
      appendInput('last_name', user.name.split(' ').slice(1).join(' '));
      appendInput('email', user.email);
      appendInput('phone', '0771234567'); // You might want to collect this from the user
      appendInput('address', 'No.1, Galle Road');
      appendInput('city', 'Colombo');
      appendInput('country', 'Sri Lanka');

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error('Error creating order:', err);
      setError(err.response?.data?.error || 'An error occurred during the purchase process.');
      setLoading(false);
    }
  };

  if (!plan || !user) {
    console.log('Rendering null due to missing plan or user');
    return null;
  }

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
          {/* Form fields remain the same */}
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
            {loading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PurchasePage;
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import api from '../utils/api';

const ConfirmationPage = () => {
  const [isValidPayment, setIsValidPayment] = useState(false);
  const [subscriptionDetails, setSubscriptionDetails] = useState(null);
  const location = useLocation();
  const { setUser } = useAuth();

  const fetchUpdatedUserData = useCallback(async () => {
    try {
      const { data } = await api.get('/auth/me');
      setUser(data); // Update the user context
      setSubscriptionDetails({
        plan: data.subscriptionPlan,
        startDate: new Date(data.subscriptionStartDate).toLocaleDateString(),
        endDate: new Date(data.subscriptionEndDate).toLocaleDateString(),
        status: data.subscriptionStatus
      });
    } catch (error) {
      console.error('Error fetching updated user data:', error);
    }
  }, [setUser]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('custom_1') === 'payment_success') {
      setIsValidPayment(true);
      fetchUpdatedUserData();
    }
  }, [location, fetchUpdatedUserData]);

  if (!isValidPayment) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="bg-[#13072e] min-h-screen text-white pt-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Thank You for Your Purchase!</h1>
        <p className="mb-4">Your subscription has been successfully activated.</p>
        
        {subscriptionDetails && (
          <div className="bg-[#2a1659] rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Your Subscription Details</h2>
            <p><strong>Plan:</strong> {subscriptionDetails.plan}</p>
            <p><strong>Start Date:</strong> {subscriptionDetails.startDate}</p>
            <p><strong>End Date:</strong> {subscriptionDetails.endDate}</p>
            <p><strong>Status:</strong> {subscriptionDetails.status}</p>
          </div>
        )}

        <h2 className="text-2xl font-semibold mb-4">Next Steps:</h2>
        <ol className="list-decimal list-inside text-left mb-6">
          <li>Navigate to the Product Management section</li>
          <li>Start adding your products for virtual try-on</li>
          <li>Implement the try-on button on your website</li>
        </ol>
        <p>If you need any assistance, please don't hesitate to contact our support team.</p>
        <a 
          href="/dashboard" 
          className="inline-block mt-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
};

export default ConfirmationPage;
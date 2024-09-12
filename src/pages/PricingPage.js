import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PricingCard = ({ title, price, monthlyPrice, features, buttonText, isBestDeal, onPurchase }) => (
  <div className={`bg-[#2a1659] rounded-3xl p-20 flex flex-col ${isBestDeal ? 'ring-2 ring-purple-400' : ''} relative`}>
    {isBestDeal && (
      <span className="bg-[#b0a1ff] text-[#13072e] text-sm font-semibold px-4 py-1 rounded-full absolute top-4 right-4">
        #bestdeal
      </span>
    )}
    <h3 className="text-2xl font-bold mb-1">{title}</h3>
    <div className="text-5xl font-bold mb-1">${price}</div>
    <p className="text-sm text-gray-300 mb-6">
      per user/month billed yearly
      <br />
      <span className="text-white font-semibold">${monthlyPrice}</span> billed monthly
    </p>
    <ul className="mb-8 flex-grow space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button 
      onClick={onPurchase}
      className="bg-white text-[#13072e] font-bold py-3 px-6 rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-300"
    >
      {buttonText}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
);

const PricingPage = () => {
  const { user } = useAuth();  // Use the useAuth hook instead of useContext
  const navigate = useNavigate();

  const pricingPlans = [
    {
      title: 'Starter',
      price: '1',
      monthlyPrice: '1',
      features: [
        'Up to 20 products',
        'Basic analytics',
        'Email support',
        '1 admin user',
      ],
      buttonText: 'Get Starter',
    },
    {
      title: 'Pro',
      price: '5',
      monthlyPrice: '5',
      features: [
        'Up to 50 products',
        'Advanced analytics',
        'Priority Email support',
        '3 admin users',
      ],
      buttonText: 'Get Pro',
      isBestDeal: true,
    },
    {
      title: 'Enterprise',
      price: '10',
      monthlyPrice: '10',
      features: [
        'up to 100 products',
        'Advanced analytics',
        '24/7 call & Email support',
        'Unlimited admin users',
      ],
      buttonText: 'Get Enterprise',
    },
  ];

  const handlePurchase = (plan) => {
    console.log('Handling purchase for plan:', plan);
    if (!user) {
      console.log('User not logged in, redirecting to auth page');
      navigate('/auth', { state: { from: '/pricing' } });
    } else {
      console.log('User logged in, navigating to purchase page');
      navigate('/purchase', { state: { plan } });
    }
  };

  return (
    <div className="bg-[#13072e] min-h-screen text-white pt-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              onPurchase={() => handlePurchase(plan)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
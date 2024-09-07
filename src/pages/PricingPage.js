import React from 'react';

const PricingCard = ({ title, price, monthlyPrice, features, buttonText, isBestDeal }) => (
  <div className={`bg-gradient-to-br from-[#13072e] to-[#3f2182] rounded-lg p-24 flex flex-col ${isBestDeal ? 'border-2 border-purple-400' : ''}`}>
    {isBestDeal && (
      <span className="bg-purple-400 text-purple-900 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-end">
        #bestdeal
      </span>
    )}
    <h3 className="text-3xl font-bold mb-2">{title}</h3>
    <div className="text-5xl font-bold mb-2">${price}</div>
    <p className="text-purple-300 mb-6">
      per user/month billed yearly
      <br />
      ${monthlyPrice} billed monthly
    </p>
    <ul className="mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-white text-purple-900 font-bold py-3 px-4 rounded-full flex items-center justify-center">
      {buttonText}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
);

const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Starter',
      price: '100',
      monthlyPrice: '100',
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
      price: '300',
      monthlyPrice: '300',
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
      price: '500',
      monthlyPrice: '500',
      features: [
        'up to 100 products',
        'Advanced analytics',
        '24/7 call & Email support',
        'Unlimited admin users',
      ],
      buttonText: 'Get Enterprise',
    },
  ];

  return (
    <div className="bg-[#13072e] min-h-screen text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
import React, { useState } from 'react';
import './comparison.css';
import Footer from './Footer';
import Navbar from './Navbar';

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div>
      <Navbar />
      <main>
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-semibold" style={{ color: '#00df9a' }}>Pricing Plans</h2>
              <p className="mt-4 text-6xl text-gray-400">
                Choose a plan and join our Vyas AI family!
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-wrap justify-center">
                {pricingPlans.map((plan) => (
                  <div key={plan.title} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                    <div
                      className={`bg-black text-white border border-white rounded-lg shadow-lg p-6 text-center transition duration-300 ease-in-out transform hover:bg-#34373e-100 ${
                        selectedPlan === plan.title ? 'bg-opacity-80' : 'bg-opacity-100'
                      }`}
                      onMouseEnter={() => handlePlanSelect(plan.title)}
                      onMouseLeave={() => setSelectedPlan(null)}
                    >
                      <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                      <p className="text-5xl font-bold mb-4">{plan.price}</p>
                      <p className="text-gray-400 mb-4">{plan.period}</p>
                      <ul className="list-none mb-6">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="mb-4 flex items-center">
                            <span className="mr-3 inline-grid h-[22px] w-[22px] shrink-0 place-content-center rounded-xl bg-[#684AE2] bg-opacity-10 text-[#684AE2]">
                              <svg
                                width="13"
                                height="10"
                                viewBox="0 0 13 10"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M3.952 7.537L11.489 0L12.452 1L3.952 9.5L0 5.545L1 4.545L3.952 7.537Z"></path>
                              </svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="/login"
                        className="bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-gray-200"
                      >
                        Select {plan.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="comparison-table-section">
          <ComparisonTable />
        </section>
      </main>
      <Footer />
    </div>
  );
};

const pricingPlans = [
  {
    title: 'Basic',
    price: '$9.99',
    period: 'per month',
    features: [
      '5000 Word Limit',
      '10 Image Limit',
      'Model 1',
      'Basic Templates',
      '5,000 Word Tokens',
      '10 Image Tokens',
    ],
  },
  {
    title: 'Pro',
    price: '$19.99',
    period: 'per month',
    features: [
      '20000 Word Limit',
      '50 Image Limit',
      'Model 2',
      'Pro Templates',
      '20,000 Word Tokens',
      '35 Image Tokens',
    ],
  },
  {
    title: 'Enterprise',
    price: '$29.99',
    period: 'per month',
    features: [
      'Unlimited Word Limit',
      'Unlimited Image Limit',
      'Model 3',
      'Enterprise Templates',
      'Unlimited Word Tokens',
      'Unlimited Image Tokens',
    ],
  },
];

const ComparisonTable = () => {
  return (
    
    <div className="comparison-table">
      <h1 className="text-4xl font-semibold text-black mb-8">Comparison of Plans</h1>
      <table className="w-full text-left">
        <thead className="bg-gray-700 text-white">
          <tr>
            <th className="py-3 px-4">Feature</th>
            <th className="py-3 px-4">Basic</th>
            <th className="py-3 px-4">Pro</th>
            <th className="py-3 px-4">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className="bg-gray-800 text-gray-300">
              <td className="py-3 px-4">{row.feature}</td>
              <td className="py-3 px-4">{row.basic}</td>
              <td className="py-3 px-4">{row.pro}</td>
              <td className="py-3 px-4">{row.enterprise}</td>
            </tr>
          ))}
         
        </tbody>
      </table>
    </div>
  );
};

const comparisonData = [
  { feature: 'Storage', basic: '50GB', pro: '100GB', enterprise: '200GB' },
  { feature: 'Users', basic: 'Up to 5 users', pro: 'Up to 10 users', enterprise: 'Unlimited users' },
  { feature: 'Support', basic: 'Email support', pro: 'Email and phone support', enterprise: '24/7 support' },
  { feature: 'Price', basic: '$9.99/month', pro: '$19.99/month', enterprise: '$29.99/month' },
  { feature: 'Priority Support', basic: 'No', pro: 'Yes', enterprise: 'Yes' },
  { feature: 'API Access', basic: 'Limited', pro: 'Full', enterprise: 'Full' },
  { feature: 'Custom Models', basic: 'No', pro: 'Yes', enterprise: 'Yes' },
];

export default Pricing;

import { useState } from 'react';

const OurPricingSection = () => {
  const [isMonthly, setIsMonthly] = useState(true); // Toggle between monthly and annually

  // Pricing data for Monthly and Annual plans
  const plans = [
    {
      name: 'Basic Plan',
      priceMonthly: '$19',
      priceAnnually: '$190',
      features: [
        { feature: 'Access to basic features', included: true },
        { feature: 'Email support', included: true },
        { feature: '24/7 Support', included: false },
      ],
    },
    {
      name: 'Standard Plan',
      priceMonthly: '$29',
      priceAnnually: '$290',
      features: [
        { feature: 'Access to all features', included: true },
        { feature: 'Priority email support', included: true },
        { feature: '24/7 Support', included: true },
      ],
    },
    {
      name: 'Premium Plan',
      priceMonthly: '$49',
      priceAnnually: '$490',
      features: [
        { feature: 'Access to premium features', included: true },
        { feature: 'Dedicated support', included: true },
        { feature: '24/7 Support', included: true },
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      {/* Heading and Subheading */}
      <div className="text-center mb-12">
        <h3 className="text-sm text-gray-500">OUR PRICING</h3>
        <h2 className="text-4xl font-bold text-gray-800">Choose The Best Plan That You Want</h2>
        <p className="text-gray-600 mt-4">
          We offer a range of plans to suit your needs. Choose between Monthly or Annually for the best value.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`py-2 px-6 rounded-full ${isMonthly ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-6 rounded-full ${!isMonthly ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
          onClick={() => setIsMonthly(false)}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {/* Basic Plan */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
          <h3 className="text-xl font-bold text-gray-800">{plans[0].name}</h3>
          <p className="text-4xl font-bold mt-4">
            {isMonthly ? plans[0].priceMonthly : plans[0].priceAnnually}
          </p>
          <p className="text-sm text-gray-500 mb-8 border-b border-white">{isMonthly ? '/month' : '/year'}</p>
          <ul className="mb-8">
            {plans[0].features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                {feature.included ? (
                  <span className="text-green-500 mr-2">✓</span>
                ) : (
                  <span className="text-red-500 mr-2">✗</span>
                )}
                <span>{feature.feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full">Start Now</button>
        </div>

        {/* Standard Plan (Slightly Taller) */}
        <div className="bg-[#254D32] p-8 rounded-xl shadow-lg w-full lg:w-1/3 lg:h-auto transform lg:scale-105">
          <h3 className="text-xl font-bold text-white">{plans[1].name}</h3>
          <p className="text-4xl font-bold mt-4 text-white">
            {isMonthly ? plans[1].priceMonthly : plans[1].priceAnnually}
          </p>
          <p className="text-sm text-white mb-8 border-b border-white">{isMonthly ? '/month' : '/year'}</p>
          <ul className="mb-8 text-white">
            {plans[1].features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                {feature.included ? (
                  <span className="text-green-500 mr-2">✓</span>
                ) : (
                  <span className="text-red-500 mr-2">✗</span>
                )}
                <span>{feature.feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-white text-[#254D32] object-center py-2 px-6 rounded-full">Start Now</button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full lg:w-1/3">
          <h3 className="text-xl font-bold text-gray-800">{plans[2].name}</h3>
          <p className="text-4xl font-bold mt-4">
            {isMonthly ? plans[2].priceMonthly : plans[2].priceAnnually}
          </p>
          <p className="text-sm text-gray-500 mb-8 border-b border-white">{isMonthly ? '/month' : '/year'}</p>
          <ul className="mb-8">
            {plans[2].features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                {feature.included ? (
                  <span className="text-green-500 mr-2">✓</span>
                ) : (
                  <span className="text-red-500 mr-2">✗</span>
                )}
                <span>{feature.feature}</span>
              </li>
            ))}
          </ul>
          <button className="bg-green-500 text-white py-2 px-6 rounded-full">Start Now</button>
        </div>
      </div>
    </section>
  );
};

export default OurPricingSection;

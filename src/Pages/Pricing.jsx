import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

// Checkmark icon component for the feature lists
const CheckIcon = () => (
  <FiCheckCircle className="w-6 h-6 text-indigo-500 flex-shrink-0" />
);

const Pricing = () => {
  // State to manage the billing cycle toggle ('monthly' or 'annually')
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* 1. Hero and Toggle Section */}
      <section className="bg-white text-center border-b border-slate-200">
        <div className="container mx-auto px-6 py-16 sm:py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
            Flexible Plans for Every Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the Go-X plan that best fits your collaboration needs and budget.
          </p>

          {/* Billing Toggle Switch */}
          <div className="mt-10 flex justify-center items-center space-x-4">
            <span
              className={`font-semibold transition-colors ${
                billingCycle === 'monthly'
                  ? 'text-indigo-600'
                  : 'text-slate-500'
              }`}
            >
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={billingCycle === 'annually'}
                onChange={() =>
                  setBillingCycle(
                    billingCycle === 'monthly' ? 'annually' : 'monthly'
                  )
                }
              />
              <div className="w-14 h-7 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
            <div className="flex items-center">
              <span
                className={`font-semibold transition-colors ${
                  billingCycle === 'annually'
                    ? 'text-indigo-600'
                    : 'text-slate-500'
                }`}
              >
                Annually
              </span>
              <span className="ml-2 text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pricing Tiers Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Tier 1: Free */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up">
              <h3 className="text-2xl font-bold text-slate-800">Free / Basic</h3>
              <p className="mt-4 text-4xl font-bold text-slate-800">
                $0{' '}
                <span className="text-lg font-normal text-slate-500">
                  / month
                </span>
              </p>
              <ul className="mt-6 space-y-4 flex-grow">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Limited meeting duration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">Basic summaries</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">1 integration</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-slate-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-900 transition-transform hover:scale-105">
                Sign Up for Free
              </button>
            </div>

            {/* Tier 2: Pro (Highlighted) */}
            <div
              className="bg-white p-8 rounded-2xl shadow-2xl border-2 border-indigo-500 relative h-full flex flex-col transition-all duration-300 scale-105 animate-fade-in-up"
              style={{ animationDelay: '150ms' }}
            >
              <span className="bg-indigo-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full absolute top-0 -translate-y-1/2">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold text-indigo-600">
                Pro / Team
              </h3>
              <p className="mt-4 text-4xl font-bold text-slate-800">
                {billingCycle === 'monthly' ? '$25' : '$20'}
                <span className="text-lg font-normal text-slate-500">
                  / user / month
                </span>
              </p>
              <ul className="mt-6 space-y-4 flex-grow">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">All Basic features +</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Longer meeting duration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Full AI summaries & transcripts
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">All integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Basic physiological data
                  </span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform hover:scale-105">
                Start Pro Trial
              </button>
            </div>

            {/* Tier 3: Enterprise */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-2xl font-bold text-slate-800">
                Business / Enterprise
              </h3>
              <p className="mt-4 text-4xl font-bold text-slate-800">Custom</p>
              <ul className="mt-6 space-y-4 flex-grow">
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">All Pro features +</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">Unlimited everything</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Advanced analytics & reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon />
                  <span className="ml-3 text-slate-600">
                    Dedicated support & API access
                  </span>
                </li>
              </ul>
              <button className="w-full mt-8 border-2 border-slate-800 text-slate-800 font-bold py-3 px-6 rounded-lg hover:bg-slate-800 hover:text-white transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-lg text-slate-800">
                Can I change my plan later?
              </h4>
              <p className="mt-2 text-slate-600">
                Yes, you can upgrade, downgrade, or cancel your plan at any time
                from your account settings.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-lg text-slate-800">
                What happens when my free trial ends?
              </h4>
              <p className="mt-2 text-slate-600">
                We will notify you before your trial ends. You can then choose
                to upgrade to a paid plan or your account will be downgraded to
                the Free plan.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <h4 className="font-semibold text-lg text-slate-800">
                Is my data secure?
              </h4>
              <p className="mt-2 text-slate-600">
                Absolutely. We use industry-standard encryption and security
                practices to protect your data. Privacy is a top priority at
                Go-X.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeIn-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeIn-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Pricing;

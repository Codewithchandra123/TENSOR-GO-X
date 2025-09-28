// src/Pages/Pricing/data.js
import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

// A reusable CheckIcon component
export const CheckIcon = () => (
  <FiCheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
);

export const pricingPlans = [
  {
    name: 'Free / Basic',
    price: { monthly: 0, annually: 0 },
    description: '/ month',
    isPopular: false,
    features: [
      'Limited meeting duration',
      'Basic AI summaries',
      '1 platform integration',
    ],
    cta: 'Sign Up for Free',
    ctaVariant: 'secondary',
    ctaAction: { type: 'navigate', to: '/signup' }, // ✅ Routing for signup
  },
  {
    name: 'Pro / Team',
    price: { monthly: 25, annually: 20 },
    description: '/ user / month',
    isPopular: true,
    features: [
      'All Basic features, plus:',
      'Extended meeting duration',
      'Full AI summaries & transcripts',
      'Unlimited integrations',
      'Basic physiological data insights',
    ],
    cta: 'Start Pro Trial',
    ctaVariant: 'primary',
    ctaAction: { type: 'function', handler: 'openTrialModal' }, // ✅ Trial modal
  },
  {
    name: 'Business / Enterprise',
    price: { monthly: 'Custom', annually: 'Custom' },
    description: '',
    isPopular: false,
    features: [
      'All Pro features, plus:',
      'Unlimited usage and duration',
      'Advanced analytics & reporting',
      'Dedicated support & API access',
      'On-premise deployment options',
    ],
    cta: 'Contact To Our Team',
    ctaVariant: 'outline',
    ctaAction: { type: 'navigate', to: '/contact' }, // ✅ Routing for contact
  },
];

export const faqData = [
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade, downgrade, or cancel your plan at any time directly from your account settings. Prorated charges or credits will be applied automatically.',
  },
  {
    question: 'What happens when my free trial for the Pro plan ends?',
    answer:
      'We will notify you before your trial expires. You can then choose to upgrade to a paid plan. If you do nothing, your account will be gracefully downgraded to the Free plan.',
  },
  {
    question: 'Is my conversation and meeting data secure?',
    answer:
      'Absolutely. We use industry-standard, end-to-end encryption and robust security practices to protect your data. Privacy and security are fundamental to our platform.',
  },
];

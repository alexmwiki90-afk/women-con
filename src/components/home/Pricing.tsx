import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Early Bird',
      price: 299,
      features: [
        'Full Conference Access',
        'All Workshop Sessions',
        'Networking Events',
        'Conference Materials',
        'Lunch & Refreshments',
        'Certificate of Attendance',
      ],
      popular: false,
    },
    {
      name: 'Standard',
      price: 499,
      features: [
        'Everything in Early Bird',
        'VIP Seating',
        'Exclusive Workshops',
        'Meet & Greet with Speakers',
        'Premium Swag Bag',
        'Post-Event Recordings',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 1299,
      features: [
        'Everything in Standard',
        'Team of 5 Tickets',
        'Private Networking Session',
        'Dedicated Support',
        'Custom Workshop Options',
        'Year-round Access to Content',
      ],
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Choose Your Pass
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Select the perfect ticket for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-primary-600 shadow-2xl scale-105'
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/ticket</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get This Ticket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

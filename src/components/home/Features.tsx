import { MapPin, Globe, Hotel, Utensils } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      icon: MapPin,
      title: 'Prime Venue',
      description: 'Located in the heart of Paris with state-of-the-art facilities and excellent accessibility.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with developers and tech leaders from around the world.',
    },
    {
      icon: Hotel,
      title: 'Accommodation',
      description: 'Partner hotels with exclusive conference rates for attendees.',
    },
    {
      icon: Utensils,
      title: 'Premium Catering',
      description: 'Gourmet meals and refreshments throughout the conference.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

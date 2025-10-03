import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function SpeakersPreview() {
  const speakers = [
    {
      name: 'John Adams',
      role: 'Lead Developer at Tech Corp',
      image: 'images/speaker-1.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO at Innovation Labs',
      image: 'images/speaker-2.jpg',
    },
    {
      name: 'James Smith',
      role: 'Principal Engineer',
      image: 'images/speaker-3.jpg',
    },
    {
      name: 'Angelie Crawford',
      role: 'Tech Lead at StartupX',
      image: 'images/speaker-4.jpg',
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
            Featured Speakers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Learn from the Best
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            World-class speakers sharing insights on the latest trends and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {speaker.name}
              </h3>
              <p className="text-gray-600">{speaker.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/speakers"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-4 transition-all"
          >
            View All Speakers
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

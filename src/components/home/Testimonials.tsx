import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Roger Scott',
      role: 'Senior Developer',
      image: 'images/person_1.jpg',
      text: 'An incredible experience! The speakers were outstanding and the networking opportunities were invaluable.',
    },
    {
      name: 'Emily Chen',
      role: 'Product Manager',
      image: 'images/person_2.jpg',
      text: 'EventTalk exceeded all my expectations. I learned so much and made connections that will last a lifetime.',
    },
    {
      name: 'Michael Brown',
      role: 'Tech Lead',
      image: 'images/person_3.jpg',
      text: 'The best tech conference I\'ve ever attended. Worth every penny and I\'m definitely coming back next year.',
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Attendees Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-2xl p-8 relative"
            >
              <Quote className="w-12 h-12 text-primary-500/20 absolute top-6 right-6" />
              <div className="relative">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-primary-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-primary-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

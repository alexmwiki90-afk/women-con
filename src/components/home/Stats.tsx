import { Users, Handshake, Armchair, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

function Counter({ target, label, icon: Icon }: { target: number; label: string; icon: any }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-8 bg-white rounded-2xl shadow-lg"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-5xl font-bold text-gray-900 mb-2">{count}+</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    { target: 30, label: 'Expert Speakers', icon: Users },
    { target: 200, label: 'Sponsors', icon: Handshake },
    { target: 2500, label: 'Attendees', icon: Armchair },
    { target: 40, label: 'Topics', icon: Lightbulb },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="images/about.jpg"
              alt="Conference"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Conference Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Experience the Best in Tech
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Join thousands of developers, tech enthusiasts, and industry leaders for an unforgettable experience.
              Network, learn, and grow with the best minds in technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Counter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

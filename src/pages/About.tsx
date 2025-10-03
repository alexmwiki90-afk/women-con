import { motion } from 'framer-motion'
import Stats from '../components/home/Stats'
import Testimonials from '../components/home/Testimonials'

export default function About() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(images/bg_2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About EventTalk
            </h1>
            <div className="flex items-center gap-2 text-gray-300">
              <a href="/" className="hover:text-primary-400 transition-colors">
                Home
              </a>
              <span>/</span>
              <span>About</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              25 Years of Excellence in Tech Events
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                EventTalk has been at the forefront of bringing together the brightest minds in technology
                for over two decades. Our conference has grown from a small gathering of enthusiasts to
                one of the most anticipated tech events globally.
              </p>
              <p>
                We pride ourselves on creating an environment where innovation thrives, connections are made,
                and the future of technology is shaped. Every year, we carefully curate speakers, topics, and
                experiences that push the boundaries of what's possible.
              </p>
              <p>
                Join us as we continue to inspire, educate, and connect the global tech community through
                world-class conferences and events.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Testimonials />
    </>
  )
}

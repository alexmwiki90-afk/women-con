import { motion } from 'framer-motion'
import { Twitter, Facebook, Instagram } from 'lucide-react'

export default function Speakers() {
  const speakers = [
    {
      name: 'John Adams',
      role: 'Lead Developer at Tech Corp',
      image: 'images/speaker-1.jpg',
      bio: 'Expert in cloud architecture and distributed systems',
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO at Innovation Labs',
      image: 'images/speaker-2.jpg',
      bio: 'Pioneer in AI and machine learning applications',
    },
    {
      name: 'James Smith',
      role: 'Principal Engineer at StartupX',
      image: 'images/speaker-3.jpg',
      bio: 'Specialist in web performance and optimization',
    },
    {
      name: 'Angelie Crawford',
      role: 'Tech Lead at DevCorp',
      image: 'images/speaker-4.jpg',
      bio: 'Expert in modern frontend frameworks',
    },
    {
      name: 'Michael Chen',
      role: 'Senior Architect',
      image: 'images/speaker-5.jpg',
      bio: 'Microservices and containerization expert',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Engineering Manager',
      image: 'images/speaker-6.jpg',
      bio: 'Leadership and team building specialist',
    },
  ]

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
              Our Speakers
            </h1>
            <div className="flex items-center gap-2 text-gray-300">
              <a href="/" className="hover:text-primary-400 transition-colors">
                Home
              </a>
              <span>/</span>
              <span>Speakers</span>
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
            className="text-center mb-16"
          >
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Meet Our Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              World-Class Speakers
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-primary-400 mb-3">{speaker.role}</p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-600 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-600 transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-primary-600 transition-colors"
                      >
                        <Instagram className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{speaker.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

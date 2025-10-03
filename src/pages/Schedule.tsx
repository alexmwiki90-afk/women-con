import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock, MapPin } from 'lucide-react'

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0)

  const days = [
    { day: 'Day 01', date: '21 Dec. 2025' },
    { day: 'Day 02', date: '22 Dec. 2025' },
    { day: 'Day 03', date: '23 Dec. 2025' },
    { day: 'Day 04', date: '24 Dec. 2025' },
  ]

  const schedule = [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Breakfast',
      description: 'Welcome coffee and registration desk opens',
      speaker: null,
      location: 'Main Hall',
    },
    {
      time: '09:00 - 10:30',
      title: 'Future of Web Development',
      description:
        'Explore the latest trends and technologies shaping the future of web development, including WebAssembly, edge computing, and more.',
      speaker: 'Brett Morgan',
      role: 'Tech Lead at Google',
      image: 'images/person_1.jpg',
      location: 'Main Stage',
    },
    {
      time: '10:30 - 11:00',
      title: 'Coffee Break',
      description: 'Networking opportunity with refreshments',
      speaker: null,
      location: 'Lobby Area',
    },
    {
      time: '11:00 - 12:30',
      title: 'Building Scalable Applications',
      description:
        'Best practices for building applications that scale to millions of users. Learn about microservices, load balancing, and database optimization.',
      speaker: 'Sarah Chen',
      role: 'Principal Engineer at AWS',
      image: 'images/person_2.jpg',
      location: 'Main Stage',
    },
    {
      time: '12:30 - 14:00',
      title: 'Lunch Break',
      description: 'Gourmet lunch and networking',
      speaker: null,
      location: 'Dining Hall',
    },
    {
      time: '14:00 - 15:30',
      title: 'AI in Modern Development',
      description:
        'How artificial intelligence is revolutionizing the development workflow. From code completion to automated testing.',
      speaker: 'Alex Kumar',
      role: 'ML Engineer at OpenAI',
      image: 'images/person_3.jpg',
      location: 'Main Stage',
    },
    {
      time: '15:30 - 16:00',
      title: 'Coffee Break',
      description: 'Afternoon refreshments and networking',
      speaker: null,
      location: 'Lobby Area',
    },
    {
      time: '16:00 - 17:30',
      title: 'Panel Discussion: The Future is Now',
      description:
        'Join our expert panel as they discuss emerging technologies and their impact on software development.',
      speaker: 'Various Speakers',
      role: 'Industry Leaders',
      image: 'images/person_4.jpg',
      location: 'Main Stage',
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
              Event Schedule
            </h1>
            <div className="flex items-center gap-2 text-gray-300">
              <a href="/" className="hover:text-primary-400 transition-colors">
                Home
              </a>
              <span>/</span>
              <span>Schedule</span>
            </div>
          </motion.div>
        </div>
      </section>

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
              Full Schedule
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Plan Your Days
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeDay === index
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50 scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="text-lg">{day.day}</div>
                <div className="text-sm opacity-80">{day.date}</div>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {schedule.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all ${
                  session.speaker ? 'border-l-4 border-primary-600' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {session.speaker && session.image && (
                    <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                      <img
                        src={session.image}
                        alt={session.speaker}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-primary-600">
                        <Clock className="w-5 h-5" />
                        <span className="font-semibold">{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span className="font-medium">{session.location}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {session.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {session.description}
                    </p>

                    {session.speaker && (
                      <div className="flex items-center gap-2 text-gray-900">
                        <span className="font-semibold">{session.speaker}</span>
                        {session.role && (
                          <>
                            <span className="text-gray-400">—</span>
                            <span className="text-gray-600">{session.role}</span>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

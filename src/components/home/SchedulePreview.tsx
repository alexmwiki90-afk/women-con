import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock } from 'lucide-react'

export default function SchedulePreview() {
  const [activeDay, setActiveDay] = useState(0)

  const days = [
    { day: 'Day 01', date: '21 Dec. 2025' },
    { day: 'Day 02', date: '22 Dec. 2025' },
    { day: 'Day 03', date: '23 Dec. 2025' },
    { day: 'Day 04', date: '24 Dec. 2025' },
  ]

  const sessions = [
    {
      time: '09:00 - 10:30',
      title: 'Future of Web Development',
      description:
        'Explore the latest trends and technologies shaping the future of web development.',
      speaker: 'Brett Morgan',
      role: 'Tech Lead at Google',
      image: 'images/person_1.jpg',
    },
    {
      time: '11:00 - 12:30',
      title: 'Building Scalable Applications',
      description:
        'Best practices for building applications that scale to millions of users.',
      speaker: 'Sarah Chen',
      role: 'Principal Engineer',
      image: 'images/person_2.jpg',
    },
    {
      time: '14:00 - 15:30',
      title: 'AI in Modern Development',
      description:
        'How artificial intelligence is revolutionizing the development workflow.',
      speaker: 'Alex Kumar',
      role: 'ML Engineer',
      image: 'images/person_3.jpg',
    },
  ]

  return (
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
            Event Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            What's Happening
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeDay === index
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-lg">{day.day}</div>
              <div className="text-sm opacity-80">{day.date}</div>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={session.image}
                  alt={session.speaker}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary-600 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">{session.time}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {session.title}
                </h3>
                <p className="text-gray-600 mb-4">{session.description}</p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">
                    {session.speaker}
                  </span>
                  <span className="text-gray-500">—</span>
                  <span className="text-gray-600">{session.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

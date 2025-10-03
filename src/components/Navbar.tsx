import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/speakers', label: 'Speakers' },
    { to: '/schedule', label: 'Schedule' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold">
            <span className={`${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Event
            </span>
            <span className="text-primary-600">Talk</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-300'
                } ${location.pathname === link.to ? 'text-primary-600' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary">Buy Ticket</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block font-medium text-gray-700 hover:text-primary-600 ${
                    location.pathname === link.to ? 'text-primary-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="btn-primary w-full">Buy Ticket</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

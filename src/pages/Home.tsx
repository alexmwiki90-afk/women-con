import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Stats from '../components/home/Stats'
import SpeakersPreview from '../components/home/SpeakersPreview'
import SchedulePreview from '../components/home/SchedulePreview'
import Testimonials from '../components/home/Testimonials'
import Pricing from '../components/home/Pricing'
import Newsletter from '../components/home/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <SpeakersPreview />
      <SchedulePreview />
      <Testimonials />
      <Pricing />
      <Newsletter />
    </>
  )
}

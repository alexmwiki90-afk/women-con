import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Speakers from './pages/Speakers'
import Schedule from './pages/Schedule'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="speakers" element={<Speakers />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  )
}

export default App

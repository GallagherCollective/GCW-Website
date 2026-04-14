import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Services from './pages/Services'
import Platform from './pages/Platform'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Splash />} />
      </Routes>
    </>
  )
}
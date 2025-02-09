import { useState } from 'react'

import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-gray-400 bg-gray-900 body-font">    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Contact />
  </main>
  )
}

export default App

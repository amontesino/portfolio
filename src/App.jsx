import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Layout from './components/Layout'
import { AnimatePresence } from "framer-motion"

function App() {
  

  return (
    <BrowserRouter>
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
    </BrowserRouter>
  )
}

export default App

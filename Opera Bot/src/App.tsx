import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/HomeView'
import Counter from './components/CounterComponent'
import About from './views/AboutView'


function App() {
  return (
    <div className="App">
      <nav>
        <h1><Link to="/">Title</Link></h1>
        
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/HomeView'
import Counter from './components/CounterComponent'
import About from './views/AboutView'
import Register from './views/RegisterView'
import Login from './views/LoginView'

import ErrorPage from './components/ErrorPage'


function App() {
  return (
    <div className="App">
      <nav className="fixed flex column justify-evenly items-center bg-slate-700 w-screen h-14">
        <h1><Link to="/">Title</Link></h1>
        <h2><Link to="/about">About</Link></h2>
        <h2><Link to="/counter">Counter</Link></h2>
        <h2><Link to="/register">Register</Link></h2>
        <h2><Link to="/login">Login</Link></h2>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />


        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import './index.css'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        {/* Add other routes as needed */}
      </Routes>
  )
}

export default App
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import PageRoutes from './routes/Routes'

const App = () => {
  return (
    <Router>
      <Navbar />
      <PageRoutes />
    </Router>  
  )
}

export default App
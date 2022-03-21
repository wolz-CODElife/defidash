import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import PageRoutes from './routes/Routes'

const App = () => {
  const [connected, setConnected] = useState(true)

  useEffect(() => {
    if(localStorage.getItem("connected") === 'true') {
      setConnected(true)
    }
    else{
      setConnected(false)
    }
  }, [])
  return (
    <Router>
      <Navbar connected={connected} />
      <PageRoutes connected={connected} setConnected={setConnected} />
    </Router>  
  )
}

export default App
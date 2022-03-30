import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import PageRoutes from './routes/Routes'
import { useMoralis } from "react-moralis";

const App = () => {
  const [connected, setConnected] = useState(false)
  const {isAuthenticated} = useMoralis();

  useEffect(() => {
    if(isAuthenticated) {
      setConnected(true)
    }
    else{
      setConnected(false)
    }
  }, [isAuthenticated])
  return (
    <Router>
      <Navbar connected={connected} />
      <PageRoutes connected={connected} setConnected={setConnected} />
    </Router>  
  )
}

export default App
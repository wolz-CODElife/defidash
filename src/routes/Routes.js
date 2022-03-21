import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ConnectWallet from '../pages/ConnectWallet'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const PageRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/connectwallet' element={<ConnectWallet />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default PageRoutes
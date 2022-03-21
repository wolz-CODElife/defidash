import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ConnectWallet from '../pages/ConnectWallet'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'

const PageRoutes = ({connected, setConnected}) => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home connected={connected} />} />
                <Route path='/connectwallet' element={<ConnectWallet connected={connected} setConnected={setConnected} />} />
                <Route path='/dashboard' element={<Dashboard connected={connected} setConnected={setConnected} />} />
            </Routes>
        </>
    )
}

export default PageRoutes
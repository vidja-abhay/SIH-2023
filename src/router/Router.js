import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./../pages/Home"
import Login from "./../pages/Login"
import Register from "./../pages/Register"
import Heritage from './../pages/Heritage'
import HeritageDetails from '../pages/HeritageDetails'
import About from '../pages/About'
// import Common from '../traditionPages/Common'
// import Culture from '../pages/Culture'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />

            <Route path='/home' element={<Home />} />

            <Route path='/about' element={<About />} />

            <Route path='/heritage' element={<Heritage />} />

            {/* <Route path='/culture' element={<Culture />} /> */}

            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />

            <Route path='/heritage/:id' element={<HeritageDetails />} />

            {/* <Route path='/culture/:id' element={<Common />} /> */}
        </Routes>
    )
}

export default Routers
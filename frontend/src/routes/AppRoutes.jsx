import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserAuth from '../auth/UserAuth'
import Home from "../screens/Home"
import Login from "../screens/Login"
import Project from "../screens/Project"
import Register from "../screens/Register"


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAuth><Home /></UserAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
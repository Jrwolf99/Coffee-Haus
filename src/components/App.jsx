import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';



export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>



    </>
  )
}

import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';



export default function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={user ? < Home /> : <Login />} />
        <Route path="/login/*" element={!user ? <Login /> : <Home />} />
        <Route path="/signup/*" element={!user ? <Signup /> : <Home />} />
        <Route path="/home/*" element={user ? < Home /> : <Login />} />
      </Routes>
    </>
  )
}

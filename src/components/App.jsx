import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';



export default function App() {

  const { user } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path="/*" element={user ? < Home /> : <Navigate to="/login" replace />} />
        <Route path="/login/*" element={!user ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/signup/*" element={!user ? <Signup /> : <Navigate to="/" replace />} />
        <Route path="/home/*" element={user ? < Home /> : <Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

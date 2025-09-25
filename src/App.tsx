import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import './App.css';

export interface User {
  email: string;
  password: string;
  name?: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleLogin = (email: string, password: string): boolean => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleRegister = (user: User): boolean => {
    const existingUser = users.find(u => u.email === user.email);
    if (existingUser) {
      return false; // User already exists
    }
    setUsers([...users, user]);
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : 
            <Login onLogin={handleLogin} />
          } />
          <Route path="/register" element={
            isAuthenticated ? <Navigate to="/dashboard" /> : 
            <Register onRegister={handleRegister} />
          } />
          <Route path="/dashboard" element={
            isAuthenticated ? <Dashboard onLogout={handleLogout} /> : 
            <Navigate to="/login" />
          } />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
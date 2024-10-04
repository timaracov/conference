import React from 'react';
import './App.css';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Profile } from './pages/profile/Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Profile/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/signup"
          element={<Register/>}
        />
      </Routes>
    </Router>
  );
}

export default App;

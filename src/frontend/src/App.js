import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Main } from './pages/main/Main';
import Patologies from './pages/patologies/Patologies';
import Docs from './pages/docs/Docs';
import Exercises from './pages/exercises/Execises';

function App() {
  return (
    <Router>
      {/* {  } */}
      <Routes>
        <Route
          path="/"
          element={<Main/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
        <Route
          path="/signup"
          element={<Register/>}
        />
        <Route
          path="/patologies"
          element={<Patologies/>}
        />
        <Route
          path="/exercises"
          element={<Exercises/>}
        />
        <Route
          path="/docs"
          element={<Docs/>}
        />
      </Routes>
    </Router>
  );
}

export default App;

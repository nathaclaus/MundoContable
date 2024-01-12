import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AdminDashboard from './components/admin/admindashboard';
import ClientDashboard from './components/users/userdashboard';
import EmployeeDashboard from './components/employee/ employeedashboard';
import Header from './components/Home/Header';

function Home() {
  return (
    <div>
      <Header /> {/* El Header solo aparecerá en la página principal */}
      <h2>ESTOY EN EL HOME</h2>
      {/* Contenido específico de la página principal */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<ClientDashboard />} />
          <Route path="/employee" element={<EmployeeDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

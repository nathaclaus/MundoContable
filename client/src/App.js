import React from 'react';
import './App.css';
import './CSS/body.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminDashboard from './components/admin/admindashboard';
import ClientDashboard from './components/cliente/clientedashboard.js';
import EmployeeDashboard from './components/employee/ employeedashboard.js';
import Header from './components/Home/Header';
import Footer from './components/Footer/footer'; // Asegúrate de usar la ruta correcta
import UserManagement from './components/users/usermanagement'; // Importa tu componente UserManagement



function Home() {
  return (
    <div>
      <Header />
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
          <Route path="/usermanagement" element={<UserManagement />} />

        </Routes>
        <Footer /> {/* El Footer se mostrará en todas las páginas */}
      </div>
    </Router>
  );
}

export default App;





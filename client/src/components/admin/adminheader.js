import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link


function AdminHeader() {
  return (
    <header>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Procesos</li>
          <Link to="/usermanagement">Gestion de usurios</Link>
          <li>Salir</li>
        </ul>
      </nav>
    </header>
  );
}

export default AdminHeader;

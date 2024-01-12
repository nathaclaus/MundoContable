// usermanagement.js -Aqui en este archivo esta la estructura para el manejo de usurios,agregar ,modificar y eliminar

import React from "react";
import "./usermanagement.css"; // Importa los estilos CSS
import AdminHeader from "../admin/adminheader"; // Si el archivo adminheader.js está un nivel arriba

function UserManagement() {
  // Aquí iría la lógica para obtener y mostrar la lista de usuarios

  return (
    <div>
      <AdminHeader />
      <h2>Gestión de Usuarios</h2>
      <ul className="user-list">
        {/* Mapeo y renderizado de la lista de usuarios */}
        <li className="user-item">
          Usuario 1<button className="editar-btn">Editar</button>
          <button className="eliminar-btn">Eliminar</button>
        </li>
        <li className="user-item">
          Usuario 2<button className="editar-btn">Editar</button>
          <button className="eliminar-btn">Eliminar</button>
        </li>
        {/* ... más elementos de la lista ... */}
      </ul>
      <button className="add-user-button">Agregar Nuevo Usuario</button>
    </div>
  );
}

export default UserManagement;

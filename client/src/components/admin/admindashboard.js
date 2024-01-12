

import React, { useState } from 'react';
import './adminDashboard.css';

function AdminDashboard() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [empleadosSeleccionados, setEmpleadosSeleccionados] = useState([]);
  const [clientesSeleccionados, setClientesSeleccionados] = useState([]);

  // Datos de ejemplo para empleados y clientes (simula la información de la base de datos)
  const empleados = [
    { id: 1, nombre: 'Empleado 1' },
    { id: 2, nombre: 'Empleado 2' },
    { id: 3, nombre: 'Empleado 3' },
  ];

  const clientes = [
    { id: 101, nombre: 'Cliente A' },
    { id: 102, nombre: 'Cliente B' },
    { id: 103, nombre: 'Cliente C' },
  ];

  const handleAsignarClick = () => {
    setMostrarModal(true);
  };

  const handleCerrarModal = () => {
    setMostrarModal(false);
  };

  const handleAceptarCambios = () => {
    // Lógica para aceptar los cambios (puedes personalizar según tus necesidades)
    console.log('Empleados seleccionados:', empleadosSeleccionados);
    console.log('Clientes seleccionados:', clientesSeleccionados);
    setMostrarModal(false);
  };

  const handleEmpleadoCheckboxChange = (id) => {
    // Actualizar la lista de empleados seleccionados
    setEmpleadosSeleccionados((prevSeleccionados) => {
      if (prevSeleccionados.includes(id)) {
        return prevSeleccionados.filter((e) => e !== id);
      } else {
        return [...prevSeleccionados, id];
      }
    });
  };

  const handleClienteCheckboxChange = (id) => {
    // Actualizar la lista de clientes seleccionados
    setClientesSeleccionados((prevSeleccionados) => {
      if (prevSeleccionados.includes(id)) {
        return prevSeleccionados.filter((c) => c !== id);
      } else {
        return [...prevSeleccionados, id];
      }
    });
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Procesos</li>
            <li>Usuarios</li>
            <li>Salir</li>
          </ul>
        </nav>
      </header>


      <main>
        <h1>Bienvenido al Panel de Administración</h1>
        <div>
          <h2>Listado de procesos</h2>
          <p>Aquí va el listado junto con su descripción.</p>

          <button onClick={handleAsignarClick}>Asignar</button>

          {mostrarModal && (
            <div className="modal">
              <div className="modal-contenido">
                <span onClick={handleCerrarModal} className="modal-cerrar">
                  Cerrar
                </span>
                <h3>Seleccionar empleado y cliente</h3>

                {/* Formulario de selección de empleados y clientes */}
                <form>
                  <div>
                    <h4>Seleccionar empleados:</h4>
                    {empleados.map((empleado) => (
                      <div key={empleado.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={empleadosSeleccionados.includes(empleado.id)}
                            onChange={() => handleEmpleadoCheckboxChange(empleado.id)}
                          />
                          {empleado.nombre}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4>Seleccionar clientes:</h4>
                    {clientes.map((cliente) => (
                      <div key={cliente.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={clientesSeleccionados.includes(cliente.id)}
                            onChange={() => handleClienteCheckboxChange(cliente.id)}
                          />
                          {cliente.nombre}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Botón de aceptar cambios */}
                  <button type="button" onClick={handleAceptarCambios}>
                    Aceptar cambios
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;

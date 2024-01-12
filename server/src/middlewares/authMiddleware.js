// authMiddleware.js

const authMiddleware = {
  isAdmin: (req, res, next) => {
    // Lógica de autenticación para el administrador
    // Verificar si el usuario tiene roles o permisos específicos
    // Llamar a next() si la autenticación es exitosa, de lo contrario, enviar una respuesta no autorizada
  },
  // Otras funciones de middleware de autenticación para empleados y clientes
};

module.exports = authMiddleware;

// Header.js

import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../img/logo.png";


const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img className="logo" src={logoImage} alt="Logo de la empresa" />
            </Link>
          </li>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/client">Cliente</Link></li>
          <li><Link to="/employee">Empleado</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

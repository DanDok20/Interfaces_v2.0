import "./components/Nav.css"
import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link className="nav-link" to='/'> 
                <img src="logo.png" alt="LOGO" width="98px" heigth="121px"></img>
            </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto  ">
            <li className="nav-item active ">
                <Link className="nav-link text-light" to='/'> Inicio </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/agentes'> Agentes </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/mapas'> Mapas </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/eventos'> Eventos </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/foro'> Foro </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/contactanos'> Contactanos </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/login'> Login </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link text-light" to='/registro'> Registro </Link>
            </li>
            </ul>
        </div>
        <Link className="nav-link" to='/login'> 
                <img src="user_icon.png" alt="USER" width="60px" heigth="70px"></img>
            </Link>
        </nav>
    )
}

export default NavBar
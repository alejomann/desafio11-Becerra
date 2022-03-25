import React from 'react'
import CartWidget from "./CartWidget.js"
import { Link, NavLink } from "react-router-dom";

const NavBar = ({cantidad,total}) => {
  return (
    <nav className="navbar ms-auto">
        <ul className="d-flex align-items-center m-0">
          <li className="mx-1"><NavLink to="/categoria/hombre" className="text-white py-2 px-3">Hombre</NavLink></li>
          <li className="mx-1"><NavLink to="/categoria/mujer" className="text-white py-2 px-3">Mujer</NavLink></li>
          <li className="mx-1"><NavLink to="/categoria/joyas" className="text-white py-2 px-3">Joyas</NavLink></li>
          <li className="mx-1"><NavLink to="/categoria/electronica" className="text-white py-2 px-3">Electronica</NavLink></li>
        </ul>
        <Link to="../carrito" className='contProfile ms-4 d-flex align-items-center'>
          <CartWidget cantidad={cantidad} total={total} />
        </Link>
        <div className='contProfile'>
          <NavLink to="/carrito" className='login py-2 px-3'><small>SALIR</small></NavLink>
        </div>
    </nav> 
  )
}

export default NavBar
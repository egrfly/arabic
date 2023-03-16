import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand fixed-top bg-black">
      <div className="container-fluid align-items-baseline">
        <NavLink to="/" className="navbar-brand d-flex align-items-baseline link-primary">
          <img src="/logo.svg" alt="Logo" className="pe-2" />
          Arabic
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to="/letters" className={({ isActive }) => `nav-link link-light ${isActive ? 'active' : ''}`}>Letters</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link link-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Words</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><NavLink to="/words/interjections" className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}>Interjections</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

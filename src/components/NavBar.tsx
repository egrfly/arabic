import React from 'react'
import { Link } from 'react-router-dom'
import { wordCategories } from '../data/words'
import { getFormattedPath } from '../helpers/pathGenerator'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="NavBar navbar navbar-expand navbar-dark fixed-top">
      <div className="container-fluid align-items-baseline">
        <Link to="/" className="navbar-brand d-flex align-items-baseline link-primary">
          <img src="/logo.svg" alt="Logo" className="pe-2" />
          Arabic
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/letters" className="nav-link link-light">Letters</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link link-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Words</a>
              <ul className="NavBar__Dropdown dropdown-menu dropdown-menu-dark p-0">
                {Object.keys(wordCategories).map((category) =>
                  <li key={category}>
                    <Link to={`/words/${getFormattedPath(category)}`} className="dropdown-item">{category}</Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

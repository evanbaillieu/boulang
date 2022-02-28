import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div class='corp-menu'>
        <nav>
            <li className={"navbar-item"}>
              <Link to="/">Notre Concept</Link>
            </li>
            <li className={"navbar-item"}>
              <Link to="/cours">Nos Cours</Link>
            </li>
            <li className={"navbar-item"}>
              <Link to="/contacte">Nous Contacter</Link>
            </li>
            <li className={"navbar-item"}>
              <Link to="/produits">Nos Produits</Link>
            </li>
            <li className={"navbar-item"}>
              <Link to="/livre"> Nos Livre</Link>
            </li>
        </nav>
    </div>
  )
}

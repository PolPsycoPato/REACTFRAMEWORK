import React, { Component } from 'react'
import React from 'react'; // Added to use React variable
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">CRUD React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul>
              <li className="nav-item">
                <NavLink className="Home" to="/">
                  Casa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="Create" to="/Create">
                  Crear
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

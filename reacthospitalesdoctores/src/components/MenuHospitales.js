import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Global from './../Global';

export default class MenuHospitales extends Component {
  url = Global.apiHospitales;

  state = {
    hospitales: []
  }

  loadHospitales = () => {
    axios.get(this.url + "webresources/hospitales")
      .then(response => {
        console.log("Hospitales recibidos:", response.data);
        this.setState({ hospitales: response.data });
      })
      .catch(error => console.error("Error cargando hospitales:", error));
  }

  componentDidMount() {
    this.loadHospitales();
  }

  render() {
    const { hospitales } = this.state;

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctores">Doctores</NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link"
                  id="hospitalesDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: 'none' }}
                >
                  Hospitales
                </button>
                <ul className="dropdown-menu" aria-labelledby="hospitalesDropdown">
                  {Array.isArray(hospitales) && hospitales.length > 0 ? (
                    hospitales.map((hospital) => (
                      <li key={hospital.idhospital ?? hospital.id}>
                        <NavLink
                          className="dropdown-item"
                          to={`/doctores/${hospital.idhospital ?? hospital.id}`}
                        >
                          {hospital.nombre}
                        </NavLink>
                      </li>
                    ))
                  ) : (
                    <li className="dropdown-item text-muted">
                      Cargando hospitales...
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

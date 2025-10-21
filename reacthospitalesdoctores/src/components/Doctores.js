import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {

  url = Global.apiDoctores;

  state = {
    doctores: [],
    selectedDoctorId: null
  };

  // Cargar doctores de un hospital específico
  loadDoctoresHospital = () => {
    if (!this.props.idhospital) return;
    const request = `api/doctores/doctoreshospital/${this.props.idhospital}`;
    axios.get(this.url + request)
      .then(response => {
        console.log("Doctores recibidos:", response.data);
        this.setState({ doctores: response.data });
      })
      .catch(error => console.error("Error cargando doctores:", error));
  };

  componentDidMount() {
    this.loadDoctoresHospital();
  }

  componentDidUpdate(props) {
    if (props.idhospital !== this.props.idhospital) {
      this.loadDoctoresHospital();
    }
  }

  render() {
    const { doctores } = this.state;

    return (
      <div>
        <h2 style={{ color: "red" }}>
          Doctores hospital: {this.props.idhospital}
        </h2>

        <table className='table table-primary'>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
              <th>Id Hospital</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(doctores) && doctores.length > 0 ? (
              doctores.map((doctor) => (
                <tr key={doctor.iddoctor ?? doctor.id ?? Math.random()}>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                  <td>{doctor.salario}</td>
                  <td>{doctor.idHospital ?? doctor.idHospital ?? this.props.idhospital}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => this.setState({ selectedDoctorId: doctor.iddoctor ?? doctor.id })}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">Cargando doctores...</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Renderizar detalles cuando haya un doctor seleccionado */}
        {this.state.selectedDoctorId && (
          <DetallesDoctor iddoctor={this.state.selectedDoctorId} />
        )}
      </div>
    );
  }
}

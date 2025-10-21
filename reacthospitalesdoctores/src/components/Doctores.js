import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';
import { Link } from 'react-router-dom';

export default class Doctores extends Component {

  url = Global.apiDoctores;

  state = {
    doctores: [],
    selectedDoctorId: null
  };

 
  loadDoctoresHospital = () => {
    if (!this.props.idhospital) return;
    const request = `api/doctores/doctoreshospital/${this.props.idhospital}`;
    const fullUrl = this.url + request;
    axios.get(fullUrl)
      .then(response => this.setState({ doctores: response.data }));

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
            { doctores.map((doctor) => {
                const doctorId = doctor.iddoctor ?? doctor.id ?? doctor._id ?? doctor.idDoctor ?? doctor.codigo ?? doctor.dni ?? null;
                return (
                  <tr key={doctorId ?? Math.random()}>
                    <td>{doctor.apellido}</td>
                    <td>{doctor.especialidad}</td>
                    <td>{doctor.salario}</td>
                    <td>{doctor.idHospital ?? doctor.idHospital ?? this.props.idhospital}</td>
                    <td>
                      {doctorId ? (
                        <Link className="btn btn-sm btn-outline-primary" to={`/doctor/${doctorId}`}>
                          Detalles
                        </Link>
                      ) : (
                        <button className="btn btn-sm btn-outline-secondary" disabled>Sin ID</button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* La navegación a detalles ahora usa una ruta dedicada /doctor/:id */}
      </div>
    );
  }
}

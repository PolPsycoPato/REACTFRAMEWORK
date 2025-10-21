import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DetallesDoctor extends Component {

  url = Global.apiDoctores;

  state = {
    doctor: null
  }

  loadDoctor = (id) => {
    if (!id) return;
    // Sanitizar id para evitar caracteres inesperados que provoquen 400
    const sid = String(id).replace(/[^0-9a-zA-Z\-_.]/g, '');
    if (!sid) return;

    const fullUrl = `${this.url}api/doctores/${encodeURIComponent(sid)}`;
    // Intento principal
    axios.get(fullUrl).then(
      res => this.setState({ doctor: res.data }),
      
      () => {
        const altUrl = `${this.url}api/doctores?id=${encodeURIComponent(sid)}`;
        axios.get(altUrl).then(r => this.setState({ doctor: r.data }), () => {});
      }
    );
  }

  componentDidMount() {
    this.loadDoctor(this.props.iddoctor);
  }

  componentDidUpdate(propiedades) {
    if (propiedades.iddoctor !== this.props.iddoctor) {
      this.loadDoctor(this.props.iddoctor);
    }
  }

  render() {
    const { doctor } = this.state;

    if (!doctor) return <div className="alert alert-secondary">Cargando detalles del doctor...</div>;

    return (
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{doctor.nombre} {doctor.apellido}</h5>
          <p className="card-text"><strong>Especialidad:</strong> {doctor.especialidad}</p>
          <p className="card-text"><strong>Salario:</strong> {doctor.salario}</p>
          <p className="card-text"><strong>Id Hospital:</strong> {doctor.idHospital}</p>
        </div>
      </div>
    );
  }

}

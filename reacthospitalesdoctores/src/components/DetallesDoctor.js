import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class DetallesDoctor extends Component {

  url = Global.apiDoctores;

  state = {
    doctor: null,
    loading: false,
    error: null
  }

  loadDoctor = (id) => {
    if (!id) return;
    this.setState({ loading: true, error: null });
    axios.get(`${this.url}api/doctores/${id}`)
      .then(res => this.setState({ doctor: res.data, loading: false }))
      .catch(err => this.setState({ error: err.message || 'Error', loading: false }));
  }

  componentDidMount() {
    this.loadDoctor(this.props.iddoctor);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.iddoctor !== this.props.iddoctor) {
      this.loadDoctor(this.props.iddoctor);
    }
  }

  render() {
    const { doctor, loading, error } = this.state;

    if (loading) return <div className="alert alert-info">Cargando detalles...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;
    if (!doctor) return <div className="alert alert-secondary">Seleccione un doctor para ver detalles</div>;

    return (
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">{doctor.nombre} {doctor.apellido}</h5>
          <p className="card-text"><strong>Especialidad:</strong> {doctor.especialidad}</p>
          <p className="card-text"><strong>Salario:</strong> {doctor.salario}</p>
          <p className="card-text"><strong>Id Hospital:</strong> {doctor.idHospital}</p>
          <p className="card-text"><strong>Email:</strong> {doctor.email ?? '—'}</p>
        </div>
      </div>
    );
  }

}

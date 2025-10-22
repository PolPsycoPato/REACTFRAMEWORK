import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default function CreateHospital() {
  const { id } = useParams();

  const idRef = useRef(null);
  const nombreRef = useRef(null);
  const direccionRef = useRef(null);
  const telefonoRef = useRef(null);
  const camasRef = useRef(null);

  function enviarFormulario(e) {
    e.preventDefault();
    const url = Global.apiHospitales + 'webresources/hospitales';

    let idhospital = '';
    if (idRef.current && idRef.current.value) {
      idhospital = idRef.current.value;
    } else if (id) {
      idhospital = id;
    } else {
      idhospital = '';
    }

    let nombre = '';
    if (nombreRef.current && nombreRef.current.value) {
      nombre = nombreRef.current.value;
    }

    let direccion = '';
    if (direccionRef.current && direccionRef.current.value) {
      direccion = direccionRef.current.value;
    }

    let telefono = '';
    if (telefonoRef.current && telefonoRef.current.value) {
      telefono = telefonoRef.current.value;
    }

    let camas = '';
    if (camasRef.current && camasRef.current.value) {
      camas = camasRef.current.value;
    }

    const form = {
      idhospital: idhospital,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      camas: camas
    };

    axios.post(url, form).then(function () { });
  }

  return (
    <div className="container mt-4">
      <h2>Crear / Editar Hospital</h2>
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <label className="form-label">ID (desde URL)</label>
          <input className="form-control" name="idhospital" defaultValue={id || ''} ref={idRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input className="form-control" name="nombre" ref={nombreRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input className="form-control" name="direccion" ref={direccionRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input className="form-control" name="telefono" ref={telefonoRef} />
        </div>

        <div className="mb-3">
          <label className="form-label">Camas</label>
          <input className="form-control" name="camas" ref={camasRef} />
        </div>

        <button className="btn btn-primary" type="submit">Guardar</button>
      </form>
    </div>
  );
}

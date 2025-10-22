import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';
import axios from 'axios';

export default class Update extends Component {
    url = Global.apiDept;
    cajaIdRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();



    actualizarDepartamento = (e) => {
        e.preventDefault();
        var solicitud = "api/departamentos/" + this.cajaIdRef.current.value;
        var id = parseInt(this.cajaIdRef.current.value);
        var departamento = {
            dept_no: id,
            dnombre: this.cajaNombreRef.current.value,
            loc: this.cajaLocalidadRef.current.value
        }

        axios.put(this.url + solicitud, departamento).then(respuesta => {
            this.setState({
                status: true
            });
        })
    }

    state = {
        status: false,
    }


  render() {
    return (
      <div style={{margin: "auto", width: "50%"}}>
        {
            this.state.status == true && 
            <Navigate to="/"/>
        }
        <h1>Update Departamento</h1>
        <form>
            <label>Id departamento</label>
            <input type="text" ref={this.cajaIdRef} className='form-control'
            defaultValue={this.props.id} disabled/>
            <label>Nombre</label>
            <input type="text" ref={this.cajaNombreRef} className='form-control'
            defaultValue={this.props.nombre}/>
            <label>Localidad</label>
            <input type="text" ref={this.cajaLocalidad} className='form-control'
            defaultValue={this.props.cajaLocalidadRef}/>
            <button className='btn btn-info' onClick={this.actualizarDepartamento}>
                Update
            </button>
        </form>
      </div>
    )
  }
}
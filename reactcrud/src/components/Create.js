import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class Create extends Component {

    url = Global.apiDept;
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        status: false
    }

    crearDepartamento = (e) => {
        e.preventDefault();
        var solicitud = "api/departamentos";
        var id = parseInt(this.cajaNumeroRef.current.value);
        var departamento = {
            dept_no: id,
            dnombre: this.cajaNombreRef.current.value,
            loc: this.cajaLocalidadRef.current.value
        }
        axios.post(this.url + solicitud, departamento).then(respuesta => {
            this.setState({
                status: true
            });
        })
    }

    render() {
        if (this.state.status == true) {
            return <Navigate to="/" />
        }
        return (
            <div>
                <h1>Crear Departamento</h1>
                <form onSubmit={this.crearDepartamento}>
                    <div>
                        <label>Número: </label>
                        <input type="number" ref={this.cajaNumeroRef} className="form-control"  />
                    </div>
                    <div>
                        <label>Nombre: </label>
                        <input type="text" ref={this.cajaNombreRef} className="form-control"  />
                    </div>
                    <div>
                        <label>Localidad: </label>
                        <input type="text" ref={this.cajaLocalidadRef} className="form-control"  />
                    </div>
                    <button className="btn btn-success">
                        Crear departamento
                    </button>
                </form>
            </div>
        )
    }
}
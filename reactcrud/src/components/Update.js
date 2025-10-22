import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class Update extends Component {

    url = Global.apiDept;
    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        status: false,
        departamento: null
    }

    componentDidMount() {
        // Obtener id desde params. Dependiendo de la versión de react-router,
        // puede venir en this.props.match.params.id o en this.props.params.
        // Asumimos convención usada en el proyecto: /edit/:id -> match.params.id
        const id = this.props.match ? this.props.match.params.id : (this.props.params ? this.props.params.id : null);

        if (id) {
            const solicitud = "api/departamentos/" + id;
            axios.get(this.url + solicitud).then(respuesta => {
                this.setState({
                    departamento: respuesta.data
                });
            }).catch(error => {
                console.error('Error cargando departamento:', error);
            })
        }
    }

    actualizarDepartamento = (e) => {
        e.preventDefault();
        var solicitud = "api/departamentos/" + this.cajaNumeroRef.current.value;
        var departamento = {
            dept_no: parseInt(this.cajaNumeroRef.current.value),
            dnombre: this.cajaNombreRef.current.value,
            loc: this.cajaLocalidadRef.current.value
        }
        axios.put(this.url + solicitud, departamento).then(respuesta => {
            this.setState({
                status: true
            });
        })
    }

    render() {
        if (this.state.status === true) {
            return <Navigate to="/" />
        }

        const dep = this.state.departamento;

        return (
            <div>
                <h1>Actualizar Departamento</h1>
                <form onSubmit={this.actualizarDepartamento}>
                    <div>
                        <label>Número: </label>
                        <input type="number" ref={this.cajaNumeroRef} className="form-control" required defaultValue={dep ? dep.dept_no : ''} readOnly />
                    </div>
                    <div>
                        <label>Nombre: </label>
                        <input type="text" ref={this.cajaNombreRef} className="form-control" required defaultValue={dep ? dep.dnombre : ''} />
                    </div>
                    <div>
                        <label>Localidad: </label>
                        <input type="text" ref={this.cajaLocalidadRef} className="form-control" required defaultValue={dep ? dep.loc : ''} />
                    </div>
                    <button className="btn btn-primary">
                        Actualizar departamento
                    </button>
                </form>
            </div>
        )
    }
}


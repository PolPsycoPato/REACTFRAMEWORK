import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global';
import { Navigate } from 'react-router-dom';

export default class Delete extends Component {

    url = Global.apiDept;
    cajaIdRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        status: false,
        departamento: null
    }

    componentDidMount() {
        const id = this.props.match ? this.props.match.params.id : (this.props.params ? this.props.params.id : null);
        if (id) {
            const solicitud = "api/departamentos/" + id;
            axios.get(this.url + solicitud).then(respuesta => {
                this.setState({
                    departamento: respuesta.data
                });
            })
        }
    }

    borrarDepartamento = (e) => {
        e.preventDefault();
        var id = this.cajaIdRef.current.value;
        var solicitud = "api/departamentos/" + id;
        axios.delete(this.url + solicitud).then(respuesta => {
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
                <h1>Borrar Departamento</h1>
                <form onSubmit={this.borrarDepartamento}>
                    <div>
                        <label>Número: </label>
                        <input type="number" ref={this.cajaIdRef} className="form-control" required defaultValue={dep ? dep.dept_no : ''} readOnly />
                    </div>
                    <div>
                        <label>Nombre: </label>
                        <input type="text" ref={this.cajaNombreRef} className="form-control" required defaultValue={dep ? dep.dnombre : ''} readOnly />
                    </div>
                    <div>
                        <label>Localidad: </label>
                        <input type="text" ref={this.cajaLocalidadRef} className="form-control" required defaultValue={dep ? dep.loc : ''} readOnly />
                    </div>
                    <button className="btn btn-danger">
                        Borrar departamento
                    </button>
                </form>
            </div>
        )
    }
}

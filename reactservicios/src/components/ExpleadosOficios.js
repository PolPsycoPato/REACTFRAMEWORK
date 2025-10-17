import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

export default class EmpleadosOficios extends Component {
    urlEmp = Global.urlEmpleados;
    selectOficio = React.createRef();

    state = {
        oficios: [],
        empleados: []
    };

    loadOficios = () => {
        let request = 'api/Empleados/Oficios';
        axios.get(this.urlEmp + request).then(response => {
            this.setState({ oficios: response.data });
        });
    };

    loadEmpleadosOficio = () => {
        let oficio = this.selectOficio.current.value;
        if (!oficio) return;
        let request = 'api/Empleados/EmpleadosOficio/' + oficio;
        axios.get(this.urlEmp + request).then(response => {
            this.setState({ empleados: response.data });
        }).catch(error => {
            console.error("Error cargando empleados:", error);
        });
    };

    componentDidMount() {
        this.loadOficios();
    }

    render() {
        return (
            <div>
                <h1 style={{ color: 'red' }}>Empleados y sus Oficios</h1>
                <label>Seleccione un Oficio: </label>
                <select ref={this.selectOficio}>
                    <option value="">-- Seleccion --</option>
                    {this.state.oficios.map((oficio, index) => (
                        <option key={index} value={oficio}>
                            {oficio}
                        </option>
                    ))}
                </select>
                <button onClick={this.loadEmpleadosOficio}>
                    Mostrar Empleados
                </button>

                <table border="1">
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.empleados.map((emp, index) => (
                            <tr key={index}>
                                <td>{emp.apellido}</td>
                                <td>{emp.oficio}</td>
                                <td>{emp.salario}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'

export default class Hospitales extends Component {
    state = { hospitales: [] }

    loadhHospitales = () => {
        let request = 'webresources/hospitales';
        return axios.get(Global.urlHospitales + request).then(respuesta => {
            this.setState({
                hospitales: respuesta.data
            })
        })
    }

    componentDidMount = () => {
        this.loadhHospitales();
    }

    render() {
        return (
            <div>Hospitales
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            º<th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Camas</th>
                        </tr>
                    </thead>
                    <tbody> {this.state.hospitales.map((hospital, index) =>
                        <tr key={index}>
                            <td>{hospital.idhospital}</td>
                            <td>{hospital.nombre}</td>
                            <td>{hospital.direccion}</td>
                            <td>{hospital.telefono}</td>
                            <td>{hospital.camas}</td>
                        </tr>
                    )}
                    </tbody>
                </table>

            </div>
        )
    }
}

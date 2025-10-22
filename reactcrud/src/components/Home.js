import { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';



export default class Home extends Component {
    url = Global.apiDept;

    state = {
        status: true,
        departamentos: []
    }

    loadDepartamentos = () => {
        let solicitud = "api/departamentos";
        axios.get(this.url + solicitud).then(respuesta => {
            this.setState({
                departamentos: respuesta.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }


    deleteDepartamento = (id) => {
        let solicitud = "api/departamentos/" + id;
        axios.delete(this.url + solicitud).then(respuesta => {
            this.loadDepartamentos();
        }
        )
    }

    render() {
        if (this.state.status == false) {
            return (<div style={{ margin: "auto", width: "50%" }}>
                <img src={('../assets/images/loading.jpg')} alt="loading" />
            </div>);
        } else {
            return (
            <div style={{margin: "auto", width: "50%"}}>
                <h1>Departamentos Cargados</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <tr></tr>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.departamentos.map((dept, index) => {
                            return (
                                <tr key={index}>
                                    <td>{dept.id}</td>
                                    <td>{dept.nombre}</td>
                                    <td>{dept.localidad}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={ () => this.deleteDepartamento(dept.id)}>Eliminar</button>
                                         <NavLink className="btn btn-info"
                                    to={"/update/" + dept.dept_no
                                        + "/" + dept.dnombre 
                                        + "/" + dept.loc
                                    }>
                                        Update
                                    </NavLink>
                                    </td>

                                </tr>
                            );
                        })
                        }

                    </tbody>
                </table>
            </div>
            );
        }
    }
}      
import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class EmpleadosDepartamento extends Component {
  urlEmp = Global.urlEmpleados;
  urlDept = Global.urlDepartamentos;

  cajaDepartamento = React.createRef();
  selectDepartamentos = React.createRef();

  state = {
    empleados: [],
    departamentos: []
  };

  loadDepartamentos = () => {
    let requestDept = "webresources/departamentos";
    axios.get(this.urlDept + requestDept).then(response => {
      console.log("Cargando Departamentos");
      this.setState({
        departamentos: response.data
      });
    });
  };

  buscarEmpleados = (event) => {
    event.preventDefault();
    let idDepartamento = this.cajaDepartamento.current.value;
    let requestEmp = "api/empleados/empleadosdepartamento/" + idDepartamento;

    axios.get(this.urlEmp + requestEmp).then(response => {
      console.log("Leyendo empleados");
      this.setState({
        empleados: response.data
      });
    });
  };

  seleccionarDepartamento = (event) => {
    event.preventDefault();
    let idDepartamento = this.selectDepartamentos.current.value;
    let requestEmp = "api/empleados/empleadosdepartamento/" + idDepartamento;

    axios.get(this.urlEmp + requestEmp).then(response => {
      console.log("Leyendo empleados del departamento seleccionado");
      this.setState({
        empleados: response.data
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Empleados por Departamento</h1>

        <form>
          <label>Introduzca ID Departamento: </label>
          <input type="number" ref={this.cajaDepartamento} />
          <button onClick={this.buscarEmpleados}>Buscar</button>

          <hr />

          <label>Seleccione Departamento: </label>
          <select ref={this.selectDepartamentos}>
            {this.state.departamentos.map((departamento, index) => (
              <option key={index} value={departamento.numero}>
                {departamento.nombre}
              </option>
            ))}
          </select>
          <button onClick={this.seleccionarDepartamento}>Seleccionar</button>
        </form>

        <hr />

        <h3>Empleados encontrados:</h3>
        <ul>
          {this.state.empleados.map((empleado, index) => (
            <li key={index}>{empleado.apellido}</li>
          ))}
        </ul>
      </div>
    );
  }
}

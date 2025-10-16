import React, { Component } from 'react'

export default class Form extends Component {


  cajaNombre = React.createRef();

  peticionesFormulario = (event) => {
    event.preventDefault();
    console.log("Peticion lista!");
    let nombre = this.cajaNombre.current.value;
    console.log("Nombre Recibido" + nombre);    
    
  }

  render() {
    return (
      <div>
      <h1>Formulario simple react</h1>
      <form onSubmit={this.peticionesFormulario}>
        <label>Nombre: </label>
        <input type='text' ref={this.cajaNombre}></input>
        <button>Realizar peticion</button>
      </form>
      </div>
    )
  }
}

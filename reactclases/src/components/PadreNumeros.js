import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

class PadreNumeros extends Component {
  // Generamos los números directamente en el state con un FOR
  state = {
    numeros: (() => {
      const numerosAleatorios = [];
      for (let i = 0; i < 10; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;
        numerosAleatorios.push(numero);
      }
      return numerosAleatorios;
    })(),
    sumaTotal: 0
  };

  // Método para volver a generar números nuevos
  generarNumeros = () => {
    const numerosAleatorios = [];
    for (let i = 0; i < 10; i++) {
      const numero = Math.floor(Math.random() * 100) + 1;
      numerosAleatorios.push(numero);
    }
    this.setState({ numeros: numerosAleatorios, sumaTotal: 0 });
  };

  // Recibe un número desde el hijo y lo suma
  sumarNumeros = (numero) => {
    this.setState((prevState) => ({
      sumaTotal: prevState.sumaTotal + numero
    }));
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Padre de Números</h1>
        <button onClick={this.generarNumeros}>Generar nuevos números</button>
        <h3 style={{ backgroundColor: "yellow" }}>Suma total: {this.state.sumaTotal}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {
            this.state.numeros.map((numero, index) => (
              <HijoNumeros key={index} number={numero} sumarNumeros={this.sumarNumeros} />))
          }
        </div>
      </div>
    );
  }
}

export default PadreNumeros;

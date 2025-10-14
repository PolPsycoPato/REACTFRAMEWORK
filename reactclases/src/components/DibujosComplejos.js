import { Component } from "react";

class DibujosComplejos extends Component {
  // Método que genera números aleatorios y devuelve una lista <li>
  dibujarNumeros = () => {
    const lista = [];

    for (let i = 1; i <= 9; i++) {
      const numero = Math.floor(Math.random() * 100) + 1;
      lista.push(<li key={i}>{numero}</li>);
    }

    return lista;
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1 style={{ color: "red" }}>Dibujos dinámicos con React</h1>

        {/* Llamamos al método con paréntesis */}
        <ul style={{ listStyle: "none", fontSize: "20px" }}>
          {this.dibujarNumeros()}
        </ul>
      </div>
    );
  }
}

export default DibujosComplejos;

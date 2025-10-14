import React, { Component } from "react";

class Contador extends Component {
  // Variable de clase (no en el estado)
  numero = 3;

  // Ejemplo 1: Método de clase clásico
  incrementarNumero() {
    this.numero += 1;
    console.log("Valor de 'numero': " + this.numero);
  }

  // 🔹 Ejemplo 2: Método de clase con función flecha
  incrementarNumeroFlecha = () => {
    this.numero += 1;
    console.log("Valor de 'numero' (arrow): " + this.numero);
  };

  // Estado inicial
  state = {
    valor: parseInt(this.props.inicio)
  };

  // Ejemplo 3: Método que actualiza el estado con setState
  incrementarValor = () => {
    this.setState({
      valor: this.state.valor + 1
    });
  };

  // Render
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>🧮 Ejemplo Contador JSX</h1>

        {/* Muestra el valor del estado */}
        <h2 style={{ color: "lime" }}>
          Valor del estado: {this.state.valor}
        </h2>

        {/* Muestra la variable de clase */}
        <h2 style={{ color: "orange" }}>Número: {this.numero}</h2>

        {/* 1. Evento con función de clase declarada (debes hacer bind) */}
        <button onClick={this.incrementarNumero.bind(this)}>
          Incrementar (clásico)
        </button>

        {/* 2. Evento con función flecha (ya tiene el this correcto) */}
        <button onClick={this.incrementarNumeroFlecha}>
          Incrementar (flecha)
        </button>

        {/* 3. Evento con función lambda inline (definida dentro del onClick) */}
        <button
          onClick={() => {
            metodoAbsurdo();
            this.incrementarValor();
          }}
        >
          Incrementar (lambda inline)
        </button>
      </div>
    );
  }
}

// Función externa (fuera de la clase)
function metodoAbsurdo() {
  console.log("Método externo sin funcionalidad (ejemplo lambda)");
}

export default Contador;

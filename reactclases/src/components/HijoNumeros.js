import { Component } from "react";

class HijoNumeros extends Component {
  seleccionarNumeros = () => {
    const random = this.props.number;
    this.props.sumarNumeros(random);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Número: {this.props.number}</h1>
        <button onClick={this.seleccionarNumeros}>Sumar número {this.props.number}</button>
      </div>
    );
  }
}

export default HijoNumeros;

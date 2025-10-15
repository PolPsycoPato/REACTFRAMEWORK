import { Component } from "react";

class HijoNumeros extends Component {
  sumarNumeros = () => {
    const random = this.props.number;
    this.props.sumarNumeros(random);
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "gold" }}>Número: {this.props.number}</h1>
        <button onClick={this.sumarNumeros}>Sumar número {this.props.number}</button>
      </div>
    );
  }
}

export default HijoNumeros;

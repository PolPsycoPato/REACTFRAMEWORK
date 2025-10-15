import { Component } from "react";
import HijoDeportes from "./HijoDeportes"; // importa el componente hijo

class PadreDeportes extends Component {

  // lista de deportes
  deportes = [
    "Baloncesto",
    "Fútbol",
    "Karate",
    "Tennis",
    "Poker",
    "Skateboarding"
  ];
  state = { favorito: "" }
  seleccionarFavorito = (deporteSeleccionado) => {
    this.setState({ favorito: deporteSeleccionado })

  }
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Lista de Deportes</h1>
        <h4 style={{ color: "lightblue" }}>Su Deporte favorito es: {this.state.favorito} </h4>
        {this.deportes.map((deporte, index) => (
          <HijoDeportes key={index} nombre={deporte}
          seleccionarFavorito={this.seleccionarFavorito} />
        ))}
      </div>
    );
  }
}

export default PadreDeportes;

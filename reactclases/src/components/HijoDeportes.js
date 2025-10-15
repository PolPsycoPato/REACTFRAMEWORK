import { Component } from "react";

class HijoDeportes extends Component {
  state = {
    favorito: ""
  };

  seleccionarFavorito = () => {
   var deporte = this.props.nombre;
   this.props.seleccionarFavorito(deporte);
  };

  render() {
    return (
      <div>
        <h3 style={{ color: "gold" }}>Deporte: {this.props.nombre}</h3>
        
        <button onClick={this.seleccionarFavorito}>Seleccionar Favorito</button>
      </div>
    );
  }
}

export default HijoDeportes;

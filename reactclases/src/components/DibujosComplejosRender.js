import { Component } from "react";

class DibujosComplejosRender extends Component {
    // Estado inicial con un array de nombres
    state = {
        nombres: ["Ana", "Biancka", "Marta"]
    };

    // Método para generar un nuevo nombre aleatorio
    generarNombre = () => {
        const posibles = [
            "Alejandro",
            "Sergio",
            "Laura",
            "Ariana",
            "Miguel",
            "Clara",
            "Alberto",
            "Javi"
        ];
        const nombreNuevo =
            posibles[Math.floor(Math.random() * posibles.length)];

        // Añadimos el nuevo nombre al array (sin modificar directamente el estado)
        this.setState({
            nombres: [...this.state.nombres, nombreNuevo]
        });
    };

    render() {
        return (
            <div>
                <h1 style={{ color: "red" }}>Dibujos dinámicos con .map()</h1>
                <button onClick={this.generarNombre}>NEW NAME</button>
              
                <ul>
                    {this.state.nombres.map((nombre, index) => (
                        <h3 key={index} style={{ color: "lime" }}>
                            {nombre}
                        </h3>
                    ))}
                </ul>
            </div>
        );
    }
}

export default DibujosComplejosRender;

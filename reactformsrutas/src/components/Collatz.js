import React, { Component } from "react";

export default class Collatz extends Component {

    cajaNum = React.createRef();


    state = {
        numeros: []
    };


    generarCollatz = (event) => {
        event.preventDefault();

        let numero = parseInt(this.cajaNum.current.value);
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, introduce un número positivo.");
            return;
        }

        let aux = [];
        while (numero !== 1) {
            if (numero % 2 === 0) {
                numero = numero / 2;
            } else {
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }

        this.setState({
            numeros: aux
        });
    };

    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>

                <form onSubmit={this.generarCollatz}>
                    <label>Introduce un número: </label>
                    <input type="number" ref={this.cajaNum} />
                    <button>Generar</button>
                </form>

                <hr />

                <ul>
                    {this.state.numeros.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

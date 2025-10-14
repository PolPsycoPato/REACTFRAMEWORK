import { useState } from "react";

function Contador() {
    // 1️⃣ Declaramos la variable que deseamos dibujar en el Render y que sea modificada
    const [numero, setNumero] = useState(0);

    // Para cambiar el valor de una variable de estado se realiza con setVariable(NuevoValor)
    const incrementar = () => {
        setNumero(numero + 1);
    };

    const decrementar = () => {
        setNumero(numero - 1);
    };

    const reiniciar = () => {
        setNumero(0);
    };

    // 3️⃣ Dibujamos el componente
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>🧮 CONTADOR REACT</h1>
            <h2>:Valor {numero}</h2>

            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={reiniciar}>Reiniciar</button>
        </div>
    );
}

export default Contador;

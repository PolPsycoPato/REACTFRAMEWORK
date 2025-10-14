import React from 'react'

function DobleNumeros() {
    
    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble);

    }
    return (
        <div>
            <h1>Ejemplo metodos parametros</h1>
            <button onClick={() => DobleNumeros(6)}>Doble de 6</button>
        </div>
    )
}

export default DobleNumeros;
import React from 'react'

function SumarNumeros() {
    
    const suma = (num1, num2) => {
        var resutado = parseInt(num1) + parseInt(num2);
        console.log(resutado);

    }
    return (
        <div>
            <h1>Ejemplo metodos parametros II</h1>
            <button onClick={() => SumarNumerosNumeros(3,9)}>Sumar</button>
        </div>
    )
}

export default DobleNumeros;
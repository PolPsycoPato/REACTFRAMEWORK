function HijoMatematicas(props) {

    var numeroHijo = parseInt(props.idNumero);

    const duplicarNumeros = (numero) => {
        var doble = 2 * numero;
        console.log("Doble de " + numero + " = " + doble);
    }

    return (
        <div>
            <h1 style={{ color: "red" }}>
                WOW QUÉ MATEMÁTICAS
            </h1>
            <button onClick={() => { duplicarNumeros(numeroHijo) }}>
                Doble de {props.idNumero}
            </button>
            <button onClick={() => { props.triplicar(numeroHijo) }}>
                Triple de {props.idNumero}
            </button>
        </div>
    );
}

export default HijoMatematicas;

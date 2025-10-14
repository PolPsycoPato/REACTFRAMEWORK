import HijoMatematicas from "./HijoMatematicas";

function PadreMatematicas() {

    const triplicarNumeros = (valor) => {
        var triple = 3 * valor;
        console.log("Triple de " + valor + " = " + triple);
    }

    return (
        <div>
            <HijoMatematicas idNumero="6" triplicar={triplicarNumeros}></HijoMatematicas>
            <HijoMatematicas idNumero="1111" triplicar={triplicarNumeros}></HijoMatematicas>
        </div>
    );
}

export default PadreMatematicas;

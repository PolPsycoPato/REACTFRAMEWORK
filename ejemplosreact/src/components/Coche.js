import { useState } from "react";

function Coche(props) {
    // Estados
    const [estado, setEstado] = useState(false); // false = aparcado
    const [velocidad, setVelocidad] = useState(0);

    // Propiedades del coche
    const car = {
        marca: props.marca,
        modelo: props.modelo,
        velocidadMaxima: parseInt(props.velocidadMaxima),
        aceleracion: parseInt(props.aceleracion),
    };

    // Método para mostrar estado
    const comprobarEstado = () => {
        if (estado === true) {
            return <h2 style={{ color: "green" }}>Arrancado</h2>;
        } else {
            return <h2 style={{ color: "red" }}>Aparcado</h2>;
        }
    };

    // Método para acelerar
    const acelerar = () => {
        if (!estado) {
            alert("El coche está aparcado, no puede acelerar");
            setVelocidad(0);
        } else {
            if (velocidad >= car.velocidadMaxima) {
                alert("Has alcanzado la velocidad máxima!");
                setVelocidad(car.velocidadMaxima);
            } else {
                setVelocidad(velocidad + car.aceleracion);
            }
        }
    };

    // Render
    return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h1>
                Marca: {car.marca} | Modelo: {car.modelo}
            </h1>

            {comprobarEstado()}
            <h3>Velocidad actual: {velocidad} km/h</h3>

            <button
                onClick={() => {
                    setEstado(!estado);
                    if (estado) setVelocidad(0); // si aparca, velocidad 0
                }}
            >
                {estado ? "Aparcar" : "Arrancar"}
            </button>

            {/* Botón para acelerar */}
            <button onClick={acelerar} disabled={!estado}>
                Acelerar +{car.aceleracion}
            </button>
        </div>
    );
}

export default Coche;

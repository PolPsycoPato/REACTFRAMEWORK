function Metodos() {
    //Creamos un metodo para utilizarlo en un boton
    const mostrarMensaje = () => {

        console.log("Boton pulsado...");
    }

    var mensaje = "Por la porra primooo";
    const cambiarMensaje = () => {
        console.log("Mensaje antes: " + mensaje);

        mensaje = "POR LA PUTA PORRA PRIMOOO!";
        console.log("Mensaje cambiado: " + mensaje);
    }


    return (<div>
        <h1>{mensaje}</h1>
        <button onClick={() => mostrarMensaje()}>Pulsar para cosas...</button>
        <button onClick={() => cambiarMensaje()}>Pulsar para cosas...</button>
    </div>);
}

export default Metodos;
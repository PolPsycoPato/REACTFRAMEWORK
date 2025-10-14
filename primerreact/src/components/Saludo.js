function Saludo(props) {
    //Este codigo es JS, podemos declarar variables sin problemas
    var mensaje = "UN DOS TRES CUATRO CINCO SEIS SIETE OCHO PAMPAPAPAMPAMPAPAPAPAPAMPAM";
    const { nombre, edad } = props;

    return (<div>
        <h1>Mi primer react, happy hacking</h1>
        <h2>Como dice CLOUDY {mensaje}</h2>
        <h3>Me llaman {nombre}</h3>
        <h4>tengo {edad} años</h4>
       

    </div>);

}
export default Saludo;
function SaludoHijo(props){
    //NECESITO "ALGO", UN NOMBRE DE VARIABLE
    //PARA LLAMAR AL METODO DEL PARENT
    var ejecutarPadre = props.metodoPadre;
    return (<div>
        <h2 style={{color:"blue"}}>
            Soy un hijo
        </h2>
        <button onClick={ () => {ejecutarPadre("Este es el mensaje del soon " + props.idHijo) }}>
            Llamar al Parent
        </button>
    </div>)
}

export default SaludoHijo;
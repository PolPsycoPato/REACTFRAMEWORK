import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    const metodoPadre = (mensajeHijo) => {
        console.log("Ejecutando método en PARENT mas " + mensajeHijo);
    }
    return (<div>
        <h1 style={{color:"red"}}>
            Saludo Padre
        </h1>
        {/* DESDE PROPS ENVIAREMOS EL METODO AL HIJO PARA QUE PUEDA 
        LLAMARLO */}
        <SaludoHijo idHijo="1" metodoPadre={metodoPadre}/>
       
        <SaludoHijo idHijo="3"  metodoPadre={metodoPadre}/>
    </div>)
}

export default SaludoPadre;
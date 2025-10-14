import batman from './../assets/images/batman.jpg';
import './SumarNumeros.css'

function SumarNumeros(props) {
    const realizarSuma = (num1, num2) => {
        //let suma = num1 + num2;
        let suma = parseInt(props.numero1) + 
        parseInt(props.numero2);
        console.log("La suma de " + num1 + " + "
            + num2 + "=" + suma);
    }
    return (<div>
        <h1>Sumar números</h1>
        <button onClick={ () => realizarSuma(5, 8)}>
            Sumar 5 + 8 
        </button>
        <button onClick={ () => realizarSuma(7, 7)}>
            Sumar 7 + 7
        </button>
        <img src={batman} className='imagen'/>
    </div>)
}

export default SumarNumeros;
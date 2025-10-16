import axios from "axios";
import React, { Component } from "react";

export default class ServicioApiSuppliers extends Component {
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers";

    cajaId = React.createRef();

    state = {
        suppliers: [],
        supplierEncontrado: null
    };


    loadSuppliers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then((response) => {
            console.log("Leyendo servicio");
            this.setState({ suppliers: response.data.value });
        });
        console.log("Termina el servicio");
    };

    componentDidMount = () => {
        console.log("Creando Componente");
        this.loadSuppliers();
    };


    buscarSupplier = (event) => {
        event.preventDefault();
        const idBuscado = parseInt(this.cajaId.current.value);

        const encontrado = this.state.suppliers.find(
            (sup) => sup.SupplierID === idBuscado
        );

        this.setState({ supplierEncontrado: encontrado });
    };

    render() {
        return (
            <div>
                <h1>Servicio API Suppliers</h1>

                <form onSubmit={this.buscarSupplier}>
                    <label>Busca un Supplier por ID: </label>
                    <input type="number" ref={this.cajaId} />
                    <button>Buscar</button>
                </form>

                <hr />

                {this.state.supplierEncontrado ? (
                    <div>
                        <h3>Resultado encontrado:</h3>
                        <p><strong>Nombre:</strong> {this.state.supplierEncontrado.CompanyName}</p>
                        <p><strong>Contacto:</strong> {this.state.supplierEncontrado.ContactName}</p>
                        <p><strong>Ciudad:</strong> {this.state.supplierEncontrado.City}</p>
                    </div>
                ) : (
                    <p>No se ha buscado ningún Supplier o no existe.</p>
                )}
            </div>
        );
    }
}

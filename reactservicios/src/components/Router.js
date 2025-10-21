import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home";
import ServicioApiSuppliers from "./ServicioApiSuppliers";
import ServicioApiCustomers from "./ServicioApiCustomers";
import EmpleadosDepartamento from "./EmpleadosDepartamento";
import ExpleadosOficios from "./ExpleadosOficios";
import Collatz from "./Collatz"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <h1 style={{color:"red"}}>Soy estatico</h1>
            <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicioapisuppliers" element={<ServicioApiSuppliers />} />
                    <Route path="/servicioapicustomers" element={<ServicioApiCustomers />} />
                    <Route path="/empleadosdepartamento" element={<EmpleadosDepartamento />} />
                    <Route path="/expleadosoficios" element={<ExpleadosOficios />} />
                    <Route path="/collatz" element={<Collatz />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
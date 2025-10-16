import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home";
import Music from "./Music";
import Cine from "./Cine";
import Form from "./Form";
import Collatz from "./Collatz"

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cine" element={<Cine />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/collatz" element={<Collatz />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import MenuHospitales from './components/MenuHospitales';
import Doctores from './components/Doctores';
import DetallesDoctor from './components/DetallesDoctor';
import CreateHospital from './components/CreateHospital';
import Hospitales from './components/Hospitales';

function DoctoresElement() {
  const { idhospital } = useParams();
  return <Doctores idhospital={idhospital} />;
}

function DoctorElement() {
  const { id } = useParams();
  return <DetallesDoctor iddoctor={id} />;
}

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuHospitales />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/create-hospital/:id?' element={<CreateHospital />} />
          <Route path="/doctores" element={<Doctores />} />
          <Route path="/doctores/:idhospital" element={<DoctoresElement />} />
          <Route path="/doctor/:id" element={<DoctorElement />} />
          <Route path='/hospitales' element={<Hospitales />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

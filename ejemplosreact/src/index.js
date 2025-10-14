import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import SumarNumeros from './components/SumarNumeros';
import SaludoPadre from './components/SaludoPadre';
import PadreMatematicas from './components/PadreMatematicas'; 
import Coche from './components/Coche';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Coche marca="Audi" modelo="R8" velocidadMaxima="330" aceleracion="100"/>
    <Coche marca="Honda" modelo="Civic" velocidadMaxima="180" aceleracion="20"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

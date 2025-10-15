import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <h1>INDEX PRINCIPAL</h1>
    <hr></hr>
    <Router />
    <hr></hr>
    <h2>PIE DE PÁGINA</h2>
  </React.StrictMode>
);

reportWebVitals();

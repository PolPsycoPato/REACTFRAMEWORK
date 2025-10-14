import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DibujosComplejos from './components/DibujosComplejos'
import DibujosComplejosRender from './components/DibujosComplejosRender';
import PadreDeportes from './components/PadreDeportes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <PadreDeportes />
  </React.StrictMode>
);

reportWebVitals();

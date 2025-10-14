import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DibujosComplejos from './components/DibujosComplejos'
import DibujosComplejosRender from './components/DibujosComplejosRender';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DibujosComplejosRender/>
  </React.StrictMode>
);

reportWebVitals();

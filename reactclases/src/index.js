import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DibujosComplejos from './components/DibujosComplejos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DibujosComplejos/>
  </React.StrictMode>
);

reportWebVitals();

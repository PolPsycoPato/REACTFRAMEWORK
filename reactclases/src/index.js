import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PadreNumeros from './components/PadreNumeros';
import Comics from './components/Comics';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PadreNumeros/>
  <Comics/>

  </React.StrictMode>
);

reportWebVitals();

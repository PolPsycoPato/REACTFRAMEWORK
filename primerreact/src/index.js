import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludo from "./components/Saludo";
import Metodos from './components/Metodos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Saludo nombre="POLPSYCOPATO" edad="26"/>
    <Metodos/>
    
  </React.StrictMode>
);

reportWebVitals();

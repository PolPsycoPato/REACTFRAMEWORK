import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MenuHospitales from './components/MenuHospitales';
import Home from './components/Home';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router/>
);
reportWebVitals();

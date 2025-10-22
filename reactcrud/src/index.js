import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from './components/Home';
import Update from './components/Update';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <Router/>
    </div>
);

reportWebVitals();

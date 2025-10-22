import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";   
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Update from './components/Update';
import Delete from './components/Delete';

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/update/:id' element={<Update />} />
      <Route path='/delete/:id' element={<Delete />} />
    </Routes>
  </Router>
);

reportWebVitals();

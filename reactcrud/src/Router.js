import { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id/:dnombre/:loc" element={<Update />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

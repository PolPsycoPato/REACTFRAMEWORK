import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <div>Menu</div>
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./cine">Cine</a></li>
            <li><a href="./music">Music</a></li>
            <li><a href="./form">Form</a></li>
            <li><a href="./collatz">Collatz</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
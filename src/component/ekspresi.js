import React, { Component } from 'react';

const nama = "Alek Permana";
const lahir = "Purwakarta"
const gender = "Laki-laki"

export default class App extends Component {
  render = () => (
    <div>
      <h2>Nama saya : {nama}</h2>
      <h2>saya lahir di : {lahir}</h2>
      <h2>Gender : {gender}</h2>
    </div>
  );
}
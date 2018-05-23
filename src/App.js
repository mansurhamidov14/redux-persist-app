import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserAddForm from './components/UserAddForm';
import Users from './components/users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserAddForm/>
        <Users/>
      </div>
    );
  }
}

export default App;

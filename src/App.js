import React, { Component } from 'react';
import UnicornList from './components/UnicornList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UnicornList />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import UnicornList from './components/UnicornList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h2>Unicorn Rancher</h2>
        </header>
        <UnicornList />
      </div>
    );
  }
}

export default App;

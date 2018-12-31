import React, { Component } from 'react';
import UnicornList from './components/UnicornList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2>Unicorn Rancher</h2>
        </header>
        <UnicornList />
      </div>
    );
  }
}

export default App;

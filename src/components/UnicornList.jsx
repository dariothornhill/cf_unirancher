import React, { Component } from 'react';
import Unicorn from './Unicorn';

export default class UnicornList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicorns: [
        {
          id: 1,
          name: 'sparkly2',
          food: 'apples',
          photo: 'http://',
          location: 'Barn'
        }
      ]
    };
  }

  ComponentDidMount() {
    console.log('wm');
    fetch('http://localhost:8000/unicorns', {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(data => {
        // TODO add error handling here
        console.log(data);
        this.setState({ unicorns: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <ul>
        {this.state.unicorns.map(u => {
          return (
            <li>
              <Unicorn unicorn={u} key={u.id} />
            </li>
          );
        })}
      </ul>
    );
  }
}

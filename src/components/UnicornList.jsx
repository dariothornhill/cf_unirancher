import React, { Component } from 'react';
import Unicorn from './Unicorn';

export default class UnicornList extends Component {
  constructor(props) {
    super(props);
    //Add an empty array for storing our unicorns
    this.state = {
      unicorns: []
    };
  }

  componentDidMount() {
    // fetch our list of unicorns
    const options = {
      // mode: 'cors' // cross origin
    };

    fetch('http://localhost:8000/unicorns', options)
      .then(async response => {
        const data = await response.json();
        this.setState({ unicorns: data });
      })
      .catch(error => {
        console.log({ error });
      });
  }

  render() {
    // Check if we have no unicorns then ...
    return this.state.unicorns.length > 0 ? (
      // Show a list of unicorns
      <ul>
        {this.state.unicorns.map(u => {
          return (
            <li>
              <Unicorn unicorn={u} key={u.id} />
            </li>
          );
        })}
      </ul>
    ) : (
      // Show a notice explaining that they are no unicorns
      <p>Looks like you don't have any unicorns!</p>
    );
  }
}

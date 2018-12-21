import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class Unicorn extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  handleUpdate() {
    fetch(`http://localhost:8000/unicorns/${this.props.unicorn.id}`, {
      method: 'put',
      body: { location: this.state.location },
      headers: {
        'Content-type': 'application/json'
      }
    }).then(data => {
      // TODO add error handling here
      this.setState({ unicorns: data });
    });
  }

  render() {
    return (
      <Card>
        <CardImg width="25%" src={this.state.unicorn.photo} />
        <CardTitle>Name: {this.state.unicorn.name} </CardTitle>
        <CardText>Location: {this.state.unicorn.location}</CardText>
        <CardSubtitle>Time: {this.state.unicorn.time} </CardSubtitle>
        <CardBody>Food: {this.state.unicorn.food}</CardBody>
      </Card>
    );
  }
}

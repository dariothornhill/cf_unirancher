import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Form, FormGroup, Label, Input } from 'reactstrap';

const portraitStyle = {
  width: '64px'
};

export default class Unicorn extends Component {
  constructor(props) {
    super(props);
    //map our unicorn from prop to state
    this.state = {
      unicorn: this.props.unicorn
    };
    console.log(this.state.unicorn.location);
    //bind the class context 'this' to class methods
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    e.preventDefault();
    // create a new unicorn object
    const newUnicorn = { ...this.state.unicorn, location: e.target.value, time: new Date().toISOString() };

    //update the location on the backend
    fetch(`http://localhost:8000/unicorns/${this.props.unicorn.id}`, {
      method: 'put',
      body: JSON.stringify(newUnicorn),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        // refresh the UI if the backend was successful
        this.setState({ unicorn: newUnicorn });
      })
      .catch(error => {
        // log error
        console.log({ error });
      });
  }

  render() {
    return (
      <Card>
        <CardImg top style={portraitStyle} src={this.state.unicorn.photo} />
        <CardTitle>Name: {this.state.unicorn.name} </CardTitle>

        <Form>
          <FormGroup>
            <CardText>Location: {this.state.unicorn.location}</CardText>
            <Label for="updateLocation">Update</Label>
            <Input name="updateLocation" type="select" value={this.state.unicorn.location} onChange={this.handleUpdate}>
              <option value="Barn">Barn</option>
              <option value="Windmill">Windmill</option>
              <option value="Infirmary">Infirmary</option>
              <option value="Pasture">Pasture</option>
            </Input>
          </FormGroup>
        </Form>
        <CardSubtitle>Time: {this.state.unicorn.time} </CardSubtitle>
        <CardBody>Food: {this.state.unicorn.food}</CardBody>
      </Card>
    );
  }
}

import React, { Component } from 'react';
import { Card, CardImg, Col, CardText, CardTitle, CardSubtitle, Form, FormGroup, Label, Input } from 'reactstrap';

import './Unicorn.css';

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
    this.humanTime = this.humanTime.bind(this);
  }
  humanTime(iso8601) {
    //TODO guard against junk data and fail gracefully
    const time = new Date(iso8601);
    const humanizedTime = time.toLocaleTimeString();
    return humanizedTime;
  }

  humanDate(iso8601) {
    //TODO guard against junk data and fail gracefully
    const time = new Date(iso8601);
    const humanizedTime = time.toLocaleDateString();
    return humanizedTime;
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
      <Col xs="12" sm="6" md="4" lg="3">
        <Card className="unicorn-card">
          <CardTitle>{this.state.unicorn.name} </CardTitle>
          <CardImg top width="100%" className="unicorn-photo" src={this.state.unicorn.photo} />
          <CardText>Food: {this.state.unicorn.food}</CardText>
          <CardText>Location: {this.state.unicorn.location}</CardText>
          <Form>
            <FormGroup row>
              <Label for="updateLocation" sm={4}>
                Update
              </Label>
              <Col sm={6}>
                <Input
                  name="updateLocation"
                  type="select"
                  value={this.state.unicorn.location}
                  onChange={this.handleUpdate}>
                  <option value="Barn">Barn</option>
                  <option value="Windmill">Windmill</option>
                  <option value="Infirmary">Infirmary</option>
                  <option value="Pasture">Pasture</option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
          <CardText>Date: {this.humanDate(this.state.unicorn.time)} </CardText>
          <CardText>Time: {this.humanTime(this.state.unicorn.time)} </CardText>
        </Card>
      </Col>
    );
  }
}

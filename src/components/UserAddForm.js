import React, {Component} from 'react';
import { connect } from 'react-redux';

import {addUser} from '../actions';

class UserAddForm extends Component {
  constructor (props) {
    super(props);
  }

  submitForm() {
    let payload = {
      name: this.name.value,
      lastname: this.lastname.value,
      phone: this.phone.value,
      age: this.age.value
    }
    this.props.dispatch(addUser(payload));
    this.name.value = null;
    this.lastname.value = null;
    this.phone.value = null;
    this.age.value = null;
  }

  render () {
    return (
      <div>
        <input type="text" ref={node => this.name = node} placeholder="Name"/><br/>
        <input type="text" ref={node => this.lastname = node} placeholder="Lastname"/><br/>
        <input type="text" ref={node => this.phone = node} placeholder="Phone"/><br/>
        <input type="text" ref={node => this.age = node} placeholder="Age"/><br/>
        <button type="button" onClick={this.submitForm.bind(this)}>Add user</button>
      </div>
    )
  }
}

export default connect()(UserAddForm);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Validator } from 'ree-validate'

import LoginForm from './LoginForm';



import {Panel} from 'react-bootstrap';


class Login extends Component {
constructor(props){
    super(props)

    this.validator = new Validator({
      email: 'required|email',
      password: 'required|min:6'
    })

    // set the state of the app
    this.state = {
      credentials: {
        email: '',
        password: '',
      },
      errors: this.validator.errors
    }

    // bind component with event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
 }

 handleChange(name, value) {
   const credentials = { ...this.state.credentials, [name]: value }
   const { errors } = this.validator

   errors.remove(name)

   this.validator.validate(name, value)
     .then(() => {
       this.setState({ errors, credentials })
     })
 }

 // event to handle form submit
 handleSubmit(e) {
   e.preventDefault()
   const { credentials } = this.state
   const { errors } = this.validator

   this.validator.validateAll(credentials)
     .then((success) => {
       if (success) {
         this.submit(credentials)
       } else {
         this.setState({ errors })
       }
     })
 }

submit(formData) {
    console.log(formData)
}


render() {
    const props = {
        email: this.state.credentials.email,
        password: this.state.credentials.password,
        remember: this.state.credentials.remember,
        errors: this.state.errors,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
    }

    return (
        <div className="Login col-md-offset-4 col-md-4">
            <Panel header="Login" bsStyle="primary">
              <LoginForm {...props} />
            </Panel>
        </div>
    );}
}


export default Login;

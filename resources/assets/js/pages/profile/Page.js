import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { login } from '../../store/services/auth'
import { Validator } from 'ree-validate'
import LoginForm from './components/LoginForm';

import {Panel} from 'react-bootstrap';

class Page extends Component {
    static displayName : 'LoginPage'

    // validate props
    static propTypes : {
      isAuthenticated: PropTypes.bool.isRequired,
      dispatch: PropTypes.func.isRequired
    }

constructor(props){
    super(props)

    this.validator = new Validator({
        email: 'required|email',
        password: '|min:6',
    });

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
    this.validator.validate(name, value).then(() => {
       this.setState({ errors, credentials })
    });
 }

 // event to handle form submit
handleSubmit(e) {
    e.preventDefault();
    const { credentials } = this.state;
    const { errors } = this.validator;

    this.validator.validateAll(credentials).then((success) => {
        if (success) {
            this.submit(credentials)
        } else {
            this.setState({ errors })
        }
    });
 }

submit(credentials) {
    this.props.dispatch(login(credentials)).catch(({
        error, statusCode }) => {
            const { errors } = this.validator

            if (statusCode === 422) {
                _.forOwn(error, (message, field) => {
                    errors.add(field, message);
                });
            } else if (statusCode === 401) {
                errors.add('password', error);
            }

            this.setState({ errors })
        })
    }

render() {

    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />
    }

    const props = {
        email: this.state.credentials.email,
        password: this.state.credentials.password,
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
    );
}
}

export default Page;

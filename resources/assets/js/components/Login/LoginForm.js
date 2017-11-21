import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Panel,Form, FormGroup, FormControl,HelpBlock} from 'react-bootstrap';


const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const LoginForm = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  <Form className="form horizontal" onSubmit={handleSubmit} noValidate>
    <FormGroup controlId="formHorizontalEmail" validationState={errors.has('email') ? "error": null}>
        <FormControl type="text"
            className={`form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
            name="email"
            placeholder="Email address"
            value={email || ''}
            onChange={e => handleChange(e.target.name, e.target.value)}
            required
            autoFocus/>
            {errors.has('email') && <HelpBlock>{errors.first('email')}</HelpBlock>}
    </FormGroup>
    <FormGroup controlId="formHorizontalPassword" validationState={errors.has('password') ? "error": null}>
        <FormControl type="password"
            className={`form-control form-control-lg rounded-0 ${errors.has('password') && 'is-invalid'}`}
            name="password"
            placeholder="Password"
            value={password || ''}
            onChange={e => handleChange(e.target.name, e.target.value)}
            required/>
            {errors.has('password') && <HelpBlock>{errors.first('password')}</HelpBlock>}
    </FormGroup>
        <button className="btn btn-primary btn-block" type="submit" disabled={errors.any()}>Sign In</button>
        <p>Not a member? <Link to='/register'>Signup here</Link></p>
  </Form>
)

LoginForm.displayName = displayName
LoginForm.propTypes = propTypes

export default LoginForm

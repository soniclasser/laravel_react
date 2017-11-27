import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'react-bootstrap';

const propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.any,
}

const contextTypes = {
  router: PropTypes.object,
}

const Link = ({ path, children }) => {
  return <NavItem>
    <NavLink exact to={path} >
      {children}
    </NavLink>
  </NavItem>
}

Link.propTypes = propTypes
Link.contextTypes = contextTypes

export default Link

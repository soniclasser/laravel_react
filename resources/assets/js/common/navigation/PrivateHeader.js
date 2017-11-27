// import libs
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import components
import { Navbar, Nav,NavDropdown, MenuItem} from 'react-bootstrap';
import NavItem from './NavItem'

// define component name
const displayName = 'PrivateHeader'

// validate properties
const propTypes = {
  user: PropTypes.object.isRequired,
  showNavigation: PropTypes.bool.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

// initiate comppnent
const PrivateHeader = ({ user, showNavigation, showDropdown, toggleDropdown, logout }) => (
    <Navbar.Collapse>
        <Nav pullRight>
        <NavDropdown eventKey={3} title={user.name} id="basic-nav-dropdown">
            <MenuItem eventKey={3.3} onClick={e => logout(e)}>Logout</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Setup</MenuItem>
        </NavDropdown>
        </Nav>
      </Navbar.Collapse>)

// bind properties
PrivateHeader.displayName = displayName
PrivateHeader.propTypes = propTypes

// export component
export default PrivateHeader

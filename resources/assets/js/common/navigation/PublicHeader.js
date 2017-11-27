// import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
//import { Collapse } from 'reactstrap'
import NavItem from './NavItem'

import { Navbar, Nav,NavDropdown, MenuItem} from 'react-bootstrap';

// define component name
const displayName = 'PublicHeader'

// validate properties
const propTypes = {
  showNavigation: PropTypes.bool.isRequired,
}

// initiate comppnent
const PublicHeader = ({ showNavigation }) => (

    <Navbar.Collapse>
        <Nav pullRight>
            <NavItem path="/">Login</NavItem>
        </Nav>
    </Navbar.Collapse>)

// bind properties
PublicHeader.displayName = displayName
PublicHeader.propTypes = propTypes

// export component
export default PublicHeader

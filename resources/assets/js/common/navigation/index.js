// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../store/services/auth'

// import components
import { Link } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap';

import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'

class Navigation extends Component {
  static propTypes : {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      showNavigation: false,
      showDropdown: false,
    }

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleNavbar() {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }

  toggleDropdown() {
    this.setState({
      showDropdown: !this.state.showDropdown,
    })
  }

  logout(e) {
    e.preventDefault()

    this.props.dispatch(logout())
  }

  render() {
    return (
        <Navbar inverse collapseOnSelect>
         <Navbar.Header>
            <Navbar.Brand>
             {
                 this.props.isAuthenticated ?  <Link to="/home" className="navbar-brand">Home</Link>: ""
             }
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        {
          this.props.isAuthenticated
            ? <PrivateHeader user={this.props.user}
                             showNavigation={this.state.showNavigation}
                             toggleDropdown={this.toggleDropdown}
                             showDropdown={this.state.showDropdown}
                             logout={this.logout} />
            : ""
        }
        </Navbar.Collapse>
        </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)

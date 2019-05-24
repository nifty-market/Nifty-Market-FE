import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

import { logout } from '../actions'


class NavBar extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      // loggedIn: false
    };
  }

  toggle() {
    this.setState({
    	...this.state,
      isOpen: !this.state.isOpen
    });
  }

  logout = e => {
  	e.preventDefault();
  	this.props.logout()
  }

	render() {
		return(
			<div className="nav-bar">
        <Navbar dark expand="md">
          <NavbarBrand href="/">Nifty Market</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            	<NavItem>
                <Link className='nav-link' to='/Market' >Market</Link>
              </NavItem>

              {this.props.loggedIn && 
              <NavItem>
                <Link className='nav-link' to='/Dashboard' >Dashboard</Link>
              </NavItem>}
              
              {!this.props.loggedIn && 
              <NavItem>
                <Link className='nav-link' to='/' >Log In/Register</Link>
              </NavItem>}
              <UncontrolledDropdown nav inNavbar>
                {this.props.loggedIn && 
                <DropdownToggle nav>
                	<div>
                  	<span className="welcome-msg" >Welcome, {
                  		this.props.username.charAt(0).toUpperCase() + this.props.username.slice(1)
                  	}</span>
                  	<i className="fas fa-user-astronaut fa-2x" />
                  </div>
                </DropdownToggle>}
                <DropdownMenu right>
                  <DropdownItem>
                    
                  </DropdownItem>
                  <DropdownItem divider /> 
                  <DropdownItem onClick={this.logout} >
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
		);
	}
}

const mapStateToProps = ({ loggedIn, username }) => ({
	loggedIn,
	username
});

export default connect(mapStateToProps, { logout })(NavBar);
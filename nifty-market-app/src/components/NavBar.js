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
  DropdownItem } from 'reactstrap';


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

  preventDefault = e => {
  	e.preventDefault();
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
                <NavLink href='/market'>Market</NavLink>
              </NavItem>
              {!this.props.loggedIn && 
              <NavItem>
                <NavLink href="/LoginPage">Log In/Register</NavLink>
              </NavItem>}
              <UncontrolledDropdown nav inNavbar>
                {this.props.loggedIn && 
                <DropdownToggle nav>
                	<div>
                  	<i className="fas fa-user-astronaut fa-2x" />
                  	<span className="welcome-msg" >Welcome, User</span>
                  </div>
                </DropdownToggle>}
                <DropdownMenu right>
                  <DropdownItem>
                    My Items
                  </DropdownItem>
                  <DropdownItem>
                    Wishlist
                  </DropdownItem>
                  <DropdownItem>
                    Transaction History
                  </DropdownItem>
                  <DropdownItem divider /> 
                  <DropdownItem >
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

const mapStateToProps = ({ loggedIn }) => ({
	loggedIn
});

export default connect(mapStateToProps, {})(NavBar);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderManagerLinks() {
    return [
      <NavItem key={'addSem'}>
        <NavLink tag={Link} to={'/dashboard/sem/add'}>
          Add SEM
        </NavLink>
      </NavItem>,
      <NavItem key={'addIc'}>
        <NavLink tag={Link} to={'/dashboard/ic/add'}>
          Add IC
        </NavLink>
      </NavItem>
    ];
  }

  renderLinks() {
    let output = '';
    switch (this.props.auth) {
      case null:
        break;
      case false:
        output = (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={'/auth/google'}>Login With Google</NavLink>
            </NavItem>
          </Nav>
        );
        break;
      default:
        output = (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to={'/dashboard'}>
                My Dashboard
              </NavLink>
            </NavItem>
            {this.props.auth.role === 'manager' ? this.renderManagerLinks() : null}
            <NavItem>
              <NavLink href={'/auth/logout'}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
        break;
    }
    return output;
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Aurea Bootcamp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.renderLinks()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

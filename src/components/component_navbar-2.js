import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { CSSTransitionGroup } from 'react-transition-group'
import '../style/navbar2.css';

// import Nav from 'react-bootstrap/lib/Nav'
// import NavItem from 'react-bootstrap/lib/NavItem'
// import NavDropdown from 'react-bootstrap/lib/NavDropdown'




class Navbar2 extends Component {
	render() {
		return(
			<div>
			<Navbar inverse collapseOnSelect fixedTop>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div id="banner-container">
			  <CSSTransitionGroup
		      transitionName="example"
		      transitionAppear={true}
		      transitionAppearTimeout={1000}
		      transitionEnter={false}
		      transitionLeave={false}>
					<img id="banner" src="images/tavius-logo-smaller-blue.png" alt="tavius.org banner"/>
				</CSSTransitionGroup>
				</div>
	    </div>
)
}
}
export default Navbar2;
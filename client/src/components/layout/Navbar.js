import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { Icon } from 'antd';
import './style/Navbar.css';

// custom tumblr Icon
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_862540_ekbd0ks4ksa.js'
});

class FixedNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <img
                  id="logo"
                  src="images/nav-logo.png"
                  alt="tavius.org banner"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem className="button" eventKey={1} href="#home">
                Home
              </NavItem>
              <NavItem className="button" eventKey={2} href="#music">
                Music
              </NavItem>
              <NavItem className="button" eventKey={3} href="#blog">
                Blog
              </NavItem>
              <NavItem className="button" eventKey={4} href="#merch">
                Merch
              </NavItem>
              <NavItem className="button" eventKey={5} href="#">
                Contact
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem
                eventKey={1}
                target="blank"
                href="https://www.facebook.com/tavius?fref=search&__tn__=%2Cd%2CP-R&eid=ARDPs2YfFx0ZUHhMAQAZ6QOoAidyvIJyEFgyu44DBBz_volC9Nh5mGXW5aJWdyh951CsmMKIjwnCi5l9"
              >
                <Icon type="facebook" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={2}
                target="blank"
                href="https://www.instagram.com/tavius_dyer/?hl=en"
              >
                <Icon type="instagram" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={3}
                target="blank"
                href="https://twitter.com/taviusdyer"
              >
                <Icon type="twitter" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={4}
                target="blank"
                href="https://www.youtube.com/channel/UC279oRJBWZMDPoAeET7RBqg"
              >
                <Icon type="youtube" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={5}
                target="blank"
                href="https://taviusdotorg.tumblr.com/"
              >
                <IconFont type="icon-tumblr" theme="outlined" />
              </NavItem>
              <NavItem
                eventKey={6}
                target="blank"
                href="https://www.amazon.com/Tavius-Dyer/e/B07B2M344X"
              >
                <Icon type="amazon" theme="outlined" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default FixedNavbar;

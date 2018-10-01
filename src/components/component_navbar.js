import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import '../style/navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends Component {
	  state = {
    current: 'home',
  }
	handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
    	<div className="nav-bar">
	      <Menu
	        onClick={this.handleClick}
	        selectedKeys={[this.state.current]}
	        mode="horizontal"
	      >
	        <Menu.Item key="home">
	          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Home</a>
	        </Menu.Item>
	        <Menu.Item key="about">
	          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Music</a>
	        </Menu.Item>
	        <Menu.Item key="blog">
	          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Blog</a>
	        </Menu.Item>
	        <Menu.Item key="merch">
	          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Merch</a>
	        </Menu.Item>
	      </Menu>
	    </div>
    );
  }
}

export default Navbar;
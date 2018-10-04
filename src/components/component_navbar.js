import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import '../style/banner.css';
import '../style/navbar.css';



const { Header } = Layout;

class Navbar extends Component {
	render() {
		return(
			<div>
				<Layout className="layout">
			    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
			      <div className="logo" />
			      <Menu
			        theme="dark"
			        mode="horizontal"
			        defaultSelectedKeys={['1']}
			        style={{ lineHeight: '64px' }}
			      >
			        <Menu.Item key="1">Home</Menu.Item>
			        <Menu.Item key="2">Blog</Menu.Item>
			        <Menu.Item key="3">Music</Menu.Item>
			        <Menu.Item key="4">Merch</Menu.Item>
			        <Menu.Item key="5">Contact</Menu.Item>
			      </Menu>
			    </Header>
			  </Layout>
	    	<div id="banner-container">
					<img id="banner" src="images/tavius-logo-smaller-blue.png" alt="tavius.org banner"/>
				</div>
	    </div>
		)
	}

	  
}

export default Navbar;
	      	
	      
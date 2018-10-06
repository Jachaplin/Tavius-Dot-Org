import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Icon } from 'antd';
import '../style/banner.css';
import '../style/navbar.css';


const { Header } = Layout;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

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
			        <a target="blank" href="https://www.facebook.com/tavius"><Icon type="facebook" theme="outlined" /></a>
			        <a><Icon type="instagram" theme="outlined" /></a>
			        <a><Icon type="twitter" theme="outlined" /></a>
			        <a><Icon type="youtube" theme="outlined" /></a>
			        
			        <a><Icon type="amazon" theme="outlined" /></a>

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
	      	
	      

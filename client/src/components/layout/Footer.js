import React, { Component } from 'react';
import { Layout } from 'antd';
import './style/Footer.css';

const { Footer } = Layout;

class FooterLinks extends Component {
	render() {
		return (
			<Layout id="footer" className="layout">
				<Footer style={{ textAlign: 'center' }}>
					Copyright &copy; {new Date().getFullYear()} Tavius Dot Org
				</Footer>
			</Layout>
		);
	}
}

export default FooterLinks;

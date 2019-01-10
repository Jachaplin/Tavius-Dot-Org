import React, { Component } from 'react';

import './style/Footer.css';

class FooterLinks extends Component {
	render() {
		return (
			<div id="footer" className="layout">
				<div style={{ textAlign: 'center' }}>
					Copyright &copy; {new Date().getFullYear()} Tavius Dot Org
				</div>
			</div>
		);
	}
}

export default FooterLinks;

import React, { Component } from 'react';
import { Layout } from 'antd'
import '../style/footer.css';

const { Footer } = Layout

class FooterLinks extends Component {
	render() {
		return(
			<Layout id="footer" className="layout">
		    <Footer style={{ textAlign: 'center' }}>
      tavius.org ©2018
    		</Footer>
		  </Layout>
		)
	}
} 

export default FooterLinks;
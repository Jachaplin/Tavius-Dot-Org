import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="subscribe-container">
				<h1 style={{ height: '500px', marginTop: '60px', textAlign: 'center' }}>
					What's up? I'm here for you!
				</h1>
			</div>
		);
	}
}

export default connect()(withRouter(ContactPage));

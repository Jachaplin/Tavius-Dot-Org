import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { newSubscriber } from '../../actions/subscActions';

class Subscribe extends Component {
	render() {
		return (
			<div id="subscribe-container">
				<h1 style={{ height: '500px', marginTop: '60px', textAlign: 'center' }}>
					Hello
				</h1>
			</div>
		);
	}
}

export default connect()(withRouter(Subscribe));

import React, { Component } from 'react';
import Merch from '../../merch/Merch';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class StorePage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<Merch />
			</div>
		);
	}
}

export default connect()(withRouter(StorePage));

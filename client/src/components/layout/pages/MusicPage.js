import React, { Component } from 'react';
import Music from '../../music/Music';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MusicPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<Music />
			</div>
		);
	}
}

export default connect()(withRouter(MusicPage));

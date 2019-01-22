import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Music from '../../music/Music';
import Goose from '../../goose/Goose'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMerch } from '../../../actions/merchActions';
import { getPosts } from '../../../actions/postsActions';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import './style/MusicPage.css';

class MusicPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		if (this.props.itemListing.itemListing.length === 0) {
			this.props.getMerch();
			this.props.getPosts();
		}
	}
	render() {
		return (
			<div id="music-page-container">
				<Music />
				<div id="music-divider">
					
							<Divider style={{ marginBottom: '70px', marginTop: '60px' }} />
				</div>
						
				<div id="goose-music-page">
					<Goose />
				</div>
			</div>
		);
	}
}

MusicPage.propTypes = {
	itemListing: PropTypes.object.isRequired,
	posts: PropTypes.object.isRequired,
	getMerch: PropTypes.func.isRequired,
	getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	itemListing: state.itemListing,
	posts: state.posts
});

export default connect(
	mapStateToProps,
	{ getMerch, getPosts }
)(withRouter(MusicPage));
					

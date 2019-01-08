import React, { Component } from 'react';
import Blog from '../../blog/Blog';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './style/BlogPage.css';

class BlogPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="blog-page-container">
				<Blog />
			</div>
		);
	}
}

export default connect()(withRouter(BlogPage));

import React, { Component } from 'react';
// import Merch from '../../merch/Merch';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMerch } from '../../../actions/merchActions';
import { getPosts } from '../../../actions/postsActions';
import Slider from 'react-slick';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Spinner from '../../layout/Spinner';
import Books2 from '../../books/Books2';
import './style/StorePage.css';

class StorePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
			targetItem: {}
		};
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		if (this.props.itemListing.itemListing.length === 0) {
			this.props.getMerch();
			this.props.getPosts();
		}
		if (this.props.itemListing.itemListing.length > 0) {
			this.setState({
				nav1: this.slider1,
				nav2: this.slider2,
				targetItem: this.props.itemListing.itemListing[0]
			});
		}
	}

	onClick = item => {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
			targetItem: item
		});
	};

	targetDesc = e => {
		return e === this.state.targetItem;
	};

	render() {
		const { itemListing, posts } = this.props;
		const { targetItem } = this.state;
		console.log(targetItem.title);
		const merch = itemListing.itemListing;
		const tumblr = posts.posts;

		const slideShowItems = merch.slice(0, 28).map((item, j) => (
			<div key={j} className="img-wrapper">
				<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
					<a href={item.link} target="blank">
						<img className="merch-img" src={item.picture} alt="shirt" />
					</a>
					<h4>{item.title}</h4>
					<h4>{item.price}</h4>
				</ScrollAnimation>
			</div>
		));

		const thumbnailGal = merch.slice(0, 28).map((item, i) => (
			<div id="thumb-container" key={i}>
				<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
					<Thumbnail
						id="store-thumb"
						src={item.picture}
						alt="242x200"
						onClick={() => this.onClick(item)}
						value={item}
					>
						<h6
							style={{
								textAlign: 'center',
								color: 'rgba(0, 0, 0, 0.45)',
								marginBottom: '-10px'
							}}
						>
							{item.price}
						</h6>
					</Thumbnail>
				</ScrollAnimation>
			</div>
		));

		// This grabs the current merch index number when a thumbnail is clicked on.
		console.log(merch.findIndex(this.targetDesc));
		// TODO: Change the index with the arrows on the slider, then display decription based on that index number

		let storeContent;

		if (merch.length === 0 || tumblr.length === 0) {
			storeContent = (
				<div style={{ padding: '30px' }}>
					<Spinner />
				</div>
			);
		} else {
			storeContent = (
				<div id="store-page-container">
					<Grid>
						<Row className="show-grid">
							<Col className="header-img-col" md={12}>
								<img
									className="img-header"
									src="/images/merch-header.png"
									alt="merch"
								/>
							</Col>
						</Row>
						<Row className="show-grid">
							<Col md={5} mdPush={7}>
								<div className="slider-container">
									<Slider
										asNavFor={this.state.nav2}
										ref={slider => (this.slider1 = slider)}
									>
										{slideShowItems}
									</Slider>
								</div>
							</Col>
							<Col md={7} mdPull={5}>
								<h1>{targetItem.title}</h1>
								<h1>{targetItem.price}</h1>
								<h1>{targetItem.link}</h1>
							</Col>
						</Row>
						<Row className="show-grid">
							<Col md={12}>
								<Slider
									asNavFor={this.state.nav1}
									ref={slider => (this.slider2 = slider)}
									slidesToShow={6}
									swipeToSlide={true}
									focusOnSelect={true}
								>
									{thumbnailGal}
								</Slider>
							</Col>
						</Row>
					</Grid>
				</div>
			);
		}

		return (
			<div>
				{storeContent}
				<Books2 />
			</div>
		);
	}
}

StorePage.propTypes = {
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
)(withRouter(StorePage));

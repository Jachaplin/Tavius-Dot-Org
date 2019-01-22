import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMerch } from '../../../actions/merchActions';
import { getPosts } from '../../../actions/postsActions';
import Slider from 'react-slick';
import { Grid, Row, Col, Thumbnail, Jumbotron } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Spinner from '../../layout/Spinner';
import Books2 from '../../books/Books2';
import Goose from '../../goose/Goose'
import './style/StorePage.css';

class StorePage extends Component {
	constructor() {
		super();
		this.state = {
			targetItem: {},
			currMerchIndex: 0
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
				targetItem: this.props.itemListing.itemListing[0]
			});
		}
	}

	onClick = item => {
		this.setState({
			targetItem: item
		});

		setTimeout(() => {
			this.setState({
				currMerchIndex: this.props.itemListing.itemListing.findIndex(
					desc => desc === this.state.targetItem
				)
			});
		}, 1);
	};

	render() {
		const { itemListing, posts } = this.props;
		const { currMerchIndex } = this.state;
		const merch = itemListing.itemListing;
		const tumblr = posts.posts;

		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 5,
			slidesToScroll: 5
		};

		let itemPicture;

		if (merch[currMerchIndex] === undefined) {
			itemPicture = null;
		} else {
			itemPicture = (
				<div id="item-wrapper" className="img-wrapper">
					<a href={merch[currMerchIndex].link} target="blank">
						<img
							className="merch-img"
							id="item-img"
							src={merch[currMerchIndex].picture}
							alt="shirt"
						/>
					</a>
				</div>
			);
		}

		let itemDesc;

		if (merch[currMerchIndex] === undefined) {
			itemDesc = null;
		} else {
			itemDesc = (
				<div>
					<Jumbotron id="desc-jumbotron">
						<h4 id="desc-text">{merch[currMerchIndex].title}</h4>
						<h4 id="desc-price">{merch[currMerchIndex].price}</h4>
						<div id="link-container">
							<a id="buy-link" href={merch[currMerchIndex].link} target="blank">
								<button id="buy-shirt-button" className="buy-button">
									Buy
								</button>
							</a>
						</div>
					</Jumbotron>
				</div>
			);
		}

		const thumbnailGal = merch.slice(0, 28).map((item, i) => (
			<div id="thumb-container" key={i}>
				<Thumbnail
					id="store-thumb"
					src={item.picture}
					alt="242x200"
					onClick={() => this.onClick(item)}
					value={item}
				/>
			</div>
		));

		// only show 6 thumbnails for mobile
    const thumbnailGalMobile = merch.slice(0, 28).map((item, i) => (
      <div id="thumb-container" key={i}>
        <Col xs={6} md={3}>
          
          <Thumbnail
            id="store-thumb-mobile"
            src={item.picture}
            alt="242x200"
            onClick={() => this.onClick(item)}
            value={item}
          >
            <h4 id="desc-text-mobile">{item.title}</h4>
            <h4 id="desc-price-mobile">{item.price}</h4>
            <div id="link-container-mobile">
              <a
                id="buy-link-mobile"
                href={item.link}
                target="blank"
              >
                <button id="buy-button-mobile">Buy</button>
              </a>
            </div>
            </Thumbnail>
          
        </Col>
        
      </div>
    ));

		let storeContent;

		if (merch.length === 0 || tumblr.length === 0) {
			storeContent = (
				<div className="spinner-position-center">
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
						<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
						<div id="desktop-merch-display">
							
							<Row className="show-grid">
								<Col id="pic-col" md={5} mdPush={7}>
									<div className="slider-container">{itemPicture}</div>
								</Col>
								<Col id="desc-col" md={7} mdPull={5}>
									{itemDesc}
								</Col>
							</Row>
							<Row className="show-grid">
								<Col md={12}>
									<Divider
										id="store-divider"
										style={{ marginBottom: '50px' }}
									/>
								</Col>
							</Row>
							<Row className="show-grid">
								<Col md={12}>
								<div id="thumb-gal-container">
									
									<Slider {...settings}>{thumbnailGal}</Slider>
								</div>
								</Col>
							</Row>
						</div>

							<div id="mobile-merch-display">
		            <Row className="show-grid">
		              <Col md={12}>
		                {thumbnailGalMobile}
		              </Col>
		            </Row>
		          </div>
						
						</ScrollAnimation>
					</Grid>
					<Row className="show-grid">
						<Col md={12}>
							<Divider style={{ marginBottom: '70px', marginTop: '60px' }} />
						</Col>
					</Row>
					<Books2 />
					<Goose />
				</div>
			);
		}

		return <div>{storeContent}</div>;
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

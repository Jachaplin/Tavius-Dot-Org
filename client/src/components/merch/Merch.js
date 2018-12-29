import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getMerch } from '../../actions/merchActions';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Carousel, Divider } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';

class Merch extends Component {
  componentWillMount() {
    this.props.getMerch();
  }

  render() {
    const { itemListing } = this.props.itemListing;

    const slideShowItems = itemListing.slice(0, 9).map(item => (
      <div key={item.created} className="img-wrapper">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <a href={item.link} target="blank">
            <img className="merch-img" src={item.picture} alt="shirt" />
          </a>
          <h4>{item.title}</h4>
          <h4>{item.price}</h4>
        </ScrollAnimation>
      </div>
    ));

    // only show 9 thumbnails
    const thumbnailGal = itemListing.slice(0, 9).map((item, i) => (
      <div key={i}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Col xs={6} md={4}>
            <a href={item.link} target="blank">
              <Thumbnail src={item.thumbnail} alt="242x200" />
            </a>
          </Col>
        </ScrollAnimation>
      </div>
    ));

    return (
      <div>
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
            <Col md={6} mdPush={6}>
              <div className="slider-container">
                <Carousel autoplay>{slideShowItems}</Carousel>
              </div>
            </Col>
            <Col md={6} mdPull={6}>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <img id="apple-img" src="/images/forbidden01.png" alt="" />
              </ScrollAnimation>
              {thumbnailGal}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Link to="/store">
                <Divider>See More</Divider>
              </Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Merch.propTypes = {
  getMerch: PropTypes.func.isRequired,
  itemListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemListing: state.itemListing
});

export default connect(
  mapStateToProps,
  { getMerch }
)(Merch);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getMerch } from '../../actions/merchActions';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';

class Merch extends Component {
  render() {
    const { itemListing } = this.props.itemListing;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    const slideShowItems = itemListing.slice(0, 8).map((item, j) => (
      <div key={j} className="img-wrapper">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <a href={item.link} target="blank">
            <img className="merch-img" src={item.picture} alt="shirt" />
          </a>
          <h4 style={{ textALign: 'center' }}>{item.title}</h4>
          <h4 style={{ textALign: 'center' }}>{item.price}</h4>
        </ScrollAnimation>
      </div>
    ));

    // only show 9 thumbnails
    const thumbnailGal = itemListing.slice(0, 8).map((item, i) => (
      <div key={i}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Col xs={6} md={3}>
            <a href={item.link} target="blank">
              <Thumbnail id="merch-thumb" src={item.picture} alt="242x200">
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
            <Col md={5} mdPush={7}>
              <div className="slider-container">
                <Slider {...settings}>{slideShowItems}</Slider>
              </div>
            </Col>
            <Col md={7} mdPull={5}>
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <img id="apple-img" src="/images/forbidden01.png" alt="" />
              </ScrollAnimation>
              {thumbnailGal}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Link to="/store" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

Merch.propTypes = {
  itemListing: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  itemListing: state.itemListing
});

export default connect(mapStateToProps)(Merch);

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Carousel } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({
  offset: -80,
  scrollDuration: 500
});

class TshirtSlides extends Component {
  render() {
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
              <ScrollableAnchor id={'merch'}>
                <div id="slider-container">
                  <Carousel autoplay>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://rlv.zcache.com/tavius_dot_org_t_shirt-rc24af40ed0054ab9b888a543def9866c_k2gr0_307.jpg"
                          alt="shirt"
                        />
                      </a>
                      <h4>Tavius Dot Org</h4>
                      <h4>$25</h4>
                    </div>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://i2.wp.com/rlv.zcache.com/apple_forbidden_fruit_tee_shirt-rf25ae03960b84c868002de4d2f489a56_jg4de_325.jpg?w=730"
                          alt="shirt"
                        />
                      </a>
                      <h4>Forbidden Fruit</h4>
                      <h4>$50</h4>
                    </div>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://rlv.zcache.com/forbidden_apple_red_on_black_t_shirt-r1f6d36c9876f4376af681b3029ee84f0_k2gm8_307.jpg"
                          alt="shirt"
                        />
                      </a>
                      <h4>Forbidden Fruit - Black</h4>
                      <h4>$25</h4>
                    </div>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://i2.wp.com/rlv.zcache.com/probiotics_not_antibiotics_t_shirts-rd939fa5fe6cd4359b79c22b6f266662f_jg95v_325.jpg?w=730"
                          alt="shirt"
                        />
                      </a>
                      <h4>Probiotics Not Antibiotics</h4>
                      <h4>$20</h4>
                    </div>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://rlv.zcache.com/hella_sober_grey_t_shirt-ra5b063e72f5b40e1abd2823bae2db9ec_k21au_307.jpg"
                          alt="shirt"
                        />
                      </a>
                      <h4>Hella Sober</h4>
                      <h4>$25</h4>
                    </div>
                    <div className="img-wrapper">
                      <a href="link">
                        <img
                          className="merch-img"
                          src="https://i1.wp.com/rlv.zcache.com/global_warming_t_shirt-red7476e0f3e84d73844bbfc79c138186_jg4dk_325.jpg?w=730"
                          alt="shirt"
                        />
                      </a>
                      <h4>Global Warming</h4>
                      <h4>$25</h4>
                    </div>
                  </Carousel>
                </div>
              </ScrollableAnchor>
            </Col>
            <Col md={6} mdPull={6}>
              <ScrollAnimation animateIn="bounceInLeft">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed odio sagittis, scelerisque sapien nec, facilisis nunc.
                  Aenean imperdiet metus dignissim volutpat euismod.
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TshirtSlides;

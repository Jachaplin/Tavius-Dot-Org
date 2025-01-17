import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { CSSTransitionGroup } from 'react-transition-group';
import SubscribeModal from './Modal';
import './style/Navboxes.css';
import './style/Navbar.css';

class NavBoxes extends Component {
  render() {
    return (
      <div id="navbox-container">
        <Jumbotron id="with-slide-animation">
          <div id="banner-container">
            <div id="padding" />
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}
            >
              <img
                id="banner"
                src="images/tavius-logo-smaller-blue.png"
                alt="tavius.org banner"
              />
            </CSSTransitionGroup>
            <Grid>
              <Row id="quote-row">
                <Col md={9}>
                  <ScrollAnimation animateIn="slideInLeft" animateOnce={true}>
                    <div id="banner-quote">"Creative Expression</div>
                    <div id="banner-quote">Is Self Exploration."</div>
                    <div id="banner-quote">- Tavius</div>
                  </ScrollAnimation>
                </Col>
                <Col md={3}>
                  <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnter={false}
                    transitionLeave={false}
                  >
                    <SubscribeModal />
                  </CSSTransitionGroup>
                </Col>
              </Row>
            </Grid>
          </div>
        </Jumbotron>

        <Jumbotron id="no-slide-animation">
          <div id="banner-container">
            <div id="padding" />
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}
            >
              <img
                id="banner"
                src="images/tavius-logo-smaller-blue.png"
                alt="tavius.org banner"
              />
              <Grid>
                <Row id="quote-row">
                  <Col md={9}>
                    <div id="banner-quote">"Creative Expression</div>

                    <div id="banner-quote">Is Self Exploration."</div>

                    <div id="banner-quote">- Tavius</div>
                  </Col>
                  <Col md={3}>
                    <SubscribeModal />
                  </Col>
                </Row>
              </Grid>
            </CSSTransitionGroup>
          </div>
        </Jumbotron>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Grid>
            <Row className="show-grid">
              <Col className="box grow" id="music-box" md={4}>
                <div id="music-box-1">
                  <Row className="show-grid">
                    <Col id="img-col" md={12}>
                      <img
                        className="img-button"
                        src="images/music-button.png"
                        alt="music"
                      />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={6} xsOffset={6}>
                      <Link to="/music">
                        <Button id="box-button">Listen Here</Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="box grow" id="store-box" md={4}>
                <div id="store-box-1">
                  <Row className="show-grid">
                    <Col id="img-col" md={12}>
                      <img
                        className="img-button"
                        src="images/store-button.png"
                        alt="store"
                      />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={6} xsOffset={6}>
                      <Link to="/store">
                        <Button id="box-button">Shop Here</Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col className="box grow" id="event-box" md={4}>
                <div id="event-box-1">
                  <Row className="show-grid">
                    <Col id="img-col" md={12}>
                      <img
                        className="img-button"
                        src="images/event-button.png"
                        alt="events"
                      />
                    </Col>
                  </Row>
                  <Row className="show-grid">
                    <Col xs={6} xsOffset={6}>
                      <Link to="events">
                        <Button id="box-button">See What's Next</Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Grid>
        </ScrollAnimation>
      </div>
    );
  }
}

export default NavBoxes;

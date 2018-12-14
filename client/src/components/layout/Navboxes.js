import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Navboxes.css';

class NavBoxes extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
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
                    <a href="#music">
                      <Button id="box-button">Listen Here</Button>
                    </a>
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
                    <Button id="box-button">Shop Here</Button>
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
                    <Button id="box-button">See What's Next</Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </ScrollAnimation>
    );
  }
}

export default NavBoxes;

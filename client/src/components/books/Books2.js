import React, { Component } from 'react';

import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import './style/Books2.css';

import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow:
      '0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)'
  },
  hover: {
    scale: 1.1,
    boxShadow:
      '0px 4px 8px 0px rgba(0, 0, 0, 0.4), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)'
  },
  press: {
    scale: 1.0,
    boxShadow:
      '0px 2px 5px 0px rgba(0,0,0,0.1), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)'
  }
});

class Books2 extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <img
                id="amazon-icon"
                src="/images/amazon-icon.png"
                alt="amazon-kindle"
              />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col md={4} mdPush={8}>
              <h1>Books</h1>
            </Col>
            <Col md={8} mdPull={4}>
              <Col xs={6} md={4}>
                <Box>
                  <Thumbnail
                    id="book-container"
                    src="/images/shaddow-work-pic.png"
                    alt="242x200"
                  >
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>
                      &nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Box>
              </Col>
              <Col xs={6} md={4}>
                <Box>
                  <Thumbnail
                    id="book-container"
                    src="/images/shaddow-work-pic.png"
                    alt="242x200"
                  >
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>
                      &nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Box>
              </Col>
              <Col xs={6} md={4}>
                <Box>
                  <Thumbnail
                    id="book-container"
                    src="/images/shaddow-work-pic.png"
                    alt="242x200"
                  >
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>
                      &nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
                </Box>
              </Col>
            </Col>
          </Row>
        </Grid>
        ;
      </div>
    );
  }
}

export default Books2;

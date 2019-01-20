import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './style/Books2.css';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
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
      <div id="books-container">
        <Grid>
          <Row id="amazon-row" className="show-grid">
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
          <Row id="book-row">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <Col md={8} mdPush={4}>
                <h1 className="desc-title">Shadow Work</h1>
                <p className="description">
                  Poems that honestly explore a life, feeling their way through
                  self-destruction, mental-health issues, addiction, and grief
                  from the loss of a son. Shadow Work means taking a look at the
                  parts of us we don't want to look at and reconciling ourselves
                  for the better. The poems take the reader from darkness to
                  recovery by creatively exploring a self sometimes reluctant to
                  step into the light. Near-death experiences, incarceration,
                  divorce, and the loss of an only child are the motivations to
                  finding the other side. Shadow Work brings a message of hope
                  and strength to anyone who might be struggling with similar
                  issues, or those who know someone who is. When we learn from
                  our mistakes and help others, we turn our darkness into light
                  and love.
                </p>
              </Col>
              <Col md={4} mdPull={8}>
                <div id="box-container">
                  <Box>
                    <Thumbnail
                      id="book-thumb-container"
                      src="images/shaddow-work-pic.png"
                      alt="The Fine Art of Obsolescence"
                    >
                      <h4 id="desc-price" style={{ marginTop: '15px' }}>
                        $10.00
                      </h4>

                      <div id="link-container">
                        <a
                          id="buy-link"
                          href="https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0"
                          target="blank"
                        >
                          <button className="buy-button">Buy</button>
                        </a>
                      </div>
                    </Thumbnail>
                  </Box>
                </div>
              </Col>
            </ScrollAnimation>
          </Row>
        </Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Divider style={{ marginBottom: '67px' }} />
          </Col>
        </Row>
        <Grid>
          <Row id="book-row">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <Col md={8} mdPush={4}>
                <h1 className="desc-title">
                  30 Day Journal to Change Your Life
                </h1>
                <p className="description">
                  This "Change Your Life in 30 Days" journal is an opportunity
                  to pause on a regular basis and reflect. Slowing down, and
                  taking time to check in with oneself can be very powerful
                  tools in obtaining goals and improving quality of life.
                </p>
              </Col>
              <Col md={4} mdPull={8}>
                <div id="box-container">
                  <Box>
                    <Thumbnail
                      id="book-thumb-container"
                      src="images/change-your-life.jpeg"
                      alt="30 Day Journal to Change Your Life"
                    >
                      <h4 id="desc-price">$10.00</h4>

                      <div id="link-container">
                        <a
                          id="buy-link"
                          href="http://www.lulu.com/shop/tavius-dyer/30-day-journal-to-change-your-life-2019/paperback/product-23921637.html"
                          target="blank"
                        >
                          <button className="buy-button">Buy</button>
                        </a>
                      </div>
                    </Thumbnail>
                  </Box>
                </div>
              </Col>
            </ScrollAnimation>
          </Row>
        </Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Divider style={{ marginBottom: '67px' }} />
          </Col>
        </Row>
        <Grid>
          <Row id="book-row">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <Col md={8} mdPush={4}>
                <h1 className="desc-title">The Fine Art of Obsolescence</h1>
                <p className="description">
                  The Fine Art of Obsolescence is a collection of photographs
                  depicting the evolution of communication technology through
                  the cultural eye of street art. Pay phones have become relicts
                  of technological advancements while also taking on the
                  graffiti style street art. The juxtaposition of taking artful
                  documentary photos of old out of order pay phones with Smart
                  phones is quite a statement about how far we have come in so
                  little time. These are an interesting set of found street art
                  and documentary work as conceptual art.
                </p>
              </Col>
              <Col md={4} mdPull={8}>
                <div id="box-container">
                  <Box>
                    <Thumbnail
                      id="book-thumb-container"
                      src="images/fine-art-of-absolescence.jpeg"
                      alt="The Fine Art of Obsolescence"
                    >
                      <h4 id="desc-price" style={{ marginTop: '15px' }}>
                        $10.00
                      </h4>

                      <div id="link-container">
                        <a
                          id="buy-link"
                          href="http://www.lulu.com/shop/tavius-aiton-and-monica-martin/the-fine-art-of-obsolescence/paperback/product-21950963.html"
                          target="blank"
                        >
                          <button className="buy-button">Buy</button>
                        </a>
                      </div>
                    </Thumbnail>
                  </Box>
                </div>
              </Col>
            </ScrollAnimation>
          </Row>
        </Grid>

        <Row className="show-grid">
          <Col md={12}>
            <Divider style={{ marginBottom: '30px', marginTop: '5px' }} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Books2;

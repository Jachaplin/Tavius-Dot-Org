import React, { Component } from 'react';
import { Card } from 'antd';
import { Grid, Row, Col } from 'react-bootstrap';
import './style/Books.css';

const { Meta } = Card;

class Books extends Component {
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
          <Row className="show-grid">
            <Col md={6} mdPush={6}>
              <div id="grow">
                <a
                  style={{ decoration: 'none' }}
                  target="blank"
                  href="https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0"
                >
                  <Card
                    id="book-container"
                    hoverable
                    cover={
                      <img
                        className="book-img"
                        alt="example"
                        src="/images/shaddow-work-pic.png"
                      />
                    }
                  >
                    <Meta title="Shaddow Work" description="www.amazon.com" />
                  </Card>
                </a>
              </div>

              <div id="grow">
                <a
                  style={{ decoration: 'none' }}
                  target="blank"
                  href="https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0"
                >
                  <Card
                    id="book-container"
                    hoverable
                    cover={
                      <img
                        className="book-img"
                        alt="example"
                        src="/images/shaddow-work-pic.png"
                      />
                    }
                  >
                    <Meta title="Shaddow Work" description="www.amazon.com" />
                  </Card>
                </a>
              </div>

              <div id="grow">
                <a
                  style={{ decoration: 'none' }}
                  target="blank"
                  href="https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0"
                >
                  <Card
                    id="book-container"
                    hoverable
                    cover={
                      <img
                        className="book-img"
                        alt="example"
                        src="/images/shaddow-work-pic.png"
                      />
                    }
                  >
                    <Meta title="Shaddow Work" description="www.amazon.com" />
                  </Card>
                </a>
              </div>
              <div id="grow">
                <a
                  style={{ decoration: 'none' }}
                  target="blank"
                  href="https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0"
                >
                  <Card
                    id="book-container"
                    hoverable
                    cover={
                      <img
                        className="book-img"
                        alt="example"
                        src="/images/shaddow-work-pic.png"
                      />
                    }
                  >
                    <Meta title="Shaddow Work" description="www.amazon.com" />
                  </Card>
                </a>
              </div>
            </Col>
            <Col md={6} mdPull={6}>
              <h1>Books</h1>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Books;

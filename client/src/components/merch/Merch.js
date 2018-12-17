import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Carousel } from 'antd';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import feed from 'rss-to-json';
import htmlToJson from 'html-to-json';

configureAnchors({
  offset: -80,
  scrollDuration: 500
});

class Merch extends Component {
  constructor() {
    super();
    this.state = {
      itemListing: []
    };
  }

  componentDidMount() {
    const zazzleURL = 'http://feed.zazzle.com/oneofftees/rss';
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const items = [];

    feed.load(corsURL + zazzleURL, (err, rss) => {
      rss.items.map(res => {
        let price = res.description;
        let itemPrice = htmlToJson.parse(price, [
          '.ZazzleCollectionItemCellProduct-price',
          function($item) {
            return $item.text();
          }
        ]);

        let itemThumbnail = res.media.thumbnail[0].url[0];
        let itemPic = itemThumbnail.replace('_152', '_500');

        let titleCommaFix = res.title;
        let itemTitle = titleCommaFix.replace('&#39;', "'");

        items.push({
          title: itemTitle,
          link: res.link,
          picture: itemPic,
          thumbnail: itemThumbnail,
          price: itemPrice._rejectionHandler0[0],
          created: res.created
        });
        return rss.items;
      });
      this.setState({ itemListing: items });
    });
  }

  render() {
    const { itemListing } = this.state;

    const slideShowItems = itemListing.map(item => (
      <div key={item.created} className="img-wrapper">
        <a href={item.link} target="blank">
          <img className="merch-img" src={item.picture} alt="shirt" />
        </a>
        <h4>{item.title}</h4>
        <h4>{item.price}</h4>
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
              <ScrollableAnchor id={'merch'}>
                <div id="slider-container">
                  <Carousel autoplay>{slideShowItems}</Carousel>
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

export default Merch;

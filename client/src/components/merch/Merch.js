import React, { Component } from 'react';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Carousel } from 'antd';
// import ScrollAnimation from 'react-animate-on-scroll';
import './style/Merch.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import feed from 'rss-to-json';
import htmlToJson from 'html-to-json';

class Merch extends Component {
  constructor() {
    super();
    this.state = {
      itemListing: []
    };
    configureAnchors({
      offset: -90,
      scrollDuration: 500
    });
  }

  componentDidMount() {
    const zazzleURL = 'http://feed.zazzle.com/oneofftees/rss';
    const corsURL = 'https://cors-anywhere.herokuapp.com/';
    const items = [];

    // convert XML response to json with this call
    feed.load(corsURL + zazzleURL, (err, rss) => {
      rss.items.map(res => {
        // set price to the description which is now a body of HTML
        let price = res.description;
        // Parse through the HTML for the class containing the price, then covert the class to json
        let itemPrice = htmlToJson.parse(price, [
          '.ZazzleCollectionItemCellProduct-price',
          function($item) {
            return $item.text();
          }
        ]);

        let itemThumbnail = res.media.thumbnail[0].url[0];
        // change the thumbnail pic to a larger pic not included in the response
        let itemPic = itemThumbnail.replace('_152', '_500');
        // place comma's inside the titles where they should be
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

    // only show 9 thumbnails
    const thumbnailGal = itemListing.slice(0, 9).map((item, i) => (
      <div key={i}>
        <Col xs={6} md={4}>
          <a href={item.link} target="blank">
            <Thumbnail src={item.thumbnail} alt="242x200" />
          </a>
        </Col>
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
              <img
                src="/images/forbidden01.png"
                style={{
                  display: 'block',
                  'margin-left': 'auto',
                  'margin-right': 'auto',
                  'margin-top': '-15px',
                  'margin-bottom': '10px',
                  width: '100px',
                  height: 'auto'
                }}
                alt=""
              />
              {thumbnailGal}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Merch;

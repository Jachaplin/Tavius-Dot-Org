import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../style/tshirt-slides.css';


class TshirtSlides extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div><img src="images/KSCU-shirt3-copy.jpg"/><h4>Discription</h4><h4>Price</h4></div>
        <div><img src="images/KSCU-shirt3-copy.jpg"/><h4>Discription</h4><h4>Price</h4></div>
        <div><img src="images/KSCU-shirt3-copy.jpg"/><h4>Discription</h4><h4>Price</h4></div>
        <div><img src="images/KSCU-shirt3-copy.jpg"/><h4>Discription</h4><h4>Price</h4></div>
      </Carousel>
    );
  };
};

export default TshirtSlides;

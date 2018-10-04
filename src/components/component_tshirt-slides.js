import React, { Component } from 'react';
import { Carousel } from 'antd';
import '../style/tshirt-slides.css';



class TshirtSlides extends Component {
  render() {
    return (
      <div>
        
            <Carousel autoplay>
              <div><img src="images/KSCU-shirt3-copy.jpg" alt="shirt"/><h4>T-Shirt</h4><h4>$25</h4></div>
              <div><img src="images/KSCU-shirt3-copy.jpg" alt="shirt"/><h4>Hoodie</h4><h4>$50</h4></div>
              <div><img src="images/KSCU-shirt3-copy.jpg" alt="shirt"/><h4>Hat</h4><h4>$20</h4></div>
              <div><img src="images/KSCU-shirt3-copy.jpg" alt="shirt"/><h4>T-Shirt</h4><h4>$25</h4></div>
            </Carousel>
          
          
        
      </div>
    );
  };
};

export default TshirtSlides;
            

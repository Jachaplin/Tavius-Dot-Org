import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './style/Goose.css'

class Goose extends Component {
	render() {
		return (
			<div id="goose-container">
				<ScrollAnimation animateIn="fadeIn" animateOnce={true}>
					<img id="goose-img" src="/images/live-like-goose-resized.jpg" alt=""/>
					<p id="goose-text">A portion of the proceeds from any orders on this site will go towards grief and trauma recovery research and resources through the <a target="_blank" rel="noopener noreferrer" href="http://livelikegoose.org/">Live Like Goose Nonprofit</a></p>
				</ScrollAnimation>
			</div>
		);
	}
}

export default Goose;
				
				
				
				

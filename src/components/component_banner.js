import React, { Component } from 'react';
import '../style/banner.css';



class Banner extends Component {
	render() {
		return(
			<div id="banner-container">
				<img id="banner" src="images/tavius-logo-smaller-blue.png" alt="tavius.org banner"/>
			</div>
		)
	}
} 

export default Banner;
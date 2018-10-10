import React, { Component } from 'react';
import { Row, Col } from 'antd'
import '../style/itunes-player.css';
import ScrollAnimation from 'react-animate-on-scroll';



class MusicPlayer extends Component {
	render() {
		return(
			<div id="music-container">
			<Row>
      	<Col span={14} push={10}>
					<ScrollAnimation animateIn="fadeIn">
					<div id="itunes-container">
						<iframe className="itunes-player" title="tavius-dot-org" allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=music"></iframe>
					</div>
					</ScrollAnimation>
					<ScrollAnimation animateIn="bounceInUp">
						<div id="grow">
							<div id="button-container">
							<a target="blank" href="https://itunes.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=itunes">
							<img alt="itunes" className="itunes-badge" src="http://static1.squarespace.com/static/5540ce85e4b0a2d6c580ebd4/t/560d4012e4b066b1a89f43e6/1443708947047/?format=1000w"/></a>
							</div>
						</div>
		  
					</ScrollAnimation>
      	</Col>
      	<Col span={10} pull={14}>
      		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed odio sagittis, scelerisque sapien nec, facilisis nunc. Aenean imperdiet metus dignissim volutpat euismod. Ut a magna accumsan, egestas ex ut, efficitur nisl. Suspendisse pretium, purus a tempus molestie, lorem lacus fermentum eros, id suscipit quam elit ut dui. Nunc sit amet erat id urna tincidunt accumsan a quis lectus. In tristique quis nibh quis volutpat. Mauris fermentum lectus mi, id pellentesque enim pharetra eget. Maecenas ut purus imperdiet, venenatis tortor et, aliquet purus. Vestibulum at ligula ut est pulvinar dapibus. Mauris eleifend elit commodo nibh interdum bibendum. Nullam ultricies elit at neque porttitor vehicula.</p>
      	</Col>
    	</Row>
				</div>
		)
	}
} 

export default MusicPlayer;
		  

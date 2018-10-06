import React, { Component } from 'react';
import '../style/itunes-player.css';
import ScrollAnimation from 'react-animate-on-scroll';



class MusicPlayer extends Component {
	render() {
		return(
			<div>
			<ScrollAnimation animateIn="fadeIn">
			<div id="itunes-container">
				<iframe className="itunes-player" title="tavius-dot-org" allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=music"></iframe>
			</div>
  
			</ScrollAnimation>
			<ScrollAnimation animateIn="bounceInUp">
				<a target="blank" href="https://itunes.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=itunes"><img id="grow" alt="itunes" className="itunes-badge" src="http://static1.squarespace.com/static/5540ce85e4b0a2d6c580ebd4/t/560d4012e4b066b1a89f43e6/1443708947047/?format=1000w"/></a>
  
			</ScrollAnimation>
				</div>
		)
	}
} 

export default MusicPlayer;
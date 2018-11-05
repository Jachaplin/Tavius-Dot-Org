import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import '../style/itunes-player.css';

configureAnchors({
  offset: -80, 
  scrollDuration: 500
})

class MusicPlayer extends Component {
  render() {
    return(
      <div id="music-container">
        <Grid>
        <Row className="show-grid"> 
          <Col className="header-img-col" md={12}>
            <img className="img-header" src="/images/music-header.png" alt="music" />
          </Col>
        </Row>
          <ScrollAnimation animateIn="fadeIn">
          <Row className="show-grid">
          <ScrollableAnchor id={'music'}>
            <figure className="mb-0 figure-bg pos-abs bg-gray-100 z-3 d-none d-lg-block" data-userway-font-size="16">
            </figure>
          </ScrollableAnchor>
            <Col md={6} mdPush={6}>
              <Parallax 
                bgImage="/images/laughing-on-stage.jpg" 
                bgHeight="400px" 
                bgWidth="auto" 
                strength={-375}
                >
                <div style={{ height: 700 }}>
                </div>
              </Parallax>
            </Col>
            <Col className="grid-margin" md={6} mdPull={6}>
              
                <div id="itunes-container">
                  <iframe 
                    className="itunes-player" 
                    title="tavius-dot-org" 
                    allow="autoplay *; encrypted-media *;" 
                    frameBorder="0" 
                    height="450" 
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" 
                    src="https://embed.music.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=music"
                    >
                  </iframe>
                </div>
              
                <p>
                  Various genres of experimental electronic music and spoken word. 
                  Great Kung Fu Vampire remix and some of the project "Beyond Dubstep". 
                  There are slower kinder tracks as well as some more uptempo blazing!
                </p>
              
              <ScrollAnimation animateIn="fadeIn">
              <ScrollAnimation delay={2000}
                animateIn='tada'
                initiallyVisible={true}
                animateOnce={true}
                >
                <div id="grow">
                  <div id="button-container">
                    <a target="blank" href="https://itunes.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=itunes">
                      <img alt="itunes" className="itunes-badge" src="http://static1.squarespace.com/static/5540ce85e4b0a2d6c580ebd4/t/560d4012e4b066b1a89f43e6/1443708947047/?format=1000w"/>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
              </ScrollAnimation>
              
            </Col>
          </Row>
          </ScrollAnimation>
        </Grid>
      </div>
    )
  }
} 

export default MusicPlayer;
      
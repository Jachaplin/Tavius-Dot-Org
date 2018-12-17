import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import './style/Music.css';

configureAnchors({
  offset: -80,
  scrollDuration: 500
});

class Music extends Component {
  render() {
    return (
      <div id="music-container">
        <Grid>
          <Row className="show-grid">
            <Col className="header-img-col" md={12}>
              <img
                className="img-header"
                src="/images/music-header.png"
                alt="music"
              />
            </Col>
          </Row>
          <ScrollAnimation animateIn="fadeIn">
            <Row className="show-grid">
              <ScrollableAnchor id={'music'}>
                <figure
                  className="mb-0 figure-bg pos-abs bg-gray-100 z-3 d-none d-lg-block"
                  data-userway-font-size="16"
                />
              </ScrollableAnchor>
              <Col md={6} mdPush={6}>
                <Parallax
                  bgImage="/images/Finding-The-Superhero-Within.jpg"
                  bgHeight="400px"
                  bgWidth="auto"
                  strength={-375}
                >
                  <div style={{ height: 700 }} />
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
                  />
                </div>

                <p>
                  Various genres of experimental electronic music and spoken
                  word. Great Kung Fu Vampire remix and some of the project
                  "Beyond Dubstep". There are slower kinder tracks as well as
                  some more uptempo blazing!
                </p>

                <ScrollAnimation animateIn="fadeIn">
                  <ScrollAnimation
                    delay={2000}
                    animateIn="tada"
                    initiallyVisible={true}
                    animateOnce={true}
                  >
                    <div id="grow">
                      <div id="button-container">
                        <a
                          target="blank"
                          href="https://itunes.apple.com/us/album/dark-night-of-the-digital-soul/1361877834?app=itunes"
                        >
                          <img
                            alt="itunes"
                            className="itunes-badge"
                            src="/images/itunes-badge.png"
                          />
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
    );
  }
}

export default Music;
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Divider } from 'antd';
import './style/Blog.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import ScrollAnimation from 'react-animate-on-scroll';
import { configureAnchors } from 'react-scrollable-anchor';
import tumblr from 'tumblr.js';
import ReactHtmlParser from 'react-html-parser';

import tumblrApi from '../../config/keys_dev.js';

configureAnchors({
  offset: -80,
  scrollDuration: 500
});

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const tumblrPosts = [];

    const client = tumblr.createClient({
      consumer_key: tumblrApi.key,
      consumer_secret: tumblrApi.secret,
      token: tumblrApi.token,
      token_secret: tumblrApi.tokensecret
    });

    client.blogPosts('taviusdotorg.tumblr.com', (err, data) => {
      data.posts.map(res => {
        const blogHTML = res.reblog.comment;
        const summary =
          res.slug.charAt(0).toUpperCase() +
          res.slug.slice(1).replace(/-/gi, ' ');

        const blogPics = [];
        const blogBody = [];
        const blogLink = [];

        if (res.photos === undefined) {
          res.photos = '';
          blogPics.push('');
        } else if (res.photos[0].original_size === undefined) {
          res.photos[0].original_size = '';
          blogPics.push('');
        } else {
          blogPics.push(res.photos[0].original_size.url);
        }

        if (res.body === undefined) {
          blogBody.push(res.reblog.comment);
        } else {
          blogBody.push(res.body);
        }

        if (res.link_url === undefined) {
          blogLink.push(res.post_url);
        } else {
          blogLink.push(res.link_url);
        }

        tumblrPosts.push({
          blogtext: blogHTML,
          blogpic: blogPics[0],
          date: res.date,
          title: summary,
          link: blogLink
        });
        return data.posts;
      });
      this.setState({ posts: tumblrPosts });
    });
  }

  render() {
    const { posts } = this.state;
    const blogContent = posts.map((post, i) => (
      <div id="blog-component" key={i}>
        <Row className="show-grid">
          <Col md={12}>
            <Divider style={{ marginBottom: '80px' }}>{post.date}</Divider>
          </Col>
        </Row>
        <Row className="show-grid">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Col id="blog-img" md={6}>
              {post.blogpic === '' ? (
                <img
                  id="blog-img"
                  src="/images/sitting-on-stage-reading.jpg"
                  alt="blog"
                />
              ) : (
                <img id="blog-img" src={post.blogpic} alt="blog" />
              )}
            </Col>
            <Col md={6}>
              {post.blogpic !== '' ? (
                <div id="post-title" style={{ marginTop: '50px' }}>
                  "{post.title} ..."
                </div>
              ) : (
                <div id="post-title">"{post.title} ..."</div>
              )}
              {post.link.toString().charAt(12) !== 'i' ? (
                <div>
                  <a href={post.link} target="blank">
                    <img
                      id="blog-icon"
                      src="/images/Tumblr_Logos_2018.03.06_iOS_Icon_Blue.png"
                      alt="tumblr"
                      style={{
                        width: '65px',
                        height: 'auto'
                      }}
                    />
                  </a>
                </div>
              ) : (
                <div>
                  <a href={post.link} target="blank">
                    <img
                      id="blog-icon"
                      src="/images/IG_Glyph_Fill.png"
                      alt="instagram"
                      style={{
                        width: '100px',
                        height: 'auto'
                      }}
                    />
                  </a>
                </div>
              )}
            </Col>
          </ScrollAnimation>
        </Row>
        <Row className="show-grid">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Col md={12}>
              <div id="blog-content">
                <div className="blog-text">
                  <div>
                    {ReactHtmlParser(
                      post.blogtext.substring(0, 4) === '<p><'
                        ? post.blogtext.slice(3, -4)
                        : post.blogtext
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </ScrollAnimation>
        </Row>
      </div>
    ));

    return (
      <div id="blog-container">
        <Grid>
          <Row className="show-grid">
            <Col className="header-img-col" md={12}>
              <img
                className="img-header"
                src="/images/blog-header.png"
                alt="blog"
              />
            </Col>
          </Row>
          <ScrollableAnchor id={'blog'}>
            <div />
          </ScrollableAnchor>
          {blogContent}
        </Grid>
      </div>
    );
  }
}

export default Blog;

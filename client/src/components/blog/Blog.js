import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMerch } from '../../actions/merchActions';
import { getPosts } from '../../actions/postsActions';
import { Grid, Row, Col } from 'react-bootstrap';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import './style/Blog.css';
import ReactHtmlParser from 'react-html-parser';
import ScrollAnimation from 'react-animate-on-scroll';

class Blog extends Component {
  componentDidMount() {
    if (this.props.posts.posts.length === 0) {
      this.props.getMerch();
      this.props.getPosts();
    }
  }
  render() {
    const { posts } = this.props.posts;
    const blogContent = posts.map((post, i) => (
      <div id="blog-component" key={i}>
        <Row id="time-stamp-row" className="show-grid">
          <Col md={12}>
            <Divider id="time-stamp" style={{ marginBottom: '80px' }}>
              {post.date}
            </Divider>
          </Col>
        </Row>
        <Row className="show-grid">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <Col md={6}>
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
            <Col id="blog-info" md={6}>
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
            <Col id="img-blog-header" className="header-img-col" md={12}>
              <img
                className="img-header"
                src="/images/blog-header.png"
                alt="blog"
              />
            </Col>
          </Row>

          <div />

          {blogContent}
        </Grid>
      </div>
    );
  }
}

Blog.propTypes = {
  posts: PropTypes.object.isRequired,
  getMerch: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getMerch, getPosts }
)(Blog);

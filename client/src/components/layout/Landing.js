import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMerch } from '../../actions/merchActions';
import { getPosts } from '../../actions/postsActions';
import { getSubscribers } from '../../actions/subscActions';
import Spinner from './Spinner';
// import { Layout } from 'antd';
import Navboxes from './Navboxes';
import Merch from '../merch/Merch';
import Books2 from '../books/Books2';
import Music from '../music/Music';
import Blog from '../blog/Blog';
import './style/Landing.css';

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.itemListing.itemListing.length === 0) {
      this.props.getMerch();
      this.props.getPosts();
      this.props.getSubscribers();
    }
  }

  render() {
    const { itemListing, posts } = this.props;
    let centerContent;
    if (posts.posts.length === 0 || itemListing.itemListing === 0) {
      centerContent = (
        <div style={{ backgroundColor: '#222', padding: '30px' }}>
          <Spinner />
        </div>
      );
    } else {
      centerContent = (
        <div>
          <Navboxes />
          <div id="landing-layout">
            <div style={{ padding: '0 50px' }}>
              <div style={{ padding: '24px 0', background: '#fff' }}>
                <div
                  style={{
                    padding: '0 24px',
                    minHeight: '280px'
                  }}
                >
                  <Merch />
                  <Books2 />
                  <Music />
                  <Blog />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <div>{centerContent}</div>;
  }
}

Landing.propTypes = {
  posts: PropTypes.object.isRequired,
  getMerch: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  getSubscribers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  itemListing: state.itemListing,
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getMerch, getPosts, getSubscribers }
)(withRouter(Landing));

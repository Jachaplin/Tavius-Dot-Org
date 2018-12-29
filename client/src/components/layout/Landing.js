import React, { Component } from 'react';
import { Layout } from 'antd';
import Navboxes from './Navboxes';
import Merch from '../merch/Merch';
import Music from '../music/Music';
import Blog from '../blog/Blog';
import SideContent from './Sider';
import './style/Landing.css';

const { Content, Sider } = Layout;

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Navboxes />
        <Layout style={{ background: 'white' }}>
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={280} style={{ background: '#fff' }}>
                <SideContent />
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Merch />
                <Music />
                <Blog />
              </Content>
            </Layout>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Landing;

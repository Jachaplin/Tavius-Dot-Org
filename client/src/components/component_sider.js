import React, { Component } from 'react';
import { Layout } from 'antd';
import Books from './component_books'
import '../style/sider.css';

const { Sider } = Layout;

class SideContent extends Component {
  render() {
    return(
      <Layout>
        <Sider width={280} style={{ background: 'white' }}>
          <img id="amazon-icon" src="/images/amazon-icon.png" alt="amazon-kindle" />
          <Books />
        </Sider>
      </Layout>
    )
  }
} 
        
export default SideContent;

import React, { Component } from 'react';
import { Layout } from 'antd';
import TshirtSlides from './component_tshirt-slides'
import MusicPlayer from './component_itunes-player'
import SideContent from './component_sider'
import '../style/center-content.css';

const { Content, Sider } = Layout;

class CenterContent extends Component {
	render() {
		return(
			<Layout style={{ background: 'white' }}>
    		<Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={280} style={{ background: '#fff' }}>
              <SideContent />
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <TshirtSlides />
              <MusicPlayer />
            </Content>
          </Layout>
        </Content>
			</Layout>
		)
	}
} 

export default CenterContent;


      



      

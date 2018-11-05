import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Pagination } from 'antd';
import '../style/blog.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import ShowMore from 'react-show-more';

configureAnchors({
  offset: -80, 
  scrollDuration: 500
})

class Blog extends Component {
	state = {
    current: 1,
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }

	render() {
		return(
			<div id="blog-container">
        <Grid>
	        <Row className="show-grid"> 
	          <Col className="header-img-col" md={12}>
	            <img className="img-header" src="/images/blog-header.png" alt="blog" />
	          </Col>
	        </Row>
	        <Row className="show-grid">
	        	<Col id="blog-title" md={6}>
	        	<ScrollableAnchor id={'blog'}>
	        		<h1>
	        			Blog Title
	        		</h1>
	        	</ScrollableAnchor>
	        		<p id="blog-discription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Ut sed odio sagittis, scelerisque sapien nec, facilisis nunc. 
                Aenean imperdiet metus dignissim volutpat euismod.
              </p>
              
              <Pagination current={this.state.current} onChange={this.onChange} total={50} size="small" />
	        	</Col>
	        	<Col id="blog-img" md={6}>
	        		<img id="blog-img" src="/images/laughing-on-stage.jpg" alt="blog" />
	        	</Col>
	        </Row>
	        <Row className="show-grid"> 
	          <Col md={12}>
	          	<div id="blog-content">
	          		<div className="blog-text">
				         	<ShowMore
			                
			                lines={3}
			                more='Read more'
			                less='Read less'
			                anchorClass='blog-text'
			            >
	                	<p id="text">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac hendrerit arcu, tempor malesuada sapien. Praesent imperdiet posuere eros, eu consectetur erat tristique ac. Phasellus ac orci magna. Nunc quis varius nisl, et tincidunt neque. Maecenas ut vulputate turpis, eu dapibus felis. Etiam leo tortor, eleifend eleifend ipsum a, posuere lobortis mauris. Morbi et ipsum auctor dui tempor feugiat non id felis. Duis sed mattis libero. Pellentesque vitae lacinia diam, sit amet blandit nibh.
				            </p>
				            <p>
											Aliquam efficitur turpis tincidunt, vestibulum purus eget, elementum quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac iaculis mi. Pellentesque egestas tempus sapien vitae commodo. Nunc dolor neque, tempor at odio eu, elementum commodo orci. Sed vehicula magna sit amet risus congue, non sagittis nisi imperdiet. Aenean nec justo nibh. Vivamus eu consectetur turpis.
										</p>
										<p>
											Sed ultrices mattis lacus sed interdum. Etiam ipsum libero, maximus porttitor dignissim ac, tincidunt in justo. Vestibulum dignissim molestie felis, id pulvinar metus egestas id. Sed sit amet felis tristique, viverra leo at, posuere est. Mauris lacinia, arcu in tincidunt viverra, nisi magna consequat enim, vel condimentum massa sem vitae diam. Integer eget libero molestie, elementum lacus nec, placerat erat. Nam vehicula tristique orci, vitae congue nisi tincidunt nec. Nulla eu tincidunt lorem. Morbi mollis nulla libero, a venenatis nisl semper non. Curabitur volutpat tellus sed vehicula laoreet. Sed quis eros ac nulla tristique finibus. Aliquam efficitur orci et lectus rhoncus, mollis hendrerit ipsum congue.
										</p>
										<p>
											Sed quis nisi venenatis, hendrerit dui elementum, mattis diam. Donec convallis nibh eu blandit pulvinar. Maecenas placerat egestas nibh nec interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque commodo felis id tortor feugiat maximus. Proin quis gravida magna. Proin ultrices dolor et iaculis pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ullamcorper diam eget commodo luctus. Sed placerat quam at urna ultrices ultrices. Vestibulum aliquam congue sapien, eget sagittis nunc venenatis in. Mauris euismod quam eu dui fringilla, sed mollis ex suscipit. Aenean ligula leo, luctus ac quam vitae, bibendum ornare nunc. Aliquam erat volutpat. Phasellus mi sapien, vulputate et accumsan nec, sollicitudin sit amet turpis.
										</p>
										<p>
											Aenean porttitor elit mattis erat tempor hendrerit. Suspendisse porta accumsan mi vitae tincidunt. Nullam ut nisl suscipit libero fermentum commodo vitae non enim. Donec varius enim venenatis nisl convallis, ut vehicula justo ultricies. Curabitur varius dictum semper. Phasellus pharetra condimentum metus, at sollicitudin nisl egestas id. Ut sagittis luctus lacus, et dictum leo venenatis in. Phasellus mollis mattis tortor eget dignissim.
				          	</p>
			            </ShowMore>
						       		
	          		</div>
	          	</div>
	          </Col>
	        </Row>
        </Grid>
      </div>
		)
	}
}

export default Blog;
	          		
					        		
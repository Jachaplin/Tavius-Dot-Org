import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../style/navboxes.css';

class NavBoxes extends Component {

	render() {
		return(
			<Grid>
				<Row className="show-grid">
			    <Col className="box grow" md={4}>
			      
			     	<img className="img-button" src="images/music-button.png" />
			      
			    </Col>
			    <Col className="box grow" md={4}>
			      
			      <img className="img-button" src="images/store-button.png" />
			      
			    </Col>
			    <Col className="box grow" md={4}>
			      
			      <img className="img-button" src="images/event-button.png" />
			      
			    </Col>
			  </Row>
			</Grid>
		)
	}
}

export default NavBoxes

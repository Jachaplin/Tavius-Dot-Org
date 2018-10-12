import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../style/navboxes.css';

class NavBoxes extends Component {

	render() {
		return(
			<Grid>
				<Row className="show-grid">
			    <Col className="box grow" md={3}>
			      
			     
			      
			    </Col>
			    <Col className="box grow" md={3}>
			      
			      
			      
			    </Col>
			    <Col className="box grow" md={3}>
			      
			      
			      
			    </Col>
			    <Col className="box grow" md={3}>
			      
			      
			      
			    </Col>
			  </Row>
			</Grid>
		)
	}
}

export default NavBoxes

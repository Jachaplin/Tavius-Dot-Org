import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import '../style/navboxes.css';

class NavBoxes extends Component {

	render() {
		return(
			<Grid>
				<Row className="show-grid">
			    <Col className="box grow" id="music-box" md={4}>
			    	<div id="music-box-1">
				      <Row className="show-grid">
				    		<Col md={12}>
				     			<img className="img-button" src="images/music-button.png" alt="music" />
				     		</Col>
				      </Row>
				     	<Row className="show-grid">
				     		<Col xs={6} xsOffset={6}>
				      		<Button id="box-button" bsStyle="info">Listen Here</Button>
				      	</Col>
				      </Row>
			    	</div>
			    </Col>
			    <Col className="box grow" id="store-box" md={4}>
			    	<div id="store-box-1">
				    	<Row className="show-grid">
				    		<Col md={12}>
				      		<img className="img-button" src="images/store-button.png" alt="store" />
				      	</Col>
				      </Row>
				     	<Row className="show-grid">
				     		<Col xs={6} xsOffset={6}>
				      		<Button id="box-button" bsStyle="info">Shop Here</Button>
				      	</Col>
				      </Row>
			    	</div>
			    </Col>
			    <Col className="box grow" id="event-box" md={4}>
			    	<div id="event-box-1">
				      <Row className="show-grid">
				    		<Col md={12}>
				      		<img className="img-button" src="images/event-button.png" alt="events" />
				      	</Col>
				      </Row>
				     	<Row className="show-grid">
				     		<Col xs={6} xsOffset={6}>
				      		<Button id="box-button" bsStyle="info">See What's Next</Button>
				      	</Col>
				      </Row>
			    	</div>
			    </Col>
			  </Row>
			</Grid>
		)
	}
}

export default NavBoxes
			      
			    

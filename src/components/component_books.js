import React, { Component } from 'react';
import { Card } from 'antd';
import '../style/books.css';

const { Meta } = Card;

class Books extends Component {
	render() {
		return(
			<div>
				<Card
	    hoverable
	    style={{ width: 240 }}
	    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
	  		>
			    <Meta
			      title="Europe Street beat"
			      description="www.instagram.com"
			    />
			  </Card>
			</div>
		)
	}
} 

export default Books;
import React, { Component } from 'react';
import { Card } from 'antd';
import '../style/books.css';

const { Meta } = Card;

class Books extends Component {
	render() {
		return(
			<div>
				<Card
				id="book-container"
		    hoverable
		    
		    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
		  		>
			    <Meta
			      title="Book 1"
			      description="www.instagram.com"
			    />
			  </Card>
			  <Card
				id="book-container"
		    hoverable
		    
		    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
		  		>
			    <Meta
			      title="Book 2"
			      description="www.instagram.com"
			    />
			  </Card>
			  <Card
				id="book-container"
		    hoverable
		    
		    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
		  		>
			    <Meta
			      title="Book 2"
			      description="www.instagram.com"
			    />
			  </Card>
			</div>
		)
	}
} 

export default Books;
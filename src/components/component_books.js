import React, { Component } from 'react';
import { Card } from 'antd';
import '../style/books.css';

const { Meta } = Card;

class Books extends Component {
	render() {
		return(
			<div>
				<div id="grow"><a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
					<Card
					id="book-container"
			    hoverable
			    
			    cover={<img className="book-img" alt="example" src="/images/shaddow-work-pic.png" />}
			  		>
				     <Meta
				      title="Shaddow Work"
				      description="www.amazon.com"
				    />
				  </Card></a>
			  </div>
			  <div id="grow"><a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
					<Card
					id="book-container"
			    hoverable
			    
			    cover={<img className="book-img" alt="example" src="/images/shaddow-work-pic.png" />}
			  		>
				     <Meta
				      title="Shaddow Work"
				      description="www.amazon.com"
				    />
				  </Card></a>
				</div>
			  <div id="grow"><a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
					<Card
					id="book-container"
			    hoverable
			    
			    cover={<img className="book-img" alt="example" src="/images/shaddow-work-pic.png" />}
			  		>
				     <Meta
				      title="Shaddow Work"
				      description="www.amazon.com"
				    />
				  </Card></a>
				</div>
			</div>
		)
	}
} 

export default Books;
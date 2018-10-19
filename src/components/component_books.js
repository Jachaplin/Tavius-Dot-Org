import React, { Component } from 'react';
import { Card } from 'antd';
import '../style/books.css';

const { Meta } = Card;

class Books extends Component {
	render() {
		return(
			<div>
				<div id="grow">
					<a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
						<Card
							id="book-container"
					    hoverable
					    cover={<img className="book-img" alt="example" src="/images/shaddow-work-pic.png" />}
				  		>
				     	<Meta
					      title="Shaddow Work"
					      description="www.amazon.com"
					    	/>
					  </Card>
				  </a>
			  </div>
			  <div id="grow">
			  	<a style={{decoration: 'none'}} target="blank" href='https://www.amazon.ca/Five-Finger-Discount-Tavius-Aiton/dp/130419289X'>
						<Card
							id="book-container"
					    hoverable
				    	cover={<img className="book-img" alt="example" src="https://images-na.ssl-images-amazon.com/images/I/417guma8tiL.jpg" />}
				  		>
					    <Meta
					      title="Five Finger Discount"
					      description="www.amazon.com"
					    	/>
					  </Card>
				  </a>
				</div>
			  <div id="grow">
			  	<a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
						<Card
							id="book-container"
				    	hoverable
				    	cover={<img className="book-img" alt="example" src="https://tomboylesnamedropping.files.wordpress.com/2012/06/incarceracovervw.jpg?w=620" />}
				  		>
				     	<Meta
					      title="Philosopher Stoned: Incarcerated"
					      description="www.amazon.com"
				    	/>
					  </Card>
				  </a>
				</div>
				<div id="grow">
				<a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
					<Card
						id="book-container"
				    hoverable
				    cover={<img className="book-img" alt="example" src="https://tomboylesnamedropping.files.wordpress.com/2012/06/recoveredvw.jpg?w=620" />}
			  		>
				    <Meta
				      title="Philosopher Stoned: Recovered"
				      description="www.amazon.com"
				    />
				  </Card>
				</a>
				</div>
				<div id="grow">
					<a style={{decoration: 'none'}} target="blank" href='https://www.amazon.com/gp/product/B07B2C2F4P/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0'>
						<Card
							id="book-container"
					    hoverable
					    cover={<img className="book-img" alt="example" src="http://static.lulu.com/browse/product_thumbnail.php?productId=21950963&resolution=320" />}
				  		>
					    <Meta
					      title="The Fine Art of Obsolescence"
					      description="www.amazon.com"
					    />
					  </Card>
				  </a>
				</div>
			</div>
		)
	}
} 

export default Books;
			    
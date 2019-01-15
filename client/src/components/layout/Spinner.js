import React, { Component } from 'react';
import { css } from 'react-emotion';
// First way to import
import { RingLoader } from 'react-spinners';
// margin: 375px auto;
const override = css`
	display: block;

	border-color: black;
`;

class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}
	render() {
		return (
			<div className="sweet-loading">
				<RingLoader
					className={override}
					sizeUnit={'px'}
					size={150}
					color={'#00ccff'}
					loading={this.state.loading}
				/>
			</div>
		);
	}
}

export default Spinner;

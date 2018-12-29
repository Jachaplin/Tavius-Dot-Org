import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { newSubscriber } from '../../../actions/subscActions.js';
import {
	Form,
	FormGroup,
	Col,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';

class SubscribePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			errors: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({ errors: nextProps.errors });
		}
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email
		};
		// console.log(newUser)

		this.props.newSubscriber(newUser, this.props.history);
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { errors } = this.state;
		return (
			<div
				id="subscribe-container"
				style={{ marginTop: '200px', paddingRight: '40px' }}
			>
				<Form horizontal onSubmit={this.onSubmit}>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Name
						</Col>
						<Col sm={10}>
							<FormControl
								type="text"
								placeholder="Name"
								name="name"
								value={this.state.name}
								onChange={this.onChange}
								error={errors.name}
							/>
						</Col>
					</FormGroup>

					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={10}>
							<FormControl
								type="email"
								placeholder="Email"
								name="email"
								value={this.state.email}
								onChange={this.onChange}
								error={errors.email}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button type="submit">Submit</Button>
						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

SubscribePage.propTypes = {
	newSubscriber: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ newSubscriber }
)(withRouter(SubscribePage));

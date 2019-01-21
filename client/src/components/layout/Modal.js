import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newSubscriber, getSubscribers } from '../../actions/subscActions.js';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import {
	form,
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';
import './style/Modal.css';

class SubscribeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			error1: null,
			error2: null,
			errors: {},

			visible: false
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

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	// Try this later with async await
	// hideModal = () => {
	// 	this.setState({
	// 		visible: false
	// 	});
	// };

	// setVisibility = isVisible => {
	// 	this.setState({
	// 		visible: isVisible
	// 	});
	// }

	handleOk = event => {
		event.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email
		};

		this.props.newSubscriber(newUser);

		// async function modalErrors(state) {
		// 	const showState = await state;
		// 	console.log(showState.errors);
		// }
		// modalErrors(this.state);

		setTimeout(() => {
			if (
				!isEmpty(this.state.errors.name) &&
				!isEmpty(this.state.errors.email)
			) {
				this.setState({
					visible: true,
					error1: 'error',
					error2: 'error'
				});
			} else if (!isEmpty(this.state.errors.email)) {
				this.setState({
					visible: true,
					error1: null,
					error2: 'error'
				});
			} else if (!isEmpty(this.state.errors.name)) {
				this.setState({
					visible: true,
					error1: 'error',
					error2: null
				});
			} else {
				this.setState({
					visible: false,
					error: null,
					name: '',
					email: '',
					errors: ''
				});
				this.props.getSubscribers();
			}
		}, 250);
	};

	handleCancel = () => {
		this.setState({
			visible: false,
			error1: null,
			error2: null,
			name: '',
			email: '',
			errors: ''
		});
	};

	render() {
		const { visible, errors, error1, error2 } = this.state;

		return (
			<div>
				<Button id="subscribe-button" onClick={this.showModal}>
					Subscribe
				</Button>
				<Modal
					visible={visible}
					title="Subscribe"
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={[
						<Button key="back" onClick={this.handleCancel}>
							Cancel
						</Button>,
						<Button id="submit-button" key="submit" onClick={this.handleOk}>
							Submit
						</Button>
					]}
				>
					<form>
						<FormGroup
							controlId="formValidationError1"
							validationState={error1}
						>
							<ControlLabel>Full Name</ControlLabel>
							<FormControl
								placeholder="Name"
								name="name"
								type="text"
								value={this.state.name}
								onChange={this.onChange}
							/>
							{!isEmpty(errors.name) ? (
								<ControlLabel>{errors.name}</ControlLabel>
							) : null}
						</FormGroup>
						<FormGroup
							controlId="formValidationError1"
							validationState={error2}
						>
							<ControlLabel>Email</ControlLabel>
							<FormControl
								placeholder="Email"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.onChange}
							/>
							{!isEmpty(errors.email) ? (
								<ControlLabel>{errors.email}</ControlLabel>
							) : null}
						</FormGroup>
					</form>
				</Modal>
			</div>
		);
	}
}

SubscribeModal.propTypes = {
	newSubscriber: PropTypes.func.isRequired,
	getSubscribers: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	subscriber: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors,
	subscriber: state.subscriber
});

export default connect(
	mapStateToProps,
	{ newSubscriber, getSubscribers }
)(SubscribeModal);

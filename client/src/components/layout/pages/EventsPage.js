import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { newSubscriber, getSubscribers } from '../../../actions/subscActions';
import { getMerch } from '../../../actions/merchActions';
import { getPosts } from '../../../actions/postsActions';
import isEmpty from '../../../validation/is-empty';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import {
	form,
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	Grid,
	Row,
	Col,
	Jumbotron
} from 'react-bootstrap';
import '../../layout/style/Modal.css';
import './style/EventsPage.css';

class EventsPage extends Component {
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

	componentDidMount() {
		window.scrollTo(0, 0);
		if (this.props.itemListing.itemListing.length === 0) {
			this.props.getMerch();
			this.props.getPosts();
		}
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
			<div id="events-page-container">
				<Grid>
					<Row className="show-grid">
						<Col className="header-img-col" md={12}>
							<img
								className="img-header"
								src="/images/events-header.png"
								alt="events"
							/>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col md={12}>
							<Jumbotron
								id="events-jumbotron"
								style={{
									display: 'blog',
									margin: '0 auto',
									padding: '50px',
									marginTop: '-30px'
								}}
							>
								<h2
									id="event-soon-text"
									style={{
										textAlign: 'center',

										marginBottom: '10px'
									}}
								>
									New events coming soon!
								</h2>
								<h3 style={{ textAlign: 'center' }}>
									Please subscribe to get future event updates
								</h3>
								<div>
									<Button id="event-subscribe-button" onClick={this.showModal}>
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
											<Button
												id="submit-button"
												key="submit"
												onClick={this.handleOk}
											>
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
							</Jumbotron>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

EventsPage.propTypes = {
	itemListing: PropTypes.object.isRequired,
	posts: PropTypes.object.isRequired,
	getMerch: PropTypes.func.isRequired,
	getPosts: PropTypes.func.isRequired,
	newSubscriber: PropTypes.func.isRequired,
	getSubscribers: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	subscriber: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	itemListing: state.itemListing,
	posts: state.posts,
	errors: state.errors,
	subscriber: state.subscriber
});

export default connect(
	mapStateToProps,
	{ newSubscriber, getSubscribers, getMerch, getPosts }
)(withRouter(EventsPage));
